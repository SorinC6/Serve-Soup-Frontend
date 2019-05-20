import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllSoupKitchens } from "../../store/actions/actionSoupKitchens";

const Kitchen = props => {
  useEffect(() => {
    props.getAllSoupKitchens();
  }, []);

  console.log(props.kitchenData);
  return (
    <div>
      <p>aibaba</p>
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
