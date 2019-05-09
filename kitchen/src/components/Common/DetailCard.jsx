import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const DetailCard = props => {
  const {
    id,
    image,
    name,
    price,
    amount,
    unit,
    supplier_contact,
    supplier_name
  } = props.item;
  return (
    <Wrapper>
      <ImageSection>
        <img src={image} alt="itemImg" />
        <button
          onClick={() => {
            props.deleteItem(id);
            props.history.push("/");
          }}
        >
          Delete
        </button>
        <button onClick={props.showEditForm}>Update</button>
      </ImageSection>
      <DetailItem>
        <h1>{name}</h1>
        <h3>Price: {price} $</h3>

        <AmountMod>
          <button onClick={props.decrease}>-</button>
          <h4>
            {amount} {unit}
          </h4>
          <button onClick={props.increase}>+</button>
        </AmountMod>
        <h5>Supplier: {supplier_name}</h5>
        <h5>Contact: {supplier_contact}</h5>
      </DetailItem>
    </Wrapper>
  );
};

export default withRouter(DetailCard);

const Wrapper = styled.div`
  margin: 50px 20px;
  width: 50%;
  height: 400px;
  margin-left: 250px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background: AliceBlue;
  transition: all 1s;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 860px) {
    width: 90%;
    margin-left: 10px;
    font-size: 15px;
    flex-direction: column;
    height: 520px;
    margin-left: 20px;
  }
  img {
    max-width: 250px;
    height: 300px;
    border-radius: 10px;

    @media (max-width: 860px) {
      margin-top: 20px;
      max-width: 200px;
      height: auto;
    }
  }
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-transform: uppercase;
  }
`;

const AmountMod = styled.div`
  display: flex;

  button {
    width: 60px;
    border-radius: 50%;
    margin: 5px 10px;
    outline: none;
    font-size: 30px;
    transition: all 1.2s;

    &:hover {
      background: black;
      color: white;
      font-weight: bold;
    }
  }
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    padding: 10px;
    margin: 3px;
    width: 80%;
    border-radius: 10px;
    font-size: 16px;
    transition: all 1.2s;

    &:hover {
      background: black;
      color: white;
      font-weight: bold;
    }
  }
`;
