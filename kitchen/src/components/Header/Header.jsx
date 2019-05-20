import React, { useState } from "react";
import styled from "styled-components";
import bg from "../../assets/header-bg.jpg";
import headerLogo from "../../assets/header-logo.png";
import UserInfo from "./UserInfo";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Header = props => {
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    localStorage.clear();
    props.history.push("/login");
  };

  const toggle = () => {
    setShowMenu(showMenu === false ? true : false);
  };
  return (
    <MainWrapper>
      <img className="logo" src={headerLogo} alt="logo" onClick={toggle} />
      <Menu showMenu={showMenu}>
        <LinkContainer to="/">Home</LinkContainer>
        <LinkContainer to="/user">User</LinkContainer>
        <LinkContainer to="/contact">Contact</LinkContainer>
        <LinkContainer onClick={logout} className="logout-btn">
          Logout
        </LinkContainer>
      </Menu>

      <h2 onClick={() => props.history.push("/")}>Manage Your Soup Kitchen</h2>
      <div>
        <UserInfo logout={logout} />
      </div>
    </MainWrapper>
  );
};

export default withRouter(Header);

const MainWrapper = styled.div`
  background-image: url(${bg});
  color: darkred;
  align-items: center;
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  position: relative;
  .logo {
    width: 100px;
    color: red;
    padding: 10px;
    transition: all 2s;

    &:hover {
      transform: rotate(1turn);
    }
  }

  h2 {
    text-align: center;
    font-weight: bold;
    font-size: 40px;
    letter-spacing: 15px;
    text-shadow: 0 1px 0 grey, 0 2px 0 grey, 0 3px 0 grey, 0 4px 0 #efefef,
      0 30px 5px rgba(12, 122, 22, 0.1);
    animation: float 2s linear infinite;
    animation-direction: alternate;
    margin: 0;
    padding: 0;

    @media (max-width: 700px) {
      display: none;
      margin: 0;
      padding: 0;
    }

    &:hover {
      cursor: crosshair;
    }

    @keyframes float {
      from {
        transform: rotate(3deg);
      }
      to {
        transform: rotate(-3deg);
      }
    }
  }
`;

const LinkContainer = styled(NavLink)`
  padding: 20px 20px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  &:hover {
    transform: scale(1.4);
    transition: 0.25s ease-in-out;
    color: darkred;
  }
`;

const Menu = styled.div`
  display: ${props => (props.showMenu ? "flex" : "none")};
  position: absolute;
  flex-direction: column;
  top: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 200;
  height: 600px;
  width: 80%;
  align-items: center;
  justify-content: space-evenly;
  animation: enter 1s;
  @keyframes enter {
    from {
      transform: translateX(-200px);
      opacity: 0;
    }
    to {
      transform: translate(0);
    }
  }
`;
