import React, { Component } from "react";
import styled from "styled-components";
import bg from "../../assets/login-bg.jpg";
import plate from "../../assets/plate.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <FormWrapper>
        <img src={plate} alt="logo" />
        <h2>Register Account</h2>
        <Form>
          <InputField placeholder="username" />
          <InputField placeholder="password" />
        </Form>
        <LinkWrapper to="/register">
          Don't have a account? Register Here
        </LinkWrapper>
      </FormWrapper>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  background-image: url(${bg});
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const FormWrapper = styled.div`
  max-width: 500px;
  border: 2px solid lightseagreen;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-left: 100px;
  color: white;
  background: grey;
  opacity: 0.8;
  animation: enter 1.3s;
  img {
    max-width: 150px;
  }

  @keyframes enter {
    from {
      transform: translateX(-200px);
      opacity: 0;
    }
    to {
      transform: translate(0);
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input`
  padding: 7px;
  margin: 5px;
  width: 200px;
  outline: none;
  font-size: 20px;
  color: purple;
`;

const LinkWrapper = styled(Link)`
  padding: 10px;
  margin-top: 5px;
  color: purple;
  text-decoration: none;
  font-size: 14px;
`;
