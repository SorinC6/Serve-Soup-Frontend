import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header/Header";
import LeftView from "../ViewComponents/LeftView";
import MiddleView from "../ViewComponents/MiddleView";
import RightView from "../ViewComponents/RightView";
import Search from "../Search/Search";

const Home = props => {
  return (
    <div>
      <HeaderWrapper>
        <Header />
        <Search />
      </HeaderWrapper>
      <MainView>
        <LeftView />
        <MobileView>
          <MiddleView />
          <RightView />
        </MobileView>
      </MainView>
      <div />
    </div>
  );
};

export default withRouter(Home);

const HeaderWrapper = styled.div`
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: column;

  input {
    width: 40%;
    margin: 10px auto;
  }
`;

const MainView = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 430px) {
    justify-content: space-between;
  }
`;

const MobileView = styled.div`
  margin: 0;
  display: flex;
  width: 80%;
  justify-content: space-evenly;

  @media (max-width: 430px) {
    flex-direction: column-reverse;
  }
`;
