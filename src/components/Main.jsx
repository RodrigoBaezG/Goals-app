import MainCss from "./Main.module.css";
import ListIcon from "../img/ListIcon.svg";
import NewGoalIcon from "../img/newgoal.svg";
import LinkTo from "./LinkTo.jsx";
import List from "./lista/List.jsx";

function Main({ children }) {
    return (
        <div className={MainCss.mainContainer}>
            <aside className={MainCss.aside}>
                <LinkTo text="Goals list" to="/list">
                    <img
                        className={MainCss.icon}
                        src={ListIcon}
                        alt="Goals List Icon"
                    />
                </LinkTo>
                <LinkTo text="Create goal" to="/create">
                    <img
                        className={MainCss.icon}
                        src={NewGoalIcon}
                        alt="Create Goal Icon"
                    />
                </LinkTo>
            </aside>
            <main className={MainCss.main}>{children}</main>
        </div>
    );
}

export default Main;
