import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getAllItems } from "../../store/actions/actionCategory";
import MainCard from "../Common/MainCard";

const MiddleView = props => {
  useEffect(() => {
    props.getAllItems();
  }, []);

  // console.log(props.items);

  return (
    <Wrapper>
      {!props.items.length && <h4>No Items in this Category</h4>}
      {props.items.length && props.items.map(item => {
        return <MainCard key={item.id} data={item} />;
      })}
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    items: state.categoriesReducer.items
  };
};

const mapDispatchToProps = {
  getAllItems
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MiddleView);

const Wrapper = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* border: 1px solid red; */
`;
