import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import WelcomeContainer from "../containers/Welcome";
import SignInContainer from "../containers/SignIn";
import SignUpContainer from "../containers/SignUp";
import ResetPasswordContainer from  '../containers/ResetPassword'
import NewPasswordContainer from  '../containers/NewPassword'
import VerificationContainer from  '../containers/Verification'

const AppNavigator = createSwitchNavigator(
    {
      Welcome: WelcomeContainer,
      SignUp: SignUpContainer,
      SignIn: SignInContainer,
      ResetPassword: ResetPasswordContainer,
      NewPassword: NewPasswordContainer,
      Verification: VerificationContainer
    },
    {
      initialRouteName: 'Welcome'
    });

export default createAppContainer(AppNavigator);
