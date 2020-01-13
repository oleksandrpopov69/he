/**
 * @format
 * @flow
 */

import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import SixthScrollScreen from "../../../../screens/Onboarding/screens/SixthScroll";

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = {

};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SixthScrollScreen);
