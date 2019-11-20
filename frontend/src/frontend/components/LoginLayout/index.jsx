import React from 'react';
import styled from 'styled-components';
import GoogleIcon from '../Icons/GoogleIcon';
import TwitterIcon from '../Icons/TwitterIcon';
import FacebookIcon from '../Icons/FacebookIcon';
import SocialMediaLoginButton from '../SocialMediaLoginButton';

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
          <SocialMediaLoginButton text="Login with Facebook" background="#395697">
            <FacebookIcon
              size={18}
              color="#fff"
              hoverColor="#052A4F"
            />
          </SocialMediaLoginButton>
        </SocialMediaButtonsBox>
        <SignUpBox>
          <SocialMediaLoginButton text="Sign up!" textColor="#262930" />
        </SignUpBox>
      </BackgroundBox>
    </Layout>
  );
};

export default LoginLayout;
