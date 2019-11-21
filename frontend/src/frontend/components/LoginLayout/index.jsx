import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GoogleIcon from '../Icons/GoogleIcon';
import TwitterIcon from '../Icons/TwitterIcon';
import FacebookIcon from '../Icons/FacebookIcon';
import HorizontalSeparator from '../HorizontalSeparator';
import SocialMediaLoginButton from '../SocialMediaLoginButton';

const Layout = styled.div`
  display: grid;
  margin-top: 50px;
  padding-bottom: 60px;
  justify-content: center;
`;

const BackgroundBox = styled.div`
  padding: 40px;
  min-width: 500px;
  border-radius: 20px;
  background-color: #333333;
  @media (max-width: 768px) {
    min-width: 0px;
  }
  @media (max-width: 320px) {
    border-radius: 0px;
  }
`;

const SocialMediaButtonsBox = styled.div`
  display: grid;
  grid-row-gap: 20px;
  text-align: center;
`;

const SignUpBox = styled.div`
  display: grid;
  text-align: center;
  margin-bottom: 20px;
`;

const TitleText = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

const LoginLayout = (props) => {
  const { children } = props;
  return (
    <Layout>
      <BackgroundBox>
        { children }

        <TitleText>Don´t have an account?</TitleText>
        <SignUpBox>
          <Link to="/register">
            <SocialMediaLoginButton text="Sign up!" textColor="#262930" />
          </Link>
        </SignUpBox>

        <HorizontalSeparator barColor="#FFFFFF" text="OR" />

        <SocialMediaButtonsBox>
          <SocialMediaLoginButton text="Login with Facebook" background="#395697">
            <FacebookIcon
              size={18}
              color="#fff"
              hoverColor="#052A4F"
            />
          </SocialMediaLoginButton>
          <SocialMediaLoginButton text="Login with Google" background="#ffffff" textColor="#262930">
            <GoogleIcon
              size={18}
              color="#262930"
              hoverColor="#052A4F"
            />
          </SocialMediaLoginButton>
          <SocialMediaLoginButton text="Login with Twitter" background="#1da1f2">
            <TwitterIcon
              size={18}
              color="#fff"
              hoverColor="#052A4F"
            />
          </SocialMediaLoginButton>
        </SocialMediaButtonsBox>
      </BackgroundBox>
    </Layout>
  );
};

export default LoginLayout;
