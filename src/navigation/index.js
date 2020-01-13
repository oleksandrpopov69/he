import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import WelcomeContainer from "../containers/Welcome";
import SignInContainer from "../containers/SignIn";
import SignUpContainer from "../containers/SignUp";
import ResetPasswordContainer from  '../containers/ResetPassword'
import NewPasswordContainer from  '../containers/NewPassword'
import VerificationContainer from  '../containers/Verification'
import OnboardingContainer from  '../containers/Onboarding'
import DiscoverContainer from  '../containers/Onboarding/containers/Discover'

const AppNavigator = createSwitchNavigator(
    {
        Welcome: WelcomeContainer,
        SignUp: SignUpContainer,
        SignIn: SignInContainer,
        ResetPassword: ResetPasswordContainer,
        NewPassword: NewPasswordContainer,
        Verification: VerificationContainer,
        Onboarding: OnboardingContainer

    },
    {
        initialRouteName: 'Onboarding'
    });

export default createAppContainer(AppNavigator);
