import { useContext } from "react";
import Goal from "./Goal.js";
import { GoalsContext } from "../../../memory/Context.tsx";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { RequestGoals } from "../../../services/Goals.ts";

function List() {
    const [state]  = useContext(GoalsContext);

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
