import Credentials from "../../shared/Credentials.tsx";

function Register() {

    const send = async () => {

    };

    return ( 
        <Credentials
            send={send}
            title="Sign in"
            button="Sign in">
        </Credentials>
     );
}

export default Register;