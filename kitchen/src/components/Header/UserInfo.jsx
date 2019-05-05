import React from "react";
import styled from "styled-components";
import user from "../../assets/user.png";
import { withRouter } from "react-router-dom";

const UserInfo = props => {
  const logout = () => {
    localStorage.clear();
    props.history.push("/login");
  };
  return (
    <Wrapper>
      <img src={user} alt="userimg" />
      <button onClick={logout}>Log Out</button>
    </Wrapper>
  );
};

export default withRouter(UserInfo);

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;

  img {
    width: 60px;
    height: 60px;
  }

  button {
    margin: 0 20px;
    transition: all 0.5s;
    position: relative;
    overflow: hidden;
    padding: 0;
    width: 90px;
    height: 40px;
    font-size: 16px;
    border-radius: 10px;
    background: darkred;
    border: 1px solid darkorchid;
    color: white;

    &:before {
      content: "Hover me";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: darkgrey;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: scale(5);
      opacity: 0;
      transition: all 0.5s;
    }
    &:hover:before {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
