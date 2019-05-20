import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllSoupKitchens } from "../../store/actions/actionSoupKitchens";
import Header from "../Header/Header";
import SoupKitchen from "./SoupKitchen";
import bg from "../../assets/soup.jpg";
import styled from "styled-components";

const Kitchen = props => {
  useEffect(() => {
    props.getAllSoupKitchens();
  }, []);

  //console.log(props.kitchenData);
  return (
    <div>
      <Header />
      <ListWrapper>
        {props.kitchenData.map(item => {
          console.log(item);
          return <SoupKitchen key={item.id} data={item} />;
        })}
      </ListWrapper>
    </div>
  );
};

const mapDispatchToProps = {
  getAllSoupKitchens
};

const mapStateToProps = state => {
  return {
    kitchenData: state.allKitchen.kitchenData
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kitchen);

const ListWrapper = styled.div`
  background-image: url(${bg});
  max-width: 100%;
`;
