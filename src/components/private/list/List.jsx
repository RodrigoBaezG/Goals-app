import { useContext } from "react";
import Goal from "./Goal.js";
import { GoalsContext } from "../../../memory/Context.tsx";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { RequestGoals } from "../../../services/Goals.ts";
import { AuthContext } from "../../../memory/Context.tsx";


function List() {
    const [state, dispatch] = useContext(GoalsContext);

    // const [authState] = useContext(AuthContext);
    // const { token } = authState; // token es el objeto { token: "string" }

    // useEffect(() => {

    //     if (!token) return; // Espera a tener token antes de hacer fetch

    //     console.log("List.jsx: Token válido. Iniciando RequestGoals.", token);

    //     async function FetchData() {
    //         // Usamos la cadena del token
    //         try {
    //             const goals = await RequestGoals(token.token); //token.token???
    //             // Asegúrate de que 'goals' es un array
    //             if (Array.isArray(goals)) {
    //                 dispatch({ type: "add_goal", goals });
    //             } else {
    //                 console.error("La respuesta del backend no es un array:", goals);
    //             }
    //         } catch (error) {
    //             console.error("Error al obtener metas:", error);
    //         }
    //     }

    //     FetchData();

    // }, [dispatch, token?.token]); // Se dispara cuando el token esté disponible.


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
            {state.order.map((id) => (
                <Goal key={id} {...state.objects[id]} />
            ))}
            <Outlet />
        </>
    );
}

export default List;
