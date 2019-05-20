import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserById } from "../../store/actions/actionUserInfo";

 
const User = props => {
  useEffect(() => {
    const id = localStorage.getItem("user_id");
    //console.log(id);
    props.getUserById(id);
  }, []);
  return (
    <div>
      <p>User Info Cmponent</p>
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
