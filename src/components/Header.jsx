import HeaderCss from "./Header.module.css";
import GoalsAppIcon from '../img/GoalsAppIcon.svg';
import profileIcon from '../img/profile.svg';
import Link from "./Link";

function Header() {
  return (
    <header className={HeaderCss.header}>
      <div className={HeaderCss.titleContainer}>
        <img className={HeaderCss.icon} src={GoalsAppIcon} alt="Descripción del icono" />
        <a className={HeaderCss.title} href="/goals">Goals app</a>
      </div>
      <nav>
        <Link href="/profile">
          <img className={HeaderCss.icon} src={profileIcon} />
        </Link>
      </nav>
    </header>
  );
}

export default Header;