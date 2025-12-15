export default function BookingForm() {
  return (
    <div className="booking-wrap">
      <div className="section-heading mb-30">
       <span className="section-subtitle"><span></span>Boka Online</span>
        <h2 className="white">Boka din taxi i Borlänge</h2>
      </div>
      <form action="#" id="book-taxi-ride">
        <div className="booking-form">
          <div className="form-field">
            <i className="las la-user-tie"></i>
            <input type="text" id="full-name" name="full-name" className="form-control" placeholder="Ditt Namn" required />
          </div>
          <div className="form-field">
            <i className="las la-envelope-open"></i>
            <input type="email" id="email" name="email" className="form-control" placeholder="Email" required />
          </div>
          <div className="form-field">
            <i className="las la-tags"></i>
            <select name="package-type" id="type" className="niceSelect">
              <option value="standard">Standard</option>
              <option value="business">Affärsklass</option>
              <option value="economy">Ekonomi</option>
              <option value="vip-spacial">VIP Special</option>
              <option value="comfort">Komfort</option>
            </select>
          </div>
          <div className="form-field">
            <i className="las la-user-friends"></i>
            <select name="passengers" id="passengers" className="niceSelect">
              <option value="1">1 Person</option>
              <option value="2">2 Personer</option>
              <option value="3">3 Personer</option>
              <option value="4">4 Personer</option>
              <option value="5">5+ Personer</option>
            </select>
          </div>
          <div className="form-field">
            <i className="las la-map-marker"></i>
            <input type="text" id="start-dest" name="start-dest" className="form-control" placeholder="Hämta i (Start)" required />
          </div>
          <div className="form-field">
            <i className="las la-map-marker"></i>
            <input type="text" id="end-dest" name="end-dest" className="form-control" placeholder="Lämna vid (Slut)" required />
          </div>
          <div className="form-field">
            <i className="las la-calendar"></i>
            <input type="text" id="ride-date" name="ride-date" className="form-control date-picker" placeholder="Välj Datum" required />
          </div>
          <div className="form-field">
            <i className="las la-clock"></i>
            <input type="text" id="ride-time" name="ride-time" className="form-control time-picker" placeholder="Välj Tid" required />
          </div>
          <div className="form-field">
            <button id="submit" className="default-btn" type="submit">Boka Nu</button>
          </div>
        </div>
        <div id="form-messages" className="alert" role="alert"></div>
      </form>
    </div>
  );
}