import Map from './map.svg';

import './Address.css';

function Address() {
  return (
    <div className="address">
      <div className="text-address">
        <h1>
          Consultas em Porto Alegre
        </h1>
        <div>
          <img src={Map}/>
          Rua Dr. Florêncio Ygartua, 131, sala 404 - Moinhos de Vento, Porto Alegre - RS
        </div>
        <a className="btn-map" target="_blank" href="https://www.google.com/maps/place/R.+Dr.+Flor%C3%AAncio+Ygartua,+131+-+sala+404+-+Moinhos+de+Vento,+Porto+Alegre+-+RS,+90430-010/@-30.0279026,-51.20338,17z/data=!3m1!4b1!4m6!3m5!1s0x951979b42e6c0001:0xb2cf237fd5f72c38!8m2!3d-30.0279026!4d-51.20338!16s%2Fg%2F11t7fhx_xx?entry=ttu">
          Saiba como chegar 
        </a>
      </div>
      <div className="map-address">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.312106929822!2d-51.203379999999996!3d-30.02790259999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979b42e6c0001%3A0xb2cf237fd5f72c38!2sR.%20Dr.%20Flor%C3%AAncio%20Ygartua%2C%20131%20-%20sala%20404%20-%20Moinhos%20de%20Vento%2C%20Porto%20Alegre%20-%20RS%2C%2090430-010!5e0!3m2!1spt-BR!2sbr!4v1709148646611!5m2!1spt-BR!2sbr"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

export default Address;