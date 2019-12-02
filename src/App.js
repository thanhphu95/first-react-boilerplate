import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
    return (
        <Router>
            <Routes />
        </Router>
    );
}

export default App;
