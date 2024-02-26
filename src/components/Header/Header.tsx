import './Header.css';
import Instagram from './instagram.svg';
import Facebook from './facebook.svg';
import Map from './map.svg';

function Header() {
  return (
    <header className="header">
      <div className="acesso-rapido">
        <div className='redes'>
          <a className="logo-instagram" target="_blank" href="https://www.instagram.com/mova.psicologia/">
            <img src={Instagram} alt=""/>
          </a>
          <a className="logo-facebook" target="_blank" href="https://www.instagram.com/mova.psicologia/">
            <img src={Facebook} alt=""/>
          </a>
        </div>
        <a className="logo-map" target="_blank" href="https://www.google.com/maps/place/R.+Dr.+Flor%C3%AAncio+Ygartua,+131+-+sala+404+-+Moinhos+de+Vento,+Porto+Alegre+-+RS,+90430-010/@-30.0279026,-51.20338,17z/data=!3m1!4b1!4m6!3m5!1s0x951979b42e6c0001:0xb2cf237fd5f72c38!8m2!3d-30.0279026!4d-51.20338!16s%2Fg%2F11t7fhx_xx?entry=ttu">
          <img src={Map}/>
          Rua Dr. Florêncio Ygartua, 131, sala 404 - Moinhos de Vento, Porto Alegre - RS
        </a>
      </div>
      <div className="layout-logo">
        <a className="logo">
          LOGO
        </a>
        <nav className='navbar'>
          <a> Home </a>
          <a> Doutoras </a>
          <a> Consultório </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
