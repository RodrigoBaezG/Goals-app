import { useContext } from "react";
import Credentials from "../../shared/Credentials.tsx";
import { AuthContext } from "../../../memory/Context.tsx";
import { useNavigate } from "react-router-dom";


function Access() {

    const navigate = useNavigate();

    const [auth, Authreducer] = useContext(AuthContext);

    const Authdispatch = async () => {
        Authreducer({type: 'add', token: 'token'})
        navigate('/list');
    };

    const send = async () => {

    };

    return ( 
        <Credentials
            send={Authdispatch}
            title="Log in"
            button="Log in">
        </Credentials>
     );
}

export default Access;