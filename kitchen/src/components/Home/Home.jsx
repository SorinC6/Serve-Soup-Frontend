import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header/Header";
import LeftView from "../ViewComponents/LeftView";
import MiddleView from "../ViewComponents/MiddleView";
import RightView from "../ViewComponents/RightView";

const Home = props => {
  return (
    <div>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <p style={{ textAlign: "center" }}>Search Component here for later</p>
      <MainView>
        <LeftView />
        <MiddleView />
        <RightView />
      </MainView>
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
  display: flex;
`;
