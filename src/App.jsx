import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout.jsx";
import List from "./components/private/list/List.jsx";
import Details from "./components/private/new/Details.jsx";
import NotFound from "./components/shared/NotFound.jsx";
import Modal from "./components/shared/Modal.jsx";
import { useContext } from "react";
import { GoalsContext } from "./memory/Context.tsx";
import { useEffect } from "react";
import { RequestGoals } from "./services/Goals.ts";
import Access from "./components/public/access/Access.jsx";
import Register from "./components/public/register/Register.jsx";
import Authenticate from "./components/shared/Authenticate.jsx";
import { AuthContext } from "./memory/Context.tsx";

function App() {

    const [, dispatch] = useContext(GoalsContext);
    const [authState] = useContext(AuthContext);
    const { token } = authState;

    useEffect(() => {
         if (!token || token.length === 0) {
            console.log("Token no válido o vacío. Omite la carga de metas.");
            return;
        }
        
        console.log("Token válido encontrado. Cargando metas...");
        console.log("Token changed");

        async function FetchData() {
            const goals = await RequestGoals(token);
            dispatch({ type: "add_goal", goals });
        }
        FetchData();
    }, [dispatch, token]);

    

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/access" element={<Access />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="*" element={<NotFound />} />
            </Route>
            <Route element={<Layout privateRoute />}>
                <Route element={<Authenticate />}>
                    <Route index element={<List />} />
                    <Route path="/list" element={<List />}>
                        <Route
                            path="/list/:id"
                            element={
                                <Modal>
                                    <Details />
                                </Modal>
                            }
                        />
                    </Route>
                    <Route path="/create" element={<Details />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
