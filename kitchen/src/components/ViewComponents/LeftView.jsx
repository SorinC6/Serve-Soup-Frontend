import React from "react";
import styled from "styled-components";

const LeftView = () => {
  return (
    <Wrapper>
      <p>Ingredients List</p>
      <button>Ingredient1</button>
      <button>Ingredient1</button>
      <button>Ingredient1</button>
      <button>Ingredient1</button>
      <button>Ingredient1</button>
    </Wrapper>
  );
};

export default LeftView;

const Wrapper = styled.div`
  width: 20%;
  border: 1px solid red;
  display: flex;
  flex-direction: column;

  p {
    text-align: center;
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
  }

  button {
    text-decoration: none;
    color: #351435;
    font-family: sans-serif;
    font-size: 20px;
    border: 1px solid #351435;
    padding: 10px 20px;
    position: relative;
    transition: all 1s;
    overflow: hidden;
    z-index: 1;
    width: 70%;
    margin: 3px auto;
    border-radius: 3px;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background-color: #351435;
      z-index: -1;
      transform: translateX(-100%);
      transition: all 1s;
    }
    &:hover:before {
      transform: translateY(0);
    }
    &:hover {
      color: white;
    }
  }
`;
