import { useContext } from "react";
import Goal from "./Goal.js";
import { Context } from "../../../services/Context.js";
import { Outlet } from "react-router-dom";

function List() {
    const [state]  = useContext(Context);

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
