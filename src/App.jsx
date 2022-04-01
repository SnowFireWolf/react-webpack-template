import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "@/pages/Home";
import About from "@/pages/About";




export default function App() {
  return (
    <Router>
      <div className="App">
        <p>
          <Link to="/" className="App-link">
            Home
          </Link>
          {" | "}
          <Link to="/about" className="App-link">
            About
          </Link>
        </p>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
