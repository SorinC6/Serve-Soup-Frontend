import React from "react";
import styled from "styled-components";

const MainCard = props => {
  const { image, name, amount, unit, id } = props.data;

  const onClickHandle = id => {
    console.log(id);
  };
  return (
    <CardWrapper>
      <img src={image} alt="item image missing" />
      <div>
        <h4>{name}</h4>
        <p>
          Quantity:
          {amount} {unit}
        </p>
        <button onClick={() => onClickHandle(id)}>Modify</button>
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
  border-radius: 20px;
  justify-content: center;
  transition: all 0.5s;
  background: rgba(0, 0, 0, 0);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

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
