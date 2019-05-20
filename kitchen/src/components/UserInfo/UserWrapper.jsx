import React from "react";
import styled from "styled-components";

const UserWrapper = ({ user }) => {
  return (
    <Wrapper>
      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
      <h4>{user.role}</h4>
    </Wrapper>
  );
};

export default UserWrapper;

const Wrapper = styled.div`
  display: flex;
`;
