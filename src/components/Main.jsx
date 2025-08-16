import MainCss from './Main.module.css';
import ListIcon from '../img/ListIcon.svg';
import NewGoalIcon from '../img/newgoal.svg';
import Link from './Link';
import List from './lista/List.jsx';


function Main({children}) {
  return (
    <div className={MainCss.mainContainer}>
    <aside className={MainCss.aside}>
        <Link text="Goals list" href="/list">
          <img className={MainCss.icon} src={ListIcon} alt="Goals List Icon"/>
        </Link>
        <Link text="Create goal" href="/create">
          <img className={MainCss.icon} src={NewGoalIcon} alt="Create Goal Icon" />
        </Link>        
    </aside>
    <main className={MainCss.main}>
        {children}
    </main>
      
    </div>
  );
}

export default Main;