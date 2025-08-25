import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import List from "./components/lista/List.jsx";
import Details from "./components/nueva/Details.jsx";
import NotFound from "./components/NotFound.jsx";
import Modal from "./components/Modal.jsx";
import { useContext } from "react";
import { Context } from "./services/Memory.jsx";
import { useEffect } from "react";
import { RequestGoals } from "./services/Request.jsx";

function App() {
    const [, dispatch] = useContext(Context);

    useEffect(() => {
        async function FetchData() {
            const goals = await RequestGoals();
            dispatch({ type: "add_goal", goals });
        }
        FetchData();
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
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
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
