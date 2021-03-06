import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { search } from "../../store/actions/actionSearch";

const Search = props => {
  return (
    <Wrapper>
      <input
        style={{ textAlign: "center" }}
        placeholder="search ..."
        onChange={e => props.search(e.target.value)}
      />
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  search
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: lightgoldenrodyellow;

  input {
    padding: 10px;
    font-size: 16px;
    outline: none;
    border-radius: 20px;
  }
`;
