import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="acesso-rapido">
        <div className="row">
          ACESSO RAPIDO
        </div>
      </div>
      <div className="layout-logo">
        <a className="logo">
          LOGO
        </a>
        <nav className='navbar'>
          <a> Home </a>
          <a> Doutoras </a>
          <a> COnsultório </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
