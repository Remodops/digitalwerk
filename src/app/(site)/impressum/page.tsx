import { Section } from "@/components/ui/Section";
import { withPageMeta } from "@/lib/seo";

export const metadata = withPageMeta({ title: "Impressum" });

export default function Page() {
  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      {/* H1 - Hauptüberschrift */}
      <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-12 text-left">
        Impressum
      </h1>

      <div className="space-y-12 text-left leading-relaxed">
        {/* Pflichtangaben Block */}
        <section>
          <h2 className="text-xl font-semibold text-neutral-800 mb-6">
            Pflichtangaben
          </h2>
          
          <div className="space-y-6 text-base text-neutral-700">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <p className="font-semibold text-neutral-900 mb-2">
                Digitalwerk – IT Dienstleistungen
              </p>
              <p>
                Wilhelmstraße 73<br/>
                38100 Braunschweig
              </p>
            </div>
            
            <div>
              <p className="font-semibold text-neutral-900 mb-1">
                Vertreten durch:
              </p>
              <p>Wanja Herkt</p>
            </div>
            
            <div>
              <p className="font-semibold text-neutral-900 mb-1">
                Kontakt:
              </p>
              <p>E-Mail: <a href="mailto:wanja@herkt.email" className="text-blue-600 hover:text-blue-800 underline">wanja@herkt.email</a></p>
            </div>
            
            <div>
              <p className="font-semibold text-neutral-900 mb-1">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
              </p>
              <p>
                Wanja Herkt<br/>
                Wilhelmstraße 73<br/>
                38100 Braunschweig
              </p>
            </div>
          </div>
        </section>
        
        {/* Haftung für Inhalte */}
        <section>
          <h2 className="text-xl font-semibold text-neutral-800 mb-6">
            Haftung für Inhalte
          </h2>
          <p className="text-base text-neutral-700 leading-relaxed">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
        </section>
        
        {/* Haftung für Links */}
        <section>
          <h2 className="text-xl font-semibold text-neutral-800 mb-6">
            Haftung für Links
          </h2>
          <p className="text-base text-neutral-700 leading-relaxed">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </section>
        
        {/* Urheberrecht */}
        <section>
          <h2 className="text-xl font-semibold text-neutral-800 mb-6">
            Urheberrecht
          </h2>
          <p className="text-base text-neutral-700 leading-relaxed">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </section>
      </div>
    </div>
  );
}


