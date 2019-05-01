import React, { Component } from "react";
import styled from "styled-components";
import bg from "../../assets/register-bg.jpg";
import plate from "../../assets/plate.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container>
      <FormWrapper>
        <img src={plate} alt="logo" />
        <h2>Register Account</h2>
        <Form>
          <InputField placeholder="username" />
          <InputField placeholder="email" />
          <InputField placeholder="role" />
          <InputField placeholder="password" />
          <BtnWrapper>Register</BtnWrapper>
        </Form>
        <LinkWrapper to="/login">
          Already have an account? Login Here
        </LinkWrapper>
      </FormWrapper>
    </Container>
  );
};

export default Register;

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
  animation: enter 1.2s;
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
  align-items: center;
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

const BtnWrapper = styled.button`
  padding: 10px;
  width: 150px;
  border-radius: 7px;
  margin-top: 5px;
  font-size: 16px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  font-weight: bold;

  &:before {
    content: "";
    background: black;
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 100%;
    transform: skew(-15deg);
    animation: moving 1.2s linear infinite;
    transition: all 0.5s;
    z-index: -1;
    color: white;
  }

  &:hover:before {
    width: 100%;
    transform: skew(0deg);
    animation: none;
    background: purple;
    color: white;
  }

  @keyframes moving {
    from {
      left: -120px;
    }
    to {
      left: 100%;
    }
  }
`;
