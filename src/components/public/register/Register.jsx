import Credentials from "../../shared/Credentials.tsx";
import { AuthContext } from "../../../memory/Context.tsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../../services/Auth.ts";

function Register() {

    const navigate = useNavigate();

    const [auth, Authreducer] = useContext(AuthContext);

    const signupDispatch = async (form) => {
        const token = await signup(form);
        localStorage.setItem('authToken', tokenObject.token);
        Authreducer({type: 'add', token: tokenObject});
        navigate('/list');
    };

    return ( 
        <Credentials
            send={signupDispatch}
            title="Sign in"
            button="Sign in">
        </Credentials>
     );
}

export default Register;