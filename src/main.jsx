import React from "react";
import ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import Home from "./pages/Home.jsx";



// Create a root.
const root = ReactDOMClient.createRoot(document.getElementById("root"));

// Render the root.
root.render(<App />);
