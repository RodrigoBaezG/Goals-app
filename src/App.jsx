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
import { useState } from "react";


function App() {

    const [authState, authDispatch] = useContext(AuthContext);
    const { token } = authState;
    
    // CORRECCIÓN CLAVE: Estado para controlar si el chequeo inicial ha terminado.
    const [isAuthChecked, setIsAuthChecked] = useState(false); 

    // BLOQUE 1: Restauración de Sesión y MARCADO DE CHECKEO
    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        const currentTokenValue = token?.token; 

        // 1. Lógica de Restauración: Si hay token en storage Y no está en Contexto, lo despachamos.
        if (storedToken && storedToken !== currentTokenValue) {
             authDispatch({ type: 'add', token: { token: storedToken } });
        }
        
        // 2. Marcar como checked: En el primer render o después del dispatch, marcamos como finalizado.
        if (!isAuthChecked) {
            setIsAuthChecked(true);
        }
        
    }, [authDispatch, token, isAuthChecked]); 

    // **FINAL FIX:** Esperar a que el chequeo de autenticación termine.
    if (!isAuthChecked) {
        // Muestra un loading o spinner mientras se restaura la sesión
        return <div>Cargando sesión...</div>; 
    } 


    // useEffect EXISTENTE: CARGA LAS METAS
    // useEffect(() => {
    //     // 1. OBTENER EL TOKEN: Solo del Contexto (token es { token: "..." })
    //     const tokenString = token?.token;
         
    //     // 2. CONDICIÓN DE CORTE: Si no hay token en el Contexto, salimos y esperamos.
    //     if (!tokenString || goalsLoaded) { 
    //         if (!tokenString) {
    //             console.log("Esperando token de Contexto. Omite la carga de metas.");
    //         }
    //         return;
    //     }

    //     console.log("Token válido en Contexto. Iniciando RequestGoals...");

    //     async function FetchData() {
    //         try {
    //             const goals = await RequestGoals(tokenString); 
    //             dispatch({ type: "add_goal", goals }); 
    //             // 2. Marcar como cargadas para que no se vuelva a ejecutar
    //             setGoalsLoaded(true); 
    //         } catch (error) {
    //             console.error("Error al cargar metas:", error);
    //             // Si falla la carga, podríamos resetear el token para forzar login
    //         }
    //     }
        
    //     FetchData();
        
    // }, [dispatch, token?.token, goalsLoaded]); // <--- DEPENDENCIA: token completo.

    

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
