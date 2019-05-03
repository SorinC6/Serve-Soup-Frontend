import React from "react";

const Home = () => {
  const logout = () => {
    localStorage.clear();
  };

  return (
    <div>
      <h1>Home Component</h1>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default Home;
