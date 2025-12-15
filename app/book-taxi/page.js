import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

export default function BookTaxi() {
  return (
    <>
      <Header />
      {/* تم تعريب العناوين هنا */}
      <PageHeader title="Boka Din Resa" subtitle="Beställ Taxi Nu" />

      <div className="taxi-booking bg-grey padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <form action="#" id="book-taxi-ride">
                <div className="taxi-booking-form">
                  
                  {/* الاسم */}
                  <div className="form-field">
                    <i className="las la-user-tie"></i>
                    <input type="text" id="full-name" name="full-name" className="form-control" placeholder="Ditt Namn" required />
                  </div>

                  {/* الإيميل */}
                  <div className="form-field">
                    <i className="las la-envelope-open"></i>
                    <input type="email" id="email" name="email" className="form-control" placeholder="E-post" required />
                  </div>

                  {/* نوع السيارة - مترجم */}
                  <div className="form-field">
                    <i className="las la-tags"></i>
                    <select name="package-type" id="package-type" className="niceSelect">
                      <option value="standard">Standard (Vanlig Taxi)</option>
                      <option value="business">Affärsklass</option>
                      <option value="economy">Ekonomi</option>
                      <option value="vip-spacial">VIP / Lyxbil</option>
                      <option value="comfort">Komfort</option>
                    </select>
                  </div>

                  {/* عدد الركاب - تم تصحيح الجمع */}
                  <div className="form-field">
                    <i className="las la-user-friends"></i>
                    <select name="passengers" id="passengers" className="niceSelect">
                      <option value="1">1 Person</option>
                      <option value="2">2 Personer</option>
                      <option value="3">3 Personer</option>
                      <option value="4">4 Personer</option>
                      <option value="5">5+ Personer (Storbil)</option>
                    </select>
                  </div>

                  {/* نقطة الانطلاق */}
                  <div className="form-field">
                    <i className="las la-map-marker"></i>
                    <input type="text" id="start-dest" name="start-dest" className="form-control" placeholder="Hämta i (Adress)" required />
                  </div>

                  {/* الوجهة */}
                  <div className="form-field">
                    <i className="las la-map-marker"></i>
                    <input type="text" id="end-dest" name="end-dest" className="form-control" placeholder="Lämna vid (Adress)" required />
                  </div>

                  {/* التاريخ */}
                  <div className="form-field">
                    <i className="las la-calendar"></i>
                    <input type="text" id="ride-date" name="ride-date" className="form-control date-picker" placeholder="Välj Datum" required />
                  </div>

                  {/* الوقت */}
                  <div className="form-field">
                    <i className="las la-clock"></i>
                    <input type="text" id="ride-time" name="ride-time" className="form-control time-picker" placeholder="Välj Tid" required />
                  </div>

                  {/* زر الحجز */}
                  <div className="form-field">
                    <button id="submit" className="default-btn" type="submit">Boka Taxi Nu</button>
                  </div>
                </div>
                <div id="form-messages" className="alert" role="alert"></div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}