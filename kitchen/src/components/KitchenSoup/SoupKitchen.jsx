import React from "react";
import styled from "styled-components";

const SoupKitchen = ({ data }) => {
  console.log(data);
  return (
    <Wrapper>
      <h1>{data.name}</h1>
      <h2>{data.location}</h2>
      <h2>{data.mission}</h2>
      <h2>{data.website}</h2>
    </Wrapper>
  );
};

export default SoupKitchen;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px dashed darkred;
  width: 70%;
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 20px;
`;
