import React from "react";
import styled from "styled-components";
import userImg from "../../assets/userinfo.png";

const UserWrapper = ({ user }) => {
  return (
    <Wrapper>
      <img src={userImg} alt="logo" />
      <div>
        <h1>Username: {user.name}</h1>
        <h3>email: {user.email}</h3>
        <h4>Role: {user.role}</h4>
      </div>
    </Wrapper>
  );
};

export default UserWrapper;

const Wrapper = styled.div`
  display: flex;

  img {
    width: 50%;
    height: 50%;
    animation: rot 5s linear infinite;
  }

  @keyframes rot {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
