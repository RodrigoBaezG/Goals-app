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
    const { token } = authState;

    useEffect(() => {
        const tokenString = token?.token;

        // 1. CONDICIÓN ESTABLE: Esperar el token.
        // 2. CONDICIÓN DE NO DUPLICACIÓN: Si ya tenemos metas, no volvemos a cargar.
        if (!tokenString || state.order.length > 0) return;

        console.log("List.jsx: Token ESTABLE detectado. Iniciando RequestGoals...");

        async function FetchData() {
            try {
                // Usamos la cadena del token
                const goals = await RequestGoals(tokenString);
                if (Array.isArray(goals)) {
                    dispatch({ type: "add_goal", goals });
                }
            } catch (error) {
                console.error("Error al obtener metas:", error);
            }
        }

        FetchData();
        // Dependencia CLAVE: Solo se dispara si cambia la cadena del token o el dispatch.
    }, [dispatch, token?.token, state.order.length]);



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
