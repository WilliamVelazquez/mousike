import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import { registerUser } from '../actions';

import { GlobalStyle } from '../GlobalStyles';

const Layout = styled.div`
  display: grid;
  margin-top: 50px;
  padding-bottom: 60px;
  justify-content: center;
`;

const BackgroundBox = styled.div`
  padding: 40px;
  min-width: 400px;
  border-radius: 20px;
  background-color: #333333;
`;

const TitleText = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

const RegisterForm = styled.form`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
`;

const InputContainer = styled.p`
  position: relative;
  margin-bottom: 10px;
`;

const RegisterInputLabel = styled.label`
  font-size: 16px;
  padding: 5px 0px;
  font-weight: bold;
  display: inline-block;
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const RegisterInput = styled.input`
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
  @media (max-width: 480px) {
    font-size: 12px;
    padding: 8px 8px;
  }
  & :focus{
    background: #fff
  }
`;
const RegisterButton = styled.button`
  color:#616467;
  display:block;
  cursor:pointer;
  font-size:14px;
  font-weight:700;
  margin-top:15px;
  user-select:none;
  line-height:14px;
  margin-bottom:0px;
  text-align:center;
  letter-spacing:2px;
  border-radius:500px;
  padding: 18px 48px;
  box-sizing:border-box;
  background-color:white;
  border: 1px #ccc solid;
  text-transform:uppercase;
  box-shadow:#616467 0px 0px 0px 2px inset;
  @media (max-width: 480px) {
    font-size: 12px;
    padding: 12px 48px;
  }
  :hover{
    color: #fff;
    background-color: #616467;
  }
`;

export const LoginSection = styled.p`
  font-size: 16px;
  @media (max-width: 480px) {
    font-size: 12px;
  }
  & > a {
    color: #26FFAB;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;  
    @media (max-width: 480px) {
      font-size: 12px;
    }    
  }
  & > a:hover {
    text-decoration: underline;
  }
`;

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerUser(form, '/login');
  };

  return (
    <>
      <GlobalStyle background="#262930" />
      <Header isRegister />
      <Layout>
        <BackgroundBox>
          <TitleText>Register!</TitleText>
          <RegisterForm className="register__container--form" onSubmit={handleSubmit}>
            <InputContainer>
              <RegisterInputLabel htmlFor="name">Full name</RegisterInputLabel>
              <RegisterInput
                name="name"
                id="name"
                className="input"
                type="text"
                placeholder="Name"
                onChange={handleInput}
                title="Fill this field"
                required
              />
            </InputContainer>
            <InputContainer>
              <RegisterInputLabel htmlFor="email">Email</RegisterInputLabel>
              <RegisterInput
                name="email"
                className="input"
                type="text"
                placeholder="Email"
                onChange={handleInput}
                title="Fill this field"
                required
              />
            </InputContainer>
            <InputContainer>
              <RegisterInputLabel htmlFor="password">Password</RegisterInputLabel>
              <RegisterInput
                name="password"
                className="input"
                type="password"
                placeholder="Password"
                onChange={handleInput}
                title="Fill this field"
                required
              />
            </InputContainer>
            <RegisterButton className="button" type="submit">Register</RegisterButton>
          </RegisterForm>
          <LoginSection>
            Already have an account?
            {' '}
            <Link to="/login">
              Log in here!
            </Link>
          </LoginSection>
        </BackgroundBox>
      </Layout>
    </>
  );
};

const mapDispatchToProps = {
  registerUser,
};

export default connect(null, mapDispatchToProps)(Register);
