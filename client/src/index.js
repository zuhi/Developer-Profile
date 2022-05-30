import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DevDetails } from './components/developerDetail';
import { Home } from './Home';

const element = (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/DevDetails" element={<DevDetails />} />
        </Routes>
    </Router>
);

ReactDOM.render(element, document.getElementById('root'));
