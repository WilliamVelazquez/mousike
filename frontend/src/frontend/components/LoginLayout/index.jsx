import React from 'react';
import styled from 'styled-components';
import SocialMediaLoginButton from '../SocialMediaLoginButton';

const Layout = styled.div`
  display: grid;
  margin-top: 50px;
  justify-content: center;
`;

const BackgroundBox = styled.div`
  padding: 40px;
  min-width: 400px;
  border-radius: 20px;
  background-color: #333333;
`;
const SocialMediaButtonsBox = styled.div`
  display: grid;
  grid-row-gap: 40px;
  text-align: center;
  margin-bottom: 80px;
`;

const SignUpBox = styled.div`
  display: grid;
  text-align: center;
`;

const LoginLayout = () => {

  return (
    <Layout>
      <BackgroundBox>
        <SocialMediaButtonsBox>
          <SocialMediaLoginButton text="Login with Google" background="#ffffff" textColor="#262930" />
          <SocialMediaLoginButton text="Login with Twitter" background="#1da1f2" />
          <SocialMediaLoginButton text="Login with Facebook" background="#395697" />
        </SocialMediaButtonsBox>
        <SignUpBox>
          <SocialMediaLoginButton text="Sign up!" textColor="#262930" />
        </SignUpBox>
      </BackgroundBox>
    </Layout>
  );
};

export default LoginLayout;
