import React from "react";
import styled from "styled-components";

const RightView = () => {
  return (
    <Wrapper>
      <p>Inventory</p>
    </Wrapper>
  );
};

export default RightView;

const Wrapper = styled.div`
  width: 20%;
  border: 1px solid red;
`;
