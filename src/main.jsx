import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Memory from "./services/Memory.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Memory>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Memory>
    </StrictMode>,
);
