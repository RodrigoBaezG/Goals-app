import { useContext } from "react";
import Goal from "./Goal.js";
import { GoalsContext } from "../../../memory/Context.tsx";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { RequestGoals } from "../../../services/Goals.ts";
import { AuthContext } from "../../../memory/Context.tsx";


function List() {
    const [state, dispatch] = useContext(GoalsContext);

    const [authState] = useContext(AuthContext);
    const { token } = authState; // token es el objeto { token: "string" }

    useEffect(() => {
        const tokenString = token?.token;

        // Ya que este componente se monta dentro de <Authenticate/>,
        // el token siempre debe ser válido, si no, redirigiría.
        if (!tokenString) {
            console.log("List.jsx: Token no encontrado al montar.");
            return;
        }

        console.log("List.jsx: Token válido. Iniciando RequestGoals.");

        async function FetchData() {
            // Usamos la cadena del token
            const goals = await RequestGoals(tokenString);
            // Despachamos al GoalsContext
            dispatch({ type: "add_goal", goals });
        }

        FetchData();

    }, [dispatch, token?.token]); // Se dispara cuando el token esté disponible.


    // const [, dispatch] = useContext(GoalsContext);

    //     useEffect(() => {
    //         async function FetchData() {
    //             const goals = await RequestGoals();
    //             dispatch({ type: "add_goal", goals });
    //         }
    //         FetchData();
    //     }, [dispatch]);

    return (
        <>
            {Array.isArray(state.order) && state.order.length > 0 ? (
                state.order.map((id) => <Goal key={id} {...state.objects[id]} />)
            ) : (
                <p>No goals available</p>
            )}
            <Outlet />
        </>
    );
}

export default List;
