import React from 'react';
import { GlobalStyle } from '../GlobalStyles';
import MobileHeader from '../components/Header/MobileHeader';
import LoginLayout from '../components/LoginLayout';

const Login = () => (
  <>
    <GlobalStyle background='#262930'/>
    <MobileHeader title='Login' />
    <LoginLayout />
  </>
);

export default Login;
