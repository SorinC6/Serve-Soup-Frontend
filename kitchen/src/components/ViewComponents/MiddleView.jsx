import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getItems } from "../../store/actions/actionInventory";

const MiddleView = props => {
  useEffect(() => {
    props.getItems();
  }, []);

  console.log(props.items);

  return (
    <Wrapper>
      <p>Cards</p>
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
  border: 1px solid red;
`;
