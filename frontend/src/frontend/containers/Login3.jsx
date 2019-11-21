import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import Header from '../components/Header/Header';
import LoginLayout from '../components/LoginLayout';

import { GlobalStyle } from '../GlobalStyles';

const LoginRememberMe = styled.div`
  /* color: #616467; */
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  & > a {
    color: #FFFFFF;
    font-size: 14px;
    text-decoration: none;
  }
  & > a:hover{
    text-decoration: underline;
  }
`;

const LoginForm = styled.form`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
`;

const InputContainer = styled.p`
  position: relative;
  margin-bottom: 15px;
`;

const LoginInputLabel = styled.label`
  font-size: 16px;
  padding: 5px 0px;
  font-weight: bold;
  display: inline-block;
`;

const LoginInput = styled.input`
  margin:0;
  width: 100%;
  outline: none;
  display: block;
  font-size: 16px;
  background: #fff;
  padding: 10px 8px;
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid #dbdbdb;
  & :focus{
    background: #fff
  }
`;
const LoginButton = styled.button`
  height:48px;
  width:450px;
  color:#616467;
  display:block;
  cursor:pointer;
  font-size:14px;
  min-width:160px;
  font-weight:700;
  user-select:none;
  line-height:14px;
  margin-bottom:0px;
  text-align:center;
  letter-spacing:2px;
  border-radius:500px;
  padding-top:16px;
  padding-left:48px;
  padding-right:48px;
  padding-bottom:18px;
  box-sizing:border-box;
  background-color:white;
  border: 1px #ccc solid;
  text-transform:uppercase;
  box-shadow:#616467 0px 0px 0px 2px inset;

  :hover{
    color: #fff;
    background-color: #616467;
  }
`;

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginUser(form, '/');
  };

  const html = (
    <>
      <GlobalStyle background="#262930" />

      <Header isLogin />
      <LoginLayout>
        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>To continue, log in!</h2>
        <LoginForm className="login__container--form" onSubmit={handleSubmit}>
          <InputContainer className="inputContainer">
            <LoginInputLabel htmlFor="email" className="floatLabel">Email</LoginInputLabel>
            <LoginInput
              className="input"
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              onChange={handleInput}
              title="Fill this field"
              required
            />
          </InputContainer>
          <InputContainer>
            <LoginInputLabel htmlFor="password">Password</LoginInputLabel>
            <LoginInput
              className="input"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleInput}
              title="Fill this field"
              required
            />
          </InputContainer>
          <LoginButton
            className="button"
            type="submit"
          >
          Log In
          </LoginButton>
          <LoginRememberMe className="login__container--remember-me">
            <label htmlFor="cbox1">
              <input
                id="cbox1"
                type="checkbox"
                value="first_checkbox"
              />
              Remember me!
            </label>
            <a href="/">Forgot your password?</a>
          </LoginRememberMe>
        </LoginForm>
      </LoginLayout>
    </>
  );
  return html;
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(Login);
