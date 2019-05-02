import React, { useState } from "react";
import styled from "styled-components";
import bg from "../../assets/register-bg.jpg";
import plate from "../../assets/plate.png";
import { Link } from "react-router-dom";
import { registerUser } from "../../store/actions/actionAuth";

const Register = () => {
  const [focused, setFocused] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = e => {
    e.preventDefault();
    const userData = {
      name: username,
      password: password,
      email: email,
      role: role
    };

    console.log(userData);
  };

  return (
    <Container>
      <FormWrapper>
        <img src={plate} alt="logo" />
        <h2>Register Account</h2>
        <Form onSubmit={registerUser}>
          <InputField
            placeholder="username"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            focused={focused}
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <InputField
            placeholder="email"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            focused={focused}
            value={email}
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            onChange={e => setEmail(e.target.value)}
          />
          <LabelWrapper>
            <p>Role:</p>
            <select onChange={e => setRole(e.target.value)}>
              <option value="all">Choose a role</option>
              <option value="manager">Manager</option>
              <option value="voluntair">Voluntair</option>
              <option value="admin">Admin</option>
            </select>
          </LabelWrapper>
          <InputField
            placeholder="password"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            focused={focused}
            value={password}
            type="password"
            pattern=".{6,}"
            onChange={e => setPassword(e.target.value)}
          />
          <BtnWrapper type="submit">Register</BtnWrapper>
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
  width: ${props => (props.focused ? "220px" : "200px")};
  outline: none;
  font-size: 20px;
  color: purple;
  background: ${props => (props.focused ? "white" : "#E8E8E8")};
  border-radius: ${props => (props.focused ? "10px" : "5px")};
  transition: all 1s;
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

const LabelWrapper = styled.label`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 10px 0;
  width: 200px;
  outline: none;
  font-size: 20px;
  color: white;

  p {
    margin: 0;
    padding: 0;
  }

  select {
    font-size: 14px;
    padding: 10px;
  }
`;
