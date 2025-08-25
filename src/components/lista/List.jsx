import { useContext, useEffect } from "react";
import Goal from "./Goal.jsx";
import { Context } from "../../services/Memory.jsx";
import { Outlet } from "react-router-dom";

function List() {
    const [state] = useContext(Context);

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
