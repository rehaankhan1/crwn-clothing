import React from 'react'
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';
import SignIn from '../../components/sign-in/sign-in-component'
import SignUp from '../../components/sign-up-component/sign-up-component'

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;