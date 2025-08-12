import "./Header.css";
import flechaIcon from '../assets/icono_flecha.svg';
import profileIcon from '../assets/profile.svg';

function Header() {
  return (
    <header className="header">
      <div className="title-container">
        <img className="logo" src={flechaIcon} alt="Descripción del icono" />
        <a className="title" href="/goals">Goals app</a>
      </div>
      <nav className="profile">
        <a href="/perfil">
          <img className="profile-icon" src={profileIcon} />
        </a>
      </nav>
    </header>
  );
}

export default Header;