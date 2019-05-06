import React, { useEffect } from "react";
import Header from "../Header/Header";
import LeftView from "../ViewComponents/RightView";
import { connect } from "react-redux";
import { getItemById } from "../../store/actions/actionInventory";
import styled from "styled-components";
import DetailCard from "../Common/DetailCard";

const SingleCard = props => {
  useEffect(() => {
    const id = props.match.params.id;
    props.getItemById(id);
  }, []);

  console.log("propspsps ", props.item);
  return (
    <div>
      <Header />

      <Wrapper>
        <DetailCard item={props.item} />
        <LeftView />
      </Wrapper>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    item: state.getById.item
  };
};

const mapDispatchToProps = { getItemById };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCard);

const Wrapper = styled.div`
  display: flex;
`;
