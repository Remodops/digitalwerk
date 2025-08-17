export default function PrivacyContent() {
  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      {/* H1 - Hauptüberschrift */}
      <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-12 text-left">
        Datenschutzerklärung
      </h1>

      <div className="space-y-12 text-left leading-relaxed">
        {/* Verantwortlicher */}
        <section>
          <h2 className="text-xl font-semibold text-neutral-800 mb-6">
            Verantwortlicher
          </h2>
          
          <p className="text-base text-neutral-700 mb-6">
            Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
          </p>
          
          <div className="bg-neutral-50 p-6 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-2">
              Digitalwerk – IT Dienstleistungen
            </p>
            <p className="text-base text-neutral-700">
              Wilhelmstraße 73<br/>
              38100 Braunschweig<br/>
              Vertreten durch: Wanja Herkt<br/>
              E-Mail: <a href="mailto:info@digitalwerk-it.com" className="text-blue-600 hover:text-blue-800 underline">info@digitalwerk-it.com</a>
            </p>
          </div>
        </section>
        
        {/* Allgemeine Hinweise */}
        <section>
          <h2 className="text-xl font-semibold text-neutral-800 mb-6">
            Allgemeine Hinweise zur Datenverarbeitung
          </h2>
          <p className="text-base text-neutral-700 leading-relaxed">
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2021). In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
          </p>
        </section>
        
        {/* Hosting und Server-Logs */}
        <section>
          <h2 className="text-xl font-semibold text-neutral-800 mb-6">
            Hosting und Server-Logs
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-3">Hosting-Provider</h3>
              <p className="text-base text-neutral-700 mb-4">
                Diese Website wird gehostet bei:
              </p>
              
              <div className="bg-neutral-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-neutral-900 mb-1">Vercel Inc.</p>
                <p className="text-base text-neutral-700">
                  340 S Lemon Ave #4133<br/>
                  Walnut, CA 91789, USA<br/>
                  Datenschutzerklärung: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">vercel.com/legal/privacy-policy</a>
                </p>
              </div>
              
              <p className="text-base text-neutral-700 mb-3">
                Vercel erhebt in sogenannten Logfiles folgende Daten, die Ihr Browser automatisch übermittelt:
              </p>
              
              <ul className="text-base text-neutral-700 space-y-2 list-disc pl-6 mb-4">
                <li>IP-Adresse des zugreifenden Rechners</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>Verwendeter Browser und ggf. das Betriebssystem</li>
              </ul>
              
              <div className="space-y-3">
                <p className="text-base text-neutral-700"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</p>
                <p className="text-base text-neutral-700"><strong>Speicherdauer:</strong> Die Daten werden nach spätestens 7 Tagen gelöscht</p>
                <p className="text-base text-neutral-700"><strong>Zweck:</strong> Sicherstellung der Funktionsfähigkeit und Sicherheit der Website</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-3">DNS-Services</h3>
              <p className="text-base text-neutral-700 mb-4">
                Für DNS-Services nutzen wir:
              </p>
              
              <div className="bg-neutral-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-neutral-900 mb-1">Cloudflare, Inc.</p>
                <p className="text-base text-neutral-700">
                  101 Townsend St.<br/>
                  San Francisco, CA 94107, USA<br/>
                  Datenschutzerklärung: <a href="https://www.cloudflare.com/de-de/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">cloudflare.com/de-de/privacypolicy</a>
                </p>
              </div>
              
              <p className="text-base text-neutral-700"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</p>
            </div>
          </div>
        </section>
        
        {/* Kontaktformular */}
        <section>
          <h2 className="text-xl font-semibold text-neutral-800 mb-6">
            Kontaktformular
          </h2>
          
          <p className="text-base text-neutral-700 mb-4">
            Wenn Sie unser Kontaktformular nutzen, verarbeiten wir folgende personenbezogene Daten:
          </p>
          
          <ul className="text-base text-neutral-700 space-y-2 list-disc pl-6 mb-6">
            <li><strong>Name</strong> (Pflichtfeld)</li>
            <li><strong>E-Mail-Adresse</strong> (Pflichtfeld)</li>
            <li><strong>Telefonnummer</strong> (optional)</li>
            <li><strong>Betreff</strong> (optional)</li>
            <li><strong>Nachrichteninhalt</strong> (Pflichtfeld)</li>
            <li><strong>IP-Adresse und Zeitpunkt der Anfrage</strong> (automatisch)</li>
          </ul>
          
          <div className="space-y-3 mb-6">
            <p className="text-base text-neutral-700"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</p>
            <p className="text-base text-neutral-700"><strong>Zweck:</strong> Bearbeitung Ihrer Anfrage und Kontaktaufnahme</p>
            <p className="text-base text-neutral-700"><strong>Speicherdauer:</strong> Die Daten werden gelöscht, sobald die Bearbeitung abgeschlossen ist. Bei geschäftlichen Anfragen können Aufbewahrungsfristen nach HGB (6 Jahre) oder AO (10 Jahre) gelten.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-neutral-800 mb-3">Spam-Schutz</h3>
          <p className="text-base text-neutral-700 mb-3">
            Zum Schutz vor Spam verwenden wir folgende Maßnahmen:
          </p>
          <ul className="text-base text-neutral-700 space-y-2 list-disc pl-6">
            <li>Honeypot-Felder zur automatischen Spam-Erkennung</li>
            <li>Rate-Limiting (max. 3 Anfragen pro Minute pro IP-Adresse)</li>
            <li>Serverseitige Validierung aller Eingaben</li>
          </ul>
        </section>
        
        {/* E-Mail-Versand */}
        <section>
          <h2 className="text-xl font-semibold text-neutral-800 mb-6">
            E-Mail-Versand über Amazon SES
          </h2>
          
          <p className="text-base text-neutral-700 mb-4">
            Für den Versand von E-Mails nutzen wir den Dienst Amazon Simple Email Service (SES). Ihre über das Kontaktformular übermittelten Daten werden dabei an Amazon Web Services übertragen.
          </p>
          
          <div className="bg-neutral-50 p-4 rounded-lg mb-4">
            <p className="font-semibold text-neutral-900 mb-1">Amazon Web Services, Inc.</p>
            <p className="text-base text-neutral-700">
              410 Terry Avenue North<br/>
              Seattle WA 98109, USA<br/>
              Datenschutzerklärung: <a href="https://aws.amazon.com/de/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">aws.amazon.com/de/privacy</a>
            </p>
          </div>
          
          <div className="space-y-3">
            <p className="text-base text-neutral-700"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</p>
            <p className="text-base text-neutral-700"><strong>Auftragsverarbeitung:</strong> Mit Amazon wurde ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO geschlossen</p>
          </div>
        </section>
        
        {/* Cookies und Tracking */}
        <section>
          <h2 className="text-xl font-semibold text-neutral-800 mb-6">
            Cookies und Tracking
          </h2>
          
          <p className="text-base text-neutral-700 mb-6">
            Unsere Website kann optional Cookies für Analysezwecke verwenden. Aktuell sind alle Analytics-Features deaktiviert. Falls Analytics-Tools aktiviert werden, erscheint ein Consent-Banner.
          </p>
          
          <h3 className="text-lg font-semibold text-neutral-800 mb-3">Technisch notwendige Cookies</h3>
          <p className="text-base text-neutral-700 mb-4">
            Wir setzen technisch notwendige Cookies ein, um die Funktionsfähigkeit unserer Website sicherzustellen:
          </p>
          
          <p className="text-base text-neutral-700 mb-4">
            <strong>Consent-Cookie:</strong> Speichert Ihre Entscheidung bezüglich der Cookie-Nutzung (Name: &quot;digitalwerk-consent&quot;, Laufzeit: unbegrenzt bis zur Löschung)
          </p>
          
          <p className="text-base text-neutral-700 mb-6">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Funktionsfähigkeit der Website)
          </p>
          
          <h3 className="text-lg font-semibold text-neutral-800 mb-3">Analytics-Cookies (optional)</h3>
          <p className="text-base text-neutral-700 mb-4">
            Zur Analyse der Website-Nutzung können wir folgende datenschutzfreundliche Analytics-Dienste einsetzen:
          </p>
          
          <ul className="text-base text-neutral-700 space-y-2 list-disc pl-6 mb-4">
            <li><strong>Umami Analytics:</strong> Selbst gehostet, anonymisierte Datenerfassung</li>
            <li><strong>Plausible Analytics:</strong> Datenschutzfreundliche Alternative zu Google Analytics</li>
          </ul>
          
          <div className="space-y-3">
            <p className="text-base text-neutral-700"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</p>
            <p className="text-base text-neutral-700"><strong>Zweck:</strong> Verbesserung der Website-Performance und Benutzererfahrung</p>
            <p className="text-base text-neutral-700"><strong>Speicherdauer:</strong> Anonymisierte Daten werden für maximal 24 Monate gespeichert</p>
          </div>
        </section>
        
        {/* Betroffenenrechte */}
        <section>
          <h2 className="text-xl font-semibold text-neutral-800 mb-6">
            Ihre Rechte als betroffene Person
          </h2>
          
          <p className="text-base text-neutral-700 mb-6">
            Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-3">Auskunftsrecht (Art. 15 DSGVO)</h3>
              <p className="text-base text-neutral-700">
                Sie haben das Recht, Auskunft über die von uns verarbeiteten personenbezogenen Daten zu verlangen.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-3">Recht auf Berichtigung (Art. 16 DSGVO)</h3>
              <p className="text-base text-neutral-700">
                Sie haben das Recht auf Berichtigung unrichtiger oder Vervollständigung unvollständiger personenbezogener Daten.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-3">Recht auf Löschung (Art. 17 DSGVO)</h3>
              <p className="text-base text-neutral-700">
                Sie haben das Recht auf Löschung Ihrer personenbezogenen Daten, sofern keine gesetzlichen Aufbewahrungsfristen bestehen.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-3">Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</h3>
              <p className="text-base text-neutral-700">
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-3">Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</h3>
              <p className="text-base text-neutral-700">
                Sie haben das Recht, die Sie betreffenden personenbezogenen Daten in einem strukturierten Format zu erhalten.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-3">Widerspruchsrecht (Art. 21 DSGVO)</h3>
              <p className="text-base text-neutral-700">
                Sie haben das Recht, der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-3">Beschwerderecht bei der Aufsichtsbehörde (Art. 77 DSGVO)</h3>
              <p className="text-base text-neutral-700 mb-4">
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
              </p>
              
              <div className="bg-neutral-50 p-4 rounded-lg">
                <p className="font-semibold text-neutral-900 mb-1">Zuständige Aufsichtsbehörde in Niedersachsen:</p>
                <p className="text-base text-neutral-700">
                  Landesbeauftragte für den Datenschutz Niedersachsen<br/>
                  Prinzenstraße 5, 30159 Hannover<br/>
                  E-Mail: poststelle@lfd.niedersachsen.de
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Datensicherheit */}
        <section>
          <h2 className="text-xl font-semibold text-neutral-800 mb-6">
            Datensicherheit
          </h2>
          
          <p className="text-base text-neutral-700 mb-4">
            Wir verwenden geeignete technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten zu schützen:
          </p>
          
          <ul className="text-base text-neutral-700 space-y-2 list-disc pl-6">
            <li>SSL/TLS-Verschlüsselung für die gesamte Website</li>
            <li>Sichere Server-Konfiguration</li>
            <li>Regelmäßige Sicherheitsupdates</li>
            <li>Zugriffsbeschränkungen auf Serverdaten</li>
          </ul>
        </section>
        
        {/* Automatisierte Entscheidungsfindung */}
        <section>
          <h2 className="text-xl font-semibold text-neutral-800 mb-6">
            Automatisierte Entscheidungsfindung
          </h2>
          <p className="text-base text-neutral-700">
            Wir verwenden keine automatisierte Entscheidungsfindung oder Profiling im Sinne von Art. 22 DSGVO.
          </p>
        </section>
        
        {/* Aktualität */}
        <section>
          <h2 className="text-xl font-semibold text-neutral-800 mb-6">
            Aktualität und Änderung dieser Datenschutzerklärung
          </h2>
          <p className="text-base text-neutral-700">
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand von August 2025. Durch die Weiterentwicklung unserer Website kann es notwendig werden, diese Datenschutzerklärung zu ändern.
          </p>
        </section>
        
        {/* Kontakt */}
        <section>
          <h2 className="text-xl font-semibold text-neutral-800 mb-6">
            Kontakt
          </h2>
          
          <p className="text-base text-neutral-700 mb-6">
            Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte können Sie uns jederzeit kontaktieren:
          </p>
          
          <div className="bg-neutral-50 p-6 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-2">
              Digitalwerk – IT Dienstleistungen
            </p>
            <p className="text-base text-neutral-700">
              Wilhelmstraße 73<br/>
              38100 Braunschweig<br/>
              Vertreten durch: Wanja Herkt<br/>
              E-Mail: <a href="mailto:info@digitalwerk-it.com" className="text-blue-600 hover:text-blue-800 underline">info@digitalwerk-it.com</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
