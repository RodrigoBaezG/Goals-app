import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Memory from "./services/Memory.tsx";

const rootElement = document.getElementById("root");

// Check if the root element exists before creating the root
if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <Memory>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Memory>
        </StrictMode>,
    );
} else {
    // You can optionally add an error message or log a warning here
    console.error("Failed to find the root element with ID 'root'.");
}