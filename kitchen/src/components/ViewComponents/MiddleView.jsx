import React from "react";
import styled from "styled-components";

const MiddleView = () => {
  return (
    <Wrapper>
      <p>Cards</p>
    </Wrapper>
  );
};

export default MiddleView;

const Wrapper = styled.div`
  width: 60%;
  border: 1px solid red;
`;
