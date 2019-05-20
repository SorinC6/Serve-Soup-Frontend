import React from "react";
import styled from "styled-components";
import bg from "../../assets/soup.jpg";

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
  background-image: url(${bg});
  max-width: 100%;
  h1 {
    margin: 0;
    color: red;
  }

  h2 {
    margin: 0;
  }
`;
