/**
 * @format
 * @flow
 */

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {getButtonStyles, getTextStyles} from "./styles";

const Button = (props) => {
    const {text, onPress, color, size, outline} = props;

    return <TouchableOpacity onPress={() => onPress()}
                             style={getButtonStyles(size, color, outline)}>
        <Text style={getTextStyles(size, color, outline)}>{text}</Text>
    </TouchableOpacity> ;
};

export default Button;
