import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

function App() {
  return (
    <div className="App">
      <div>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </div>
  );
}

export default App;
