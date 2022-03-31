import React from "react";
import ReactDOMClient from "react-dom/client";
import "./index.css";
// import App from "./App";
import Home from "./pages/Home.jsx";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(<Home />);
