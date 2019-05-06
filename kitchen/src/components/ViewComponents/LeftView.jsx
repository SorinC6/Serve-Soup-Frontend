import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import {
  getCategories,
  getAllItems,
  getSpecificItems
} from "../../store/actions/actionCategory";

const LeftView = props => {
  useEffect(() => {
    props.getCategories();
  }, []);

  //console.log("CATEGORIES: ", props.categories);

  const handleCategory = id => {
    console.log(id);

    if (id === "-1") {
      props.getAllItems();
    } else {
      props.getSpecificItems(id);
    }
  };

  return (
    <Wrapper>
      <p>Ingredients List</p>
      {props.categories.map(cat => {
        return (
          <button key={cat.id} onClick={() => handleCategory(cat.id)}>
            {cat.name}
          </button>
        );
      })}
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    categories: state.categoriesReducer.cat,
    loading: state.categoriesReducer.loading
  };
};

const mapDIspatchToProps = {
  getCategories,
  getAllItems,
  getSpecificItems
};

export default connect(
  mapStateToProps,
  mapDIspatchToProps
)(LeftView);

const Wrapper = styled.div`
  background-color: #f0f8ff;
  width: 20%;
  display: flex;
  flex-direction: column;
  z-index: 10;
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
    text-transform: lowercase;
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
