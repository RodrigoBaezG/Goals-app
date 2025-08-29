import type { ChangeEvent } from "react";
import styles from "./Credentials.module.css";
import { useState } from "react";

interface CredentialsProps {
    send: Function;
    title: string;
    button: string;
}


function Credentials({send, title, button}: CredentialsProps) {
    const [form, setForm] = useState({
        user: "",
        password: "",
    });

    const { user, password} = form;

    const onChange = (event: ChangeEvent, prop: string) => {
        const value = (event.target as HTMLInputElement).value;
        setForm((state) => ({...state, [prop]: value}));
    }

    const onAccess = async (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => { 
        event.preventDefault();
        send(form);
    };

    return (
        <div className={'card ' + styles.auth + ' mx-auto max-w-4xl'}>
            <h1 className={styles.head + " text-center"}>{title}</h1>
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
                        placeholder="Type your password"
                        value={password}
                        onChange={(e) => onChange(e, "password")}
                    />
                </label>
            </form>
            <div className="button">
                <button
                    className="button button--black"
                    onClick={(e) => onAccess(e)}>
                    {button}
                </button>
            </div>

        </div>
    );
}

export default Credentials;