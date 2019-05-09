import React from "react";
import styled from "styled-components";
import bg from "../../assets/header-bg.jpg";
import headerLogo from "../../assets/header-logo.png";
import UserInfo from "./UserInfo";

const Header = props => {
  return (
    <MainWrapper>
      <img className="logo" src={headerLogo} alt="logo" />
      <h2>Manage Your Soup Kitchen</h2>
      <div>
        <UserInfo />
      </div>
    </MainWrapper>
  );
};

export default Header;

const MainWrapper = styled.div`
  background-image: url(${bg});
  color: darkred;
  align-items: center;
  display: flex;
  width: 100%;
  justify-content: space-between;

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
    font-weight: bold;
    font-size: 40px;
    letter-spacing: 15px;
    text-shadow: 0 1px 0 grey, 0 2px 0 grey, 0 3px 0 grey, 0 4px 0 #efefef,
      0 30px 5px rgba(12, 122, 22, 0.1);
    animation: float 2s linear infinite;
    animation-direction: alternate;

    @media (max-width: 700px) {
      display: none;
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
