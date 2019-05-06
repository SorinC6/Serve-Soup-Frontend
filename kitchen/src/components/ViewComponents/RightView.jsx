import React, { useState } from "react";
import styled from "styled-components";
import AddFrom from "../ModifyInventory/AddForm";
import { withRouter } from "react-router-dom";

const RightView = props => {
  const [showAddForm, setShowAddForm] = useState(false);
  const handleAddInventory = () => {
    setShowAddForm(true);
  };

  const handleBack = () => {
    props.history.push("/");
  };

  const closeModal = () => {
    setShowAddForm(false);
  };

  return (
    <Wrapper>
      <button onClick={handleBack}>View Inventory</button>
      <button onClick={handleAddInventory}>Add Inventory</button>
      <button>Soup Kitchens</button>
      <AddFrom
        handlingModal={showAddForm}
        handleRequestCloseFunc={closeModal}
      />
    </Wrapper>
  );
};

export default withRouter(RightView);

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
