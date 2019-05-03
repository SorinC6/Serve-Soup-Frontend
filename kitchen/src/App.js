import React from "react";
import "./App.css";
import { Route, Redirect } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <div>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* <Route path="/home" component={Home} /> */}

        <Route
          exact
          path="/home"
          render={props =>
            localStorage.getItem("token") ? (
              <Home {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </div>
    </div>
  );
}

export default App;
