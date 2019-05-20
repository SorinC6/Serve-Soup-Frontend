import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserById } from "../../store/actions/actionUserInfo";
import UserWrapper from "./UserWrapper";
import Header from "../Header/Header";

const User = props => {
  useEffect(() => {
    const id = localStorage.getItem("user_id");
    //console.log(id);
    props.getUserById(id);
  }, []);
  return (
    <div>
      <Header />
      <UserWrapper user={props.userData} />
    </div>
  );
};

const mapDispatchToProps = {
  getUserById
};

const mapStateToProps = state => {
  return {
    userData: state.userInfo.userInfo
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
