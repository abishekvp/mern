import React, { useState, useEffect } from "react";
import './App.css';
import * as ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import Signup from "./components/Signup";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

function App() {
  const [messages, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/profile")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
