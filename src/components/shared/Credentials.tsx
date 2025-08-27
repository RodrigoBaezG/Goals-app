import styles from "./Credentials.module.css";

function Credentials() {
    return (
        <div className={'card' + styles.auth}>
            <h1 className={styles.head}>{title}</h1>
            <form className="p-4">
                <label className="label">User
                    <input 
                        className="input"
                        placeholder="Type your email"
                        value={user}
                        onChange={(e) => onChange(e, "user")}
                     />
                </label>
                <label className="label">Password
                    <input 
                        className="input"
                        placeholder="Typer your password"
                        value={password}
                        onChange={(e) => onChange(e, "password")}
                         />
                </label>
            </form>
            <div className="button"></div>

        </div>
    );
}

export default Credentials;