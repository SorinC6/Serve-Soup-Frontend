import React from "react";
import styled from "styled-components";

const DetailCard = props => {
  return (
    <Wrapper>
      <h1>{props.item.name}</h1>
    </Wrapper>
  );
};

export default DetailCard;

const Wrapper = styled.div`
  width: 70%;
  border: 1px solid black;
`;
