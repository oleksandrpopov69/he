/**
 * @format
 * @flow
 */

import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import DiscoverScreen from "../../../../screens/Onboarding/screens/Discover";

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = {

};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DiscoverScreen);
