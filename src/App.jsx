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
    const [authState, authDispatch] = useContext(AuthContext);
    const { token } = authState;

    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        
        // Si hay un token guardado PERO el Contexto está vacío, lo restauramos.
        // También previene un dispatch si ya está en el Contexto.
        if (storedToken && (!token || token.token !== storedToken)) {
             // Dispatch para poner el token en formato objeto de vuelta en el Contexto
             authDispatch({ type: 'add', token: { token: storedToken } });
        }
    }, [authDispatch, token]); 


    // useEffect EXISTENTE: CARGA LAS METAS
    useEffect(() => {
        // 1. OBTENER EL TOKEN: Solo del Contexto (token es { token: "..." })
        const tokenString = token?.token;
         
        // 2. CONDICIÓN DE CORTE: Si no hay token en el Contexto, salimos y esperamos.
        if (!tokenString) { 
            console.log("Esperando token de Contexto. Omite la carga de metas.");
            return;
        }
        
        console.log("Token válido en Contexto. Cargando metas...");

        async function FetchData() {
            // Se pasa la cadena JWT al servicio de metas
            const goals = await RequestGoals(tokenString); 
            dispatch({ type: "add_goal", goals }); 
        }
        
        FetchData();
        
    }, [dispatch, token]); // <--- DEPENDENCIA: token completo.

    

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
