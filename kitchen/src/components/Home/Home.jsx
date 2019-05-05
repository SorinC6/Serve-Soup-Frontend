import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header/Header";

const Home = props => {


  return (
    <div>
      <HeaderWrapper>

        <Header />
      </HeaderWrapper>
      <MainView>LeftView MiddleView RightView</MainView>
      <div />
    </div>
  );
};

export default withRouter(Home);

const HeaderWrapper = styled.div`
  width: 100%;
  border: 1px solid green;
`;

const MainView = styled.div`
  width: 100%;
  border: 1px solid blue;
`;

const LeftView = styled.div`
  width: 20%;
  border: 1px solid red;
`;
