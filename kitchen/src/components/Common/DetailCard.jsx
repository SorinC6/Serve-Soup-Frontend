import React from "react";
import styled from "styled-components";

const DetailCard = props => {
  const {
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
      <img src={image} alt="itemImg" />
      <DetailItem>
        <h1>{name}</h1>
        <h3>Price: {price} $</h3>

        <AmountMod>
          <button>-</button>
          <h4>
            {amount} {unit}
          </h4>
          <button>+</button>
        </AmountMod>
        <h5>Supplier: {supplier_name}</h5>
        <h5>Contact: {supplier_contact}</h5>
      </DetailItem>
    </Wrapper>
  );
};

export default DetailCard;

const Wrapper = styled.div`
  margin: 20px;
  width: 80%;
  border: 1px solid black;
  display: flex;
  justify-content: space-evenly;
  img {
    max-width: 250px;
    height: 300px;
  }
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AmountMod = styled.div`
  display: flex;

  button {
    width: 60px;
    border-radius: 50%;
    margin: 5px 10px;
    outline: none;
    font-size: 30px;
  }
`;
