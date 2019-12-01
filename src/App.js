import React from 'react';
import './App.css';
import { version } from "antd";
import "antd/dist/antd.css";
import HorizontalLoginForm from './Login'
function App() {
  return (
    <div className="App">
      <h1>antd version: {version}</h1>
      <p>
        Please <b>fork</b> this sandbox to reproduce your issue.
    </p>
    <HorizontalLoginForm/>
    </div>
  );
}

export default App;
