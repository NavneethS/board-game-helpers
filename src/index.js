import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Home, Golem, Brux } from "./components";

ReactDOM.render(
    <Router>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/golem" element={<Golem />} />
            <Route path="/brux" element={<Brux />} />
        </Routes>
    </Router>,
    document.getElementById("root")
);
