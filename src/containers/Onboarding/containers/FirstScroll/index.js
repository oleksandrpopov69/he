/**
 * @format
 * @flow
 */

import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import FirstScrollScreen from "../../../../screens/Onboarding/screens/FirstScroll";

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = {

};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FirstScrollScreen);
