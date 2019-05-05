import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getItems } from "../../store/actions/actionInventory";
import MainCard from "../Common/MainCard";

const MiddleView = props => {
  useEffect(() => {
    props.getItems();
  }, []);

  console.log(props.items);

  return (
    <Wrapper>
      {props.items.map(item => {
        return <MainCard key={item.id} data={item} />;
      })}
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    items: state.items.items
  };
};

const mapDispatchToProps = {
  getItems
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
  border: 1px solid red;
`;
