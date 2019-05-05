import React from "react";
import { withRouter } from "react-router-dom";

const Home = props => {
  const logout = () => {
    localStorage.clear();
    props.history.push("/login");
  };

  return (
    <div>
      <h1>Home Component</h1>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default withRouter(Home);
