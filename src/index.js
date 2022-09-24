import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App";

window.onload = () => {
    const container = document.getElementById("react-root")
    const root = createRoot(container);
    root.render(<App />);
};