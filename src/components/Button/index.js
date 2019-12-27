/**
 * @format
 * @flow
 */

import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {getButtonStyles, getBackgroundStyles, getTextStyles, getViewStyles, gradientColors} from "./styles";
import LinearGradient from "react-native-linear-gradient";

const Button = (props) => {
    const { text, onPress, color, size, outline, gradient } = props;
    const Background = gradient ? LinearGradient : View;
    let backgroundProps = { style: getBackgroundStyles(size, gradient, color) };

    if (gradient) {
        backgroundProps = {
            ...backgroundProps,
            colors: gradientColors[color],
            start : {x: 0, y: 0},
            end : {x: 1, y: 0}
        }
    }

    return (
        <TouchableOpacity onPress={() => onPress()} style={getButtonStyles(size, color, outline)}>
            <Background {...backgroundProps}/>
            <View style={getViewStyles(size, color, outline, gradient)}>
                <Text style={getTextStyles(size, color, outline)}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity> )
};

export default Button;
