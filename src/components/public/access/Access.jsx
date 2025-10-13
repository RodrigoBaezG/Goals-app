import { useContext } from "react";
import Credentials from "../../shared/Credentials.tsx";
import { AuthContext } from "../../../memory/Context.tsx";
import { useNavigate } from "react-router-dom";
import { login } from "../../../services/Auth.ts";


function Access() {

    const navigate = useNavigate();

    const [auth, authDispatch] = useContext(AuthContext);

    const loginDispatch = async (form) => {
        const token = await login(form);
        authDispatch({type: 'add', token});
        navigate('/list');
    };

    return (
        <Credentials
            send={loginDispatch}
            title="Log in"
            button="Log in">
        </Credentials>
     );
}

export default Access;