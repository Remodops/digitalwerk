'use client';

import { Section } from "@/components/ui/Section";
import { withPageMeta } from "@/lib/seo";
import { useState } from "react";

export const metadata = withPageMeta({ 
  title: "Datenschutzerklärung", 
  description: "Datenschutzerklärung nach DSGVO für Digitalwerk – Informationen zur Verarbeitung personenbezogener Daten." 
});

// Accordion Component für Betroffenenrechte
function AccordionItem({ title, children, icon }: { title: string; children: React.ReactNode; icon?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-neutral-200 rounded-lg mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors rounded-t-lg"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-3 font-semibold text-neutral-800">
          {icon && <span className="text-lg">{icon}</span>}
          {title}
        </span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 border-t border-neutral-200 bg-neutral-25">
          {children}
        </div>
      )}
    </div>
  );
}

// Highlight Box Component
function HighlightBox({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "legal" | "important" }) {
  const styles = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    legal: "bg-green-50 border-green-200 text-green-800", 
    important: "bg-amber-50 border-amber-200 text-amber-800"
  };
  
  return (
    <div className={`p-4 rounded-lg border ${styles[type]} text-sm`}>
      {children}
    </div>
  );
}

// Section Card Component
function SectionCard({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-neutral-200 rounded-xl p-6 mb-6 shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        {title}
      </h2>
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 py-3">
          <nav className="text-sm text-neutral-600">
            <a href="/" className="hover:text-green-600 transition-colors">Start</a>
            <span className="mx-2">›</span>
            <span className="text-neutral-800">Datenschutz</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">🔒 Datenschutzerklärung</h1>
          <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl">
            Informationen zur Verarbeitung personenbezogener Daten nach Art. 13 und 14 DSGVO
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
          <SectionCard title="Verantwortlicher" icon="👤">
            <p className="text-neutral-700 leading-relaxed mb-4">
              Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
            </p>
            <HighlightBox type="info">
              <div className="space-y-1">
                <div><strong>Digitalwerk – IT Dienstleistungen</strong></div>
                <div>Wilhelmstraße 73</div>
                <div>38100 Braunschweig</div>
                <div>Vertreten durch: Wanja Herkt</div>
                <div>E-Mail: <a href="mailto:wanja@herkt.email" className="text-green-600 hover:text-green-700 transition-colors">wanja@herkt.email</a></div>
              </div>
            </HighlightBox>
          </SectionCard>

          <SectionCard title="Allgemeine Hinweise zur Datenverarbeitung" icon="📋">
            <p className="text-neutral-700 leading-relaxed">
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2021). 
              In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
            </p>
          </SectionCard>
          <SectionCard title="Hosting und Server-Logs" icon="📡">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">Hosting-Provider</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Diese Website wird gehostet bei:
                </p>
                <HighlightBox type="info">
                  <div className="space-y-1 mb-3">
                    <div><strong>Vercel Inc.</strong></div>
                    <div>340 S Lemon Ave #4133</div>
                    <div>Walnut, CA 91789, USA</div>
                    <div>Datenschutzerklärung: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">vercel.com/legal/privacy-policy</a></div>
                  </div>
                </HighlightBox>
                
                <p className="text-neutral-700 leading-relaxed mb-3">
                  Vercel erhebt in sogenannten Logfiles folgende Daten, die Ihr Browser automatisch übermittelt:
                </p>
                <ul className="text-neutral-700 space-y-1 mb-4">
                  <li>• IP-Adresse des zugreifenden Rechners</li>
                  <li>• Datum und Uhrzeit der Anfrage</li>
                  <li>• Name und URL der abgerufenen Datei</li>
                  <li>• Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                  <li>• Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers</li>
                </ul>
                
                <div className="grid gap-3">
                  <HighlightBox type="legal">
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der ordnungsgemäßen Bereitstellung und Sicherheit der Website)
                  </HighlightBox>
                  <HighlightBox type="legal">
                    <strong>Speicherdauer:</strong> Die Daten werden nach spätestens 7 Tagen gelöscht
                  </HighlightBox>
                  <HighlightBox type="legal">
                    <strong>Zweck:</strong> Sicherstellung der Funktionsfähigkeit und Sicherheit der Website
                  </HighlightBox>
                  <HighlightBox type="important">
                    <strong>Datenübertragung in Drittländer:</strong> Die Datenübertragung in die USA erfolgt auf Grundlage von EU-Standardvertragsklauseln (SCCs)
                  </HighlightBox>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">DNS-Services</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Für DNS-Services nutzen wir:
                </p>
                <HighlightBox type="info">
                  <div className="space-y-1 mb-3">
                    <div><strong>Cloudflare, Inc.</strong></div>
                    <div>101 Townsend St.</div>
                    <div>San Francisco, CA 94107, USA</div>
                    <div>Datenschutzerklärung: <a href="https://www.cloudflare.com/de-de/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">cloudflare.com/de-de/privacypolicy</a></div>
                  </div>
                </HighlightBox>
                
                <div className="grid gap-3">
                  <HighlightBox type="legal">
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen Bereitstellung der Website)
                  </HighlightBox>
                  <HighlightBox type="important">
                    <strong>Datenübertragung in Drittländer:</strong> Die Datenübertragung in die USA erfolgt auf Grundlage von EU-Standardvertragsklauseln (SCCs)
                  </HighlightBox>
                </div>
              </div>
            </div>
          </SectionCard>
          <SectionCard title="Kontaktformular" icon="✉️">
            <div className="space-y-6">
              <p className="text-neutral-700 leading-relaxed">
                Wenn Sie unser Kontaktformular nutzen, verarbeiten wir folgende personenbezogene Daten:
              </p>
              
              <div className="grid gap-2">
                <div className="text-neutral-700">
                  <span className="font-semibold">• Name</span> (Pflichtfeld)
                </div>
                <div className="text-neutral-700">
                  <span className="font-semibold">• E-Mail-Adresse</span> (Pflichtfeld)
                </div>
                <div className="text-neutral-700">
                  <span className="font-semibold">• Telefonnummer</span> (optional)
                </div>
                <div className="text-neutral-700">
                  <span className="font-semibold">• Betreff</span> (optional)
                </div>
                <div className="text-neutral-700">
                  <span className="font-semibold">• Nachrichteninhalt</span> (Pflichtfeld)
                </div>
                <div className="text-neutral-700">
                  <span className="font-semibold">• IP-Adresse und Zeitpunkt der Anfrage</span> (automatisch)
                </div>
              </div>
              
              <div className="grid gap-3">
                <HighlightBox type="legal">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch Zustimmung zur Datenschutzerklärung)
                </HighlightBox>
                <HighlightBox type="legal">
                  <strong>Zweck:</strong> Bearbeitung Ihrer Anfrage und Kontaktaufnahme
                </HighlightBox>
                <HighlightBox type="legal">
                  <strong>Speicherdauer:</strong> Ihre Kontaktanfrage wird gelöscht, sobald die Bearbeitung abgeschlossen ist und keine weitere Kommunikation erforderlich ist. Bei geschäftlichen Anfragen können Aufbewahrungsfristen nach HGB (6 Jahre) oder AO (10 Jahre) gelten. In der Regel erfolgt die Löschung nach spätestens 3 Jahren.
                </HighlightBox>
                <HighlightBox type="info">
                  <strong>Empfänger:</strong> Die Daten werden per E-Mail über Amazon SES an unsere Geschäfts-E-Mail-Adresse übermittelt
                </HighlightBox>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">🛡️ Spam-Schutz und Rate-Limiting</h3>
                <p className="text-neutral-700 leading-relaxed mb-3">
                  Zum Schutz vor Spam verwenden wir folgende Maßnahmen:
                </p>
                <div className="grid gap-2">
                  <div className="text-neutral-700">• Honeypot-Felder zur automatischen Spam-Erkennung</div>
                  <div className="text-neutral-700">• Rate-Limiting (max. 3 Anfragen pro Minute pro IP-Adresse)</div>
                  <div className="text-neutral-700">• Serverseitige Validierung aller Eingaben</div>
                </div>
              </div>
            </div>
          </SectionCard>
          <SectionCard title="E-Mail-Versand über Amazon SES" icon="📮">
            <p className="text-neutral-700 leading-relaxed mb-4">
              Für den Versand von E-Mails nutzen wir den Dienst Amazon Simple Email Service (SES). 
              Ihre über das Kontaktformular übermittelten Daten werden dabei an Amazon Web Services übertragen.
            </p>
            
            <HighlightBox type="info">
              <div className="space-y-1 mb-3">
                <div><strong>Amazon Web Services, Inc.</strong></div>
                <div>410 Terry Avenue North</div>
                <div>Seattle WA 98109, USA</div>
                <div>Datenschutzerklärung: <a href="https://aws.amazon.com/de/privacy/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">aws.amazon.com/de/privacy</a></div>
              </div>
            </HighlightBox>
            
            <div className="grid gap-3">
              <HighlightBox type="legal">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an zuverlässigem E-Mail-Versand)
              </HighlightBox>
              <HighlightBox type="legal">
                <strong>Auftragsverarbeitung:</strong> Mit Amazon wurde ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO geschlossen
              </HighlightBox>
              <HighlightBox type="important">
                <strong>Datenübertragung in Drittländer:</strong> Die Datenübertragung in die USA erfolgt auf Grundlage von EU-Standardvertragsklauseln (SCCs) gemäß Art. 46 DSGVO
              </HighlightBox>
            </div>
          </SectionCard>
          <SectionCard title="Cookies und Tracking" icon="🍪">
            <div className="space-y-6">
              <p className="text-neutral-700 leading-relaxed">
                Unsere Website kann optional Cookies für Analysezwecke verwenden. Aktuell sind alle Analytics-Features deaktiviert. Falls Analytics-Tools aktiviert werden, erscheint ein Consent-Banner, über das Sie der Verwendung von Cookies zustimmen oder diese ablehnen können.
              </p>
              
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">Technisch notwendige Cookies</h3>
                <p className="text-neutral-700 leading-relaxed mb-3">
                  Wir setzen technisch notwendige Cookies ein, um die Funktionsfähigkeit unserer Website sicherzustellen:
                </p>
                <div className="bg-neutral-50 p-4 rounded-lg mb-3">
                  <div className="text-neutral-700">
                    <strong>Consent-Cookie:</strong> Speichert Ihre Entscheidung bezüglich der Cookie-Nutzung (Name: "digitalwerk-consent", Laufzeit: unbegrenzt bis zur Löschung)
                  </div>
                </div>
                <HighlightBox type="legal">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Funktionsfähigkeit der Website)
                </HighlightBox>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">Analytics-Cookies (optional)</h3>
                <p className="text-neutral-700 leading-relaxed mb-3">
                  Zur Analyse der Website-Nutzung können wir folgende datenschutzfreundliche Analytics-Dienste einsetzen:
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-neutral-700">• <strong>Umami Analytics:</strong> Selbst gehostet, anonymisierte Datenerfassung ohne personenbezogene Daten</div>
                  <div className="text-neutral-700">• <strong>Plausible Analytics:</strong> Datenschutzfreundliche Alternative zu Google Analytics, DSGVO-konform</div>
                </div>
                
                <div className="grid gap-3">
                  <HighlightBox type="legal">
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung über Consent-Banner)
                  </HighlightBox>
                  <HighlightBox type="legal">
                    <strong>Zweck:</strong> Verbesserung der Website-Performance und Benutzererfahrung
                  </HighlightBox>
                  <HighlightBox type="legal">
                    <strong>Speicherdauer:</strong> Anonymisierte Daten werden für maximal 24 Monate gespeichert
                  </HighlightBox>
                  <HighlightBox type="info">
                    <strong>Widerruf:</strong> Sie können Ihre Einwilligung jederzeit über die Cookie-Einstellungen widerrufen
                  </HighlightBox>
                </div>
              </div>
            </div>
          </SectionCard>
          <SectionCard title="Ihre Rechte als betroffene Person" icon="⚖️">
            <p className="text-neutral-700 leading-relaxed mb-6">
              Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
            </p>
            
            <div className="space-y-3">
              <AccordionItem title="Auskunftsrecht (Art. 15 DSGVO)" icon="🔍">
                <p className="text-neutral-700 leading-relaxed">
                  Sie haben das Recht, Auskunft über die von uns verarbeiteten personenbezogenen Daten zu verlangen. Dies umfasst Informationen über Verarbeitungszwecke, Kategorien verarbeiteter Daten, Empfänger und geplante Speicherdauer.
                </p>
              </AccordionItem>
              
              <AccordionItem title="Recht auf Berichtigung (Art. 16 DSGVO)" icon="✏️">
                <p className="text-neutral-700 leading-relaxed">
                  Sie haben das Recht auf Berichtigung unrichtiger oder Vervollständigung unvollständiger personenbezogener Daten, die wir über Sie verarbeiten.
                </p>
              </AccordionItem>
              
              <AccordionItem title="Recht auf Löschung (Art. 17 DSGVO)" icon="🗑️">
                <p className="text-neutral-700 leading-relaxed">
                  Sie haben das Recht auf Löschung Ihrer personenbezogenen Daten, sofern keine gesetzlichen Aufbewahrungsfristen bestehen oder andere rechtliche Gründe gegen eine Löschung sprechen.
                </p>
              </AccordionItem>
              
              <AccordionItem title="Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)" icon="⏸️">
                <p className="text-neutral-700 leading-relaxed">
                  Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen, wenn bestimmte Voraussetzungen erfüllt sind.
                </p>
              </AccordionItem>
              
              <AccordionItem title="Recht auf Datenübertragbarkeit (Art. 20 DSGVO)" icon="📤">
                <p className="text-neutral-700 leading-relaxed">
                  Sie haben das Recht, die Sie betreffenden personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten und diese an einen anderen Verantwortlichen zu übermitteln.
                </p>
              </AccordionItem>
              
              <AccordionItem title="Widerspruchsrecht (Art. 21 DSGVO)" icon="🚫">
                <p className="text-neutral-700 leading-relaxed">
                  Sie haben das Recht, der Verarbeitung Ihrer personenbezogenen Daten aus Gründen Ihrer besonderen Situation zu widersprechen, wenn die Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO beruht.
                </p>
              </AccordionItem>
              
              <AccordionItem title="Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)" icon="↩️">
                <p className="text-neutral-700 leading-relaxed">
                  Sofern die Verarbeitung auf einer Einwilligung beruht, haben Sie das Recht, diese jederzeit zu widerrufen. Der Widerruf berührt nicht die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung.
                </p>
              </AccordionItem>
              
              <AccordionItem title="Beschwerderecht bei der Aufsichtsbehörde (Art. 77 DSGVO)" icon="🏛️">
                <div className="space-y-3">
                  <p className="text-neutral-700 leading-relaxed">
                    Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über unsere Verarbeitung personenbezogener Daten zu beschweren.
                  </p>
                  <HighlightBox type="info">
                    <div>
                      <strong>Zuständige Aufsichtsbehörde in Niedersachsen:</strong><br/>
                      Landesbeauftragte für den Datenschutz Niedersachsen<br/>
                      Prinzenstraße 5, 30159 Hannover<br/>
                      E-Mail: poststelle@lfd.niedersachsen.de
                    </div>
                  </HighlightBox>
                </div>
              </AccordionItem>
            </div>
          </SectionCard>
          <SectionCard title="Datensicherheit" icon="🔒">
            <p className="text-neutral-700 leading-relaxed mb-4">
              Wir verwenden geeignete technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
            </p>
            <div className="grid gap-2">
              <div className="text-neutral-700">🔐 SSL/TLS-Verschlüsselung für die gesamte Website</div>
              <div className="text-neutral-700">⚙️ Sichere Server-Konfiguration</div>
              <div className="text-neutral-700">🔄 Regelmäßige Sicherheitsupdates</div>
              <div className="text-neutral-700">🚪 Zugriffsbeschränkungen auf Serverdaten</div>
            </div>
          </SectionCard>
          
          <SectionCard title="Automatisierte Entscheidungsfindung" icon="🤖">
            <p className="text-neutral-700 leading-relaxed">
              Wir verwenden keine automatisierte Entscheidungsfindung oder Profiling im Sinne von Art. 22 DSGVO.
            </p>
          </SectionCard>
          
          <SectionCard title="Aktualität und Änderung dieser Datenschutzerklärung" icon="📅">
            <p className="text-neutral-700 leading-relaxed">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand von August 2025. Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
            </p>
          </SectionCard>
          
          <SectionCard title="Kontakt" icon="📞">
            <p className="text-neutral-700 leading-relaxed mb-4">
              Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte können Sie uns jederzeit unter folgenden Kontaktdaten erreichen:
            </p>
            <HighlightBox type="info">
              <div className="space-y-1">
                <div><strong>Digitalwerk – IT Dienstleistungen</strong></div>
                <div>Wilhelmstraße 73</div>
                <div>38100 Braunschweig</div>
                <div>Vertreten durch: Wanja Herkt</div>
                <div>E-Mail: <a href="mailto:wanja@herkt.email" className="text-green-600 hover:text-green-700 transition-colors">wanja@herkt.email</a></div>
              </div>
            </HighlightBox>
          </SectionCard>
          
          {/* Wichtiger Hinweis */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-green-500 rounded-lg shadow-sm">
            <div className="flex items-start gap-3">
              <span className="text-2xl">ℹ️</span>
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">Rechtlicher Hinweis</h3>
                <p className="text-neutral-700 leading-relaxed mb-0">
                  Diese Datenschutzerklärung wurde nach bestem Wissen und Gewissen erstellt. Sie stellt jedoch keine Rechtsberatung dar. 
                  Für eine rechtssichere Datenschutzerklärung empfehlen wir die Beratung durch einen spezialisierten Anwalt oder Datenschutzbeauftragten.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-neutral-800 text-white">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="text-center space-y-4">
              <div className="text-lg font-semibold">Digitalwerk – IT Dienstleistungen</div>
              <div className="text-neutral-300">
                Wilhelmstraße 73 • 38100 Braunschweig • Deutschland
              </div>
              <div className="text-neutral-300">
                E-Mail: <a href="mailto:wanja@herkt.email" className="text-green-400 hover:text-green-300 transition-colors">wanja@herkt.email</a>
              </div>
              <div className="pt-4 border-t border-neutral-700 text-sm text-neutral-400">
                © 2025 Digitalwerk. Diese Datenschutzerklärung entspricht den Anforderungen der DSGVO.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


