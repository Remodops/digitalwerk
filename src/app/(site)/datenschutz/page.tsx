import { Section } from "@/components/ui/Section";
import { withPageMeta } from "@/lib/seo";

export const metadata = withPageMeta({ 
  title: "Datenschutzerklärung", 
  description: "Datenschutzerklärung nach DSGVO für Digitalwerk – Informationen zur Verarbeitung personenbezogener Daten." 
});

export default function Page() {
  return (
    <Section title="Datenschutzerklärung" subtitle="Informationen zur Verarbeitung personenbezogener Daten nach Art. 13 und 14 DSGVO">
      <div className="prose prose-neutral max-w-none">
        <h2>1. Verantwortlicher</h2>
        <p>
          Verantwortlicher für die Datenverarbeitung auf dieser Website ist:<br/>
          <strong>Digitalwerk – IT Dienstleistungen</strong><br/>
          Wilhelmstraße 73<br/>
          38100 Braunschweig<br/>
          Vertreten durch: Wanja Herkt<br/>
          E-Mail: <a href="mailto:wanja@herkt.email">wanja@herkt.email</a>
        </p>
        
        <h2>2. Allgemeine Hinweise zur Datenverarbeitung</h2>
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2021). 
          In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
        </p>
        
        <h2>3. Hosting und Server-Logs</h2>
        
        <h3>3.1 Hosting-Provider</h3>
        <p>
          Diese Website wird gehostet bei:
        </p>
        <p>
          <strong>Vercel Inc.</strong><br/>
          340 S Lemon Ave #4133<br/>
          Walnut, CA 91789, USA<br/>
          Datenschutzerklärung: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">https://vercel.com/legal/privacy-policy</a>
        </p>
        <p>
          Vercel erhebt in sogenannten Logfiles folgende Daten, die Ihr Browser automatisch übermittelt:
        </p>
        <ul>
          <li>IP-Adresse des zugreifenden Rechners</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Name und URL der abgerufenen Datei</li>
          <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
          <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers</li>
        </ul>
        <p>
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der ordnungsgemäßen Bereitstellung und Sicherheit der Website)<br/>
          <strong>Speicherdauer:</strong> Die Daten werden nach spätestens 7 Tagen gelöscht<br/>
          <strong>Zweck:</strong> Sicherstellung der Funktionsfähigkeit und Sicherheit der Website<br/>
          <strong>Datenübertragung in Drittländer:</strong> Die Datenübertragung in die USA erfolgt auf Grundlage von EU-Standardvertragsklauseln (SCCs)
        </p>
        
        <h3>3.2 DNS-Services</h3>
        <p>
          Für DNS-Services nutzen wir:
        </p>
        <p>
          <strong>Cloudflare, Inc.</strong><br/>
          101 Townsend St.<br/>
          San Francisco, CA 94107, USA<br/>
          Datenschutzerklärung: <a href="https://www.cloudflare.com/de-de/privacypolicy/" target="_blank" rel="noopener noreferrer">https://www.cloudflare.com/de-de/privacypolicy/</a>
        </p>
        <p>
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen Bereitstellung der Website)<br/>
          <strong>Datenübertragung in Drittländer:</strong> Die Datenübertragung in die USA erfolgt auf Grundlage von EU-Standardvertragsklauseln (SCCs)
        </p>
        
        <h2>4. Kontaktformular</h2>
        <p>
          Wenn Sie unser Kontaktformular nutzen, verarbeiten wir folgende personenbezogene Daten:
        </p>
        <ul>
          <li>Name (Pflichtfeld)</li>
          <li>E-Mail-Adresse (Pflichtfeld)</li>
          <li>Telefonnummer (optional)</li>
          <li>Betreff (optional)</li>
          <li>Nachrichteninhalt (Pflichtfeld)</li>
          <li>IP-Adresse und Zeitpunkt der Anfrage (automatisch)</li>
        </ul>
        <p>
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch Zustimmung zur Datenschutzerklärung)<br/>
          <strong>Zweck:</strong> Bearbeitung Ihrer Anfrage und Kontaktaufnahme<br/>
          <strong>Speicherdauer:</strong> Ihre Kontaktanfrage wird gelöscht, sobald die Bearbeitung abgeschlossen ist und keine weitere Kommunikation erforderlich ist. Bei geschäftlichen Anfragen können Aufbewahrungsfristen nach HGB (6 Jahre) oder AO (10 Jahre) gelten. In der Regel erfolgt die Löschung nach spätestens 3 Jahren.<br/>
          <strong>Empfänger:</strong> Die Daten werden per E-Mail über Amazon SES an unsere Geschäfts-E-Mail-Adresse übermittelt
        </p>
        
        <h3>4.1 Spam-Schutz und Rate-Limiting</h3>
        <p>
          Zum Schutz vor Spam verwenden wir folgende Maßnahmen:
        </p>
        <ul>
          <li>Honeypot-Felder zur automatischen Spam-Erkennung</li>
          <li>Rate-Limiting (max. 3 Anfragen pro Minute pro IP-Adresse)</li>
          <li>Serverseitige Validierung aller Eingaben</li>
        </ul>
        
        <h2>5. E-Mail-Versand über Amazon SES</h2>
        <p>
          Für den Versand von E-Mails nutzen wir den Dienst Amazon Simple Email Service (SES). 
          Ihre über das Kontaktformular übermittelten Daten werden dabei an Amazon Web Services übertragen.
        </p>
        <p>
          <strong>Anbieter:</strong> Amazon Web Services, Inc., 410 Terry Avenue North, Seattle WA 98109, USA<br/>
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an zuverlässigem E-Mail-Versand)<br/>
          <strong>Auftragsverarbeitung:</strong> Mit Amazon wurde ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO geschlossen<br/>
          <strong>Datenübertragung in Drittländer:</strong> Die Datenübertragung in die USA erfolgt auf Grundlage von EU-Standardvertragsklauseln (SCCs) gemäß Art. 46 DSGVO<br/>
          <strong>Datenschutzerklärung:</strong> <a href="https://aws.amazon.com/de/privacy/" target="_blank" rel="noopener noreferrer">https://aws.amazon.com/de/privacy/</a>
        </p>
        
        <h2>6. Cookies und Tracking</h2>
        <p>
          Unsere Website kann optional Cookies für Analysezwecke verwenden. Aktuell sind alle Analytics-Features deaktiviert. Falls Analytics-Tools aktiviert werden, erscheint ein Consent-Banner, über das Sie der Verwendung von Cookies zustimmen oder diese ablehnen können.
        </p>
        
        <h3>6.1 Technisch notwendige Cookies</h3>
        <p>
          Wir setzen technisch notwendige Cookies ein, um die Funktionsfähigkeit unserer Website sicherzustellen:
        </p>
        <ul>
          <li><strong>Consent-Cookie:</strong> Speichert Ihre Entscheidung bezüglich der Cookie-Nutzung (Name: "digitalwerk-consent", Laufzeit: unbegrenzt bis zur Löschung)</li>
        </ul>
        <p>
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Funktionsfähigkeit der Website)
        </p>
        
        <h3>6.2 Analytics-Cookies (optional)</h3>
        <p>
          Zur Analyse der Website-Nutzung können wir folgende datenschutzfreundliche Analytics-Dienste einsetzen:
        </p>
        <ul>
          <li><strong>Umami Analytics:</strong> Selbst gehostet, anonymisierte Datenerfassung ohne personenbezogene Daten</li>
          <li><strong>Plausible Analytics:</strong> Datenschutzfreundliche Alternative zu Google Analytics, DSGVO-konform</li>
        </ul>
        <p>
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung über Consent-Banner)<br/>
          <strong>Zweck:</strong> Verbesserung der Website-Performance und Benutzererfahrung<br/>
          <strong>Speicherdauer:</strong> Anonymisierte Daten werden für maximal 24 Monate gespeichert<br/>
          <strong>Widerruf:</strong> Sie können Ihre Einwilligung jederzeit über die Cookie-Einstellungen widerrufen
        </p>
        
        <h2>7. Ihre Rechte als betroffene Person</h2>
        <p>
          Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
        </p>
        
        <h3>7.1 Auskunftsrecht (Art. 15 DSGVO)</h3>
        <p>
          Sie haben das Recht, Auskunft über die von uns verarbeiteten personenbezogenen Daten zu verlangen.
        </p>
        
        <h3>7.2 Recht auf Berichtigung (Art. 16 DSGVO)</h3>
        <p>
          Sie haben das Recht auf Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten.
        </p>
        
        <h3>7.3 Recht auf Löschung (Art. 17 DSGVO)</h3>
        <p>
          Sie haben das Recht auf Löschung Ihrer personenbezogenen Daten, sofern keine gesetzlichen Aufbewahrungsfristen bestehen.
        </p>
        
        <h3>7.4 Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</h3>
        <p>
          Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer Daten zu verlangen.
        </p>
        
        <h3>7.5 Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</h3>
        <p>
          Sie haben das Recht, die Sie betreffenden Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
        </p>
        
        <h3>7.6 Widerspruchsrecht (Art. 21 DSGVO)</h3>
        <p>
          Sie haben das Recht, der Verarbeitung Ihrer Daten aus Gründen Ihres besonderen Situation zu widersprechen.
        </p>
        
        <h3>7.7 Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)</h3>
        <p>
          Sofern die Verarbeitung auf einer Einwilligung beruht, haben Sie das Recht, diese jederzeit zu widerrufen.
        </p>
        
        <h3>7.8 Beschwerderecht bei der Aufsichtsbehörde (Art. 77 DSGVO)</h3>
        <p>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über unsere Verarbeitung personenbezogener Daten zu beschweren.
        </p>
        
        <h2>8. Datensicherheit</h2>
        <p>
          Wir verwenden geeignete technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
        </p>
        <ul>
          <li>SSL/TLS-Verschlüsselung für die gesamte Website</li>
          <li>Sichere Server-Konfiguration</li>
          <li>Regelmäßige Sicherheitsupdates</li>
          <li>Zugriffsbeschränkungen auf Serverdaten</li>
        </ul>
        
        <h2>9. Automatisierte Entscheidungsfindung</h2>
        <p>
          Wir verwenden keine automatisierte Entscheidungsfindung oder Profiling im Sinne von Art. 22 DSGVO.
        </p>
        
        <h2>10. Aktualität und Änderung dieser Datenschutzerklärung</h2>
        <p>
          Diese Datenschutzerklärung ist aktuell gültig und hat den Stand von August 2025. Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
        </p>
        
        <h2>11. Kontakt</h2>
        <p>
          Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte können Sie uns jederzeit unter folgenden Kontaktdaten erreichen:
        </p>
        <p>
          <strong>Digitalwerk – IT Dienstleistungen</strong><br/>
          Wilhelmstraße 73<br/>
          38100 Braunschweig<br/>
          Vertreten durch: Wanja Herkt<br/>
          E-Mail: <a href="mailto:wanja@herkt.email">wanja@herkt.email</a>
        </p>
        
        <div className="mt-8 p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
          <p className="text-sm text-neutral-600 mb-0">
            <strong>Hinweis:</strong> Diese Datenschutzerklärung wurde nach bestem Wissen und Gewissen erstellt. Sie stellt jedoch keine Rechtsberatung dar. 
            Für eine rechtssichere Datenschutzerklärung empfehlen wir die Beratung durch einen spezialisierten Anwalt oder Datenschutzbeauftragten.
          </p>
        </div>
      </div>
    </Section>
  );
}


