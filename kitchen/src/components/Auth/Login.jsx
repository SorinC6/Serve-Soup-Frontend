import React, { useState } from "react";
import styled from "styled-components";
import bg from "../../assets/login-bg.jpg";
import plate from "../../assets/plate.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [focused, setFocused] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <FormWrapper>
        <img src={plate} alt="logo" />
        <h2>Register Account</h2>
        <Form>
          <InputField
            placeholder="username"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            focused={focused}
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <InputField
            placeholder="password"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            focused={focused}
            value={password}
            type="password"
            pattern=".{6,}"
            title="Six or more characters"
            onChange={e => setPassword(e.target.value)}
            type="password"
            pattern=".{6,}"
          />
          <BtnWrapper>Login</BtnWrapper>
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
  align-items: center;
`;

const InputField = styled.input`
  padding: 7px;
  margin: 5px;
  width: ${props => (props.focused ? "220px" : "200px")};
  outline: none;
  font-size: 20px;
  color: purple;
  background: ${props => (props.focused ? "white" : "#E8E8E8")};
  border-radius: ${props => (props.focused ? "10px" : "5px")};
  transition: width 200ms, border 1s;
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
