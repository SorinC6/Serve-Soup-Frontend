import React from "react";
import styled from "styled-components";

const MainCard = props => {
  const { image, name, amount, unit } = props.data;
  return (
    <CardWrapper>
      <img src={image} alt="item image missing" />
      <div>
        <h4>{name}</h4>
        <p>
          Quantity:
          {amount} {unit}
        </p>
        <button>Modify</button>
      </div>
    </CardWrapper>
  );
};

export default MainCard;

const CardWrapper = styled.div`
  margin: 20px;
  width: 220px;
  height: 280px;
  position: relative;
  display: flex;
  justify-content: center;
  transition: all 0.5s;
  background: rgba(0, 0, 0, 0);
  overflow: hidden;

  button {
    padding: 10px;
    width: 50%;
    border-radius: 10px;
    font-size: 20px;
    background: transparent;
    color: white;
    outline: none;
  }
  img {
    width: 100%;
    height: auto;
    transition: all 1s;
  }
  div {
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    opacity: 0;
    transition: all 0.6s;
    transform: translateY(100%);
    h4 {
      text-transform: uppercase;
      margin: 0;
    }
    p {
      font-size: 18px;
      text-transform: capitalize;
      padding: 10px;
    }
  }
  &:hover img {
    transform: scale(1.3) rotate(15deg);
  }
  &:hover div {
    opacity: 1;
    background: rgba(0, 0, 0, 0.7);
    transform: translateY(0);
  }
`;
