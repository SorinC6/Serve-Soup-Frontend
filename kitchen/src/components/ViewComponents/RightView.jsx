import React from "react";
import styled from "styled-components";

const RightView = () => {
  return (
    <Wrapper>
      <button>View Inventory</button>
      <button>Add Inventory</button>
      <button>Soup Kitchens</button>
    </Wrapper>
  );
};

export default RightView;

const Wrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;

  button {
    outline: none;
    color: black;
    font-size: 20px;
    border: 3px solid white;
    padding: 10px 20px;
    transition: all 0.5s;
    position: relative;
    overflow: hidden;
    border: 1px solid darkred;
    margin: 20px 0;

    &:hover {
      background-color: darkred;
      color: white;
    }

    &:before {
      content: "";
      background-color: lightgrey;
      top: 0;
      left: 0;
      width: 100%;
      height: 50px;
      position: absolute;
      transform: translateX(-100%) rotate(45deg);
      transition: all 0.5s;
    }
    &:hover:before {
      transform: translateX(100%) rotate(45deg);
    }
  }
`;
