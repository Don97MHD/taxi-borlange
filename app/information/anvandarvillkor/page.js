import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export const metadata = {
  title: 'Användarvillkor | Dala Taxi Borlänge',
  description: 'Användarvillkor för Dala Taxi Borlänge. Läs om villkoren för att använda vår webbplats.',
}

export default function Anvandarvillkor() {
  return (
    <>
      <Header />
      <PageHeader title="Användarvillkor" subtitle="Information" />

      <section className="privacy-section padding bg-grey">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="privacy-content" style={{ backgroundColor: '#fff', padding: '50px', borderRadius: '5px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                
                <h2 className="mb-4">Webbplatsens Användarvillkor</h2>
                
                <h3 className="mt-4 mb-3">1. Villkor</h3>
                <p>Genom att gå in på denna webbplats, tillgänglig från https://dalataxiborlange.se/, samtycker du till att vara bunden av dessa användarvillkor för webbplatsen och samtycker till att du är ansvarig för avtalet med tillämpliga lokala lagar. Om du inte håller med någon av dessa villkor, är du förbjuden att komma åt denna webbplats. Materialet på denna webbplats är skyddat av upphovsrätt och varumärkeslagar.</p>

                <h3 className="mt-4 mb-3">2. Använd licens</h3>
                <p>Tillstånd ges att tillfälligt ladda ner ett exemplar av materialet på Taxi Bolaget Borlänges Webbplats endast för personlig, icke-kommersiell tillfällig visning. Detta är beviljande av en licens, inte en överföring av titel, och under denna licens får du inte:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px' }}>
                    <li>ändra eller kopiera materialet;</li>
                    <li>använda materialet för kommersiella ändamål eller för offentlig visning;</li>
                    <li>försök att reverse engineering av programvara som finns på Taxi Bolaget Borlänges webbplats;</li>
                    <li>ta bort all copyright eller andra äganderättsbeteckningar från materialet; eller</li>
                    <li>överföra materialet till en annan person eller ”spegla” materialet på någon annan server.</li>
                </ul>
                <p>Detta gör att Taxi Bolaget Borlänge kan säga upp sig vid överträdelser av någon av dessa restriktioner. Vid uppsägning kommer även din visningsrätt att upphöra och du bör förstöra allt nedladdat material i din ägo oavsett om det är tryckt eller elektroniskt format.</p>

                <h3 className="mt-4 mb-3">3. Ansvarsfriskrivning</h3>
                <p>Allt material på Taxi Bolaget Borlänges hemsida tillhandahålls ”i befintligt skick”. Taxi Bolaget Borlänge lämnar inga garantier, vare sig uttryckliga eller underförstådda, fråntar därför alla andra garantier. Taxi Bolaget Borlänge gör inte heller några utfästelser om riktigheten eller tillförlitligheten av användningen av materialet på sin webbplats eller på annat sätt relaterat till sådant material eller webbplatser som är länkade till denna webbplats.</p>

                <h3 className="mt-4 mb-3">4. Begränsningar</h3>
                <p>Taxi Bolaget Borlänge eller dess leverantörer kommer inte att hållas ansvariga för eventuella skador som uppstår vid användning eller oförmåga att använda materialet på Taxi Bolaget Borlänges webbplats, även om Taxi Bolaget Borlänge eller en auktoriserad representant för denna webbplats har meddelats , muntligt eller skriftligt, om möjligheten till sådan skada. Vissa jurisdiktioner tillåter inte begränsningar av underförstådda garantier eller begränsningar av ansvar för oförutsedda skador, dessa begränsningar kanske inte gäller dig.</p>

                <h3 className="mt-4 mb-3">5. Revisioner och Errata</h3>
                <p>Materialet som visas på Taxi Bolaget Borlänges webbplats kan innehålla tekniska, typografiska eller fotografiska fel. Taxi Bolaget Borlänge lovar inte att något av materialet på denna webbplats är korrekt, fullständigt eller aktuellt. Taxi Bolaget Borlänge kan när som helst utan föregående meddelande ändra materialet som finns på sin webbplats. Taxi Bolaget Borlänge förbinder sig inte att uppdatera materialet.</p>

                <h3 className="mt-4 mb-3">6. Länkar</h3>
                <p>Taxi Bolaget Borlänge har inte granskat alla webbplatser som är länkade till sin webbplats och ansvarar inte för innehållet på någon sådan länkad webbplats. Förekomsten av någon länk innebär inte att Taxi Bolaget Borlänge godkänner sidan. Användningen av en länkad webbplats sker på användarens egen risk.</p>

                <h3 className="mt-4 mb-3">7. Ändringar av webbplatsens användarvillkor</h3>
                <p>Taxi Bolaget Borlänge kan när som helst revidera dessa Användarvillkor för sin Webbplats utan föregående meddelande. Genom att använda denna webbplats samtycker du till att vara bunden av den aktuella versionen av dessa användarvillkor.</p>

                <h3 className="mt-4 mb-3">8. Din integritet</h3>
                <p>Läs vår <Link href="/information/integritetspolicy">sekretesspolicy</Link>.</p>

                <h3 className="mt-4 mb-3">9. Gällande lag</h3>
                <p>Alla anspråk relaterade till Taxi Bolaget Borlänges Webbplats ska regleras av se lagarna utan hänsyn till dess lagkonfliktbestämmelser.</p>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}