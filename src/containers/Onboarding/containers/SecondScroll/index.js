/**
 * @format
 * @flow
 */

import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import SecondScrollScreen from "../../../../screens/Onboarding/screens/SecondScroll";

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = {

};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SecondScrollScreen);
