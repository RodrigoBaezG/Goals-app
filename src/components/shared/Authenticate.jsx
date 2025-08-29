import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../memory/Context.tsx";

function Authenticate() {

    const [auth] = useContext(AuthContext);

    if (!auth.authenticate) {
        return <Navigate to="/access" />;
    }
    
    return <Outlet></Outlet>;
}

export default Authenticate;