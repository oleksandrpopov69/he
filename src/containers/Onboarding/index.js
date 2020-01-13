/**
 * @format
 * @flow
 */

import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import OnboardingScreen from "../../screens/Onboarding";

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = {

};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(OnboardingScreen);
