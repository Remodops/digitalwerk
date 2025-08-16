import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';

// Rate limiting (einfache In-Memory Lösung für den Start)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 Minute
const RATE_LIMIT_MAX_REQUESTS = 3; // Max 3 Anfragen pro Minute pro IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;
  
  const current = rateLimitMap.get(ip);
  if (!current || current.timestamp < windowStart) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }
  
  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }
  
  current.count++;
  return false;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  return input.trim().slice(0, 1000); // Begrenzen auf 1000 Zeichen
}

export async function POST(request: NextRequest) {
  try {
    // IP-basiertes Rate Limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Zu viele Anfragen. Bitte versuche es in einer Minute erneut.' },
        { status: 429 }
      );
    }

    const formData = await request.formData();
    
    // Daten extrahieren
    const name = sanitizeInput(formData.get('name') as string || '');
    const email = sanitizeInput(formData.get('email') as string || '');
    const phone = sanitizeInput(formData.get('phone') as string || '');
    const subject = sanitizeInput(formData.get('subject') as string || 'Neue Kontaktanfrage');
    const message = sanitizeInput(formData.get('message') as string || '');
    const privacyConsent = formData.get('privacyConsent') === 'on';
    
    // Honeypot Feld prüfen (Spam-Schutz)
    const company = formData.get('company') as string || '';
    if (company) {
      // Spam erkannt - aber nicht offensichtlich ablehnen
      return NextResponse.json({ success: true });
    }

    // Validierung
    if (!name || name.length < 2) {
      return NextResponse.json(
        { error: 'Bitte gib einen gültigen Namen ein.' },
        { status: 400 }
      );
    }

    if (!email || !validateEmail(email)) {
      return NextResponse.json(
        { error: 'Bitte gib eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { error: 'Bitte gib eine Nachricht mit mindestens 10 Zeichen ein.' },
        { status: 400 }
      );
    }

    if (!privacyConsent) {
      return NextResponse.json(
        { error: 'Bitte stimme den Datenschutzbestimmungen zu.' },
        { status: 400 }
      );
    }

    // E-Mail senden
    await sendContactEmail({
      name,
      email,
      phone,
      subject,
      message,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.' },
      { status: 500 }
    );
  }
}
