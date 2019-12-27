/**
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import {TextInput, View, Image, TouchableOpacity, Text, Animated} from 'react-native';
import {
    getViewStyles,
    getInputStyles,
    getTypeImageStyles,
    getViewImageStyles,
    getErrorsStyles, getTypeImageColor, getInputLabelStyles
} from './styles';
import images from '../../assets/index';

const Input = (props) => {
    const {type, text} = props;
    let [secure, setSecure] = useState(true);
    let [error, setError] = useState(false);
    let [isFocused, setFocus] = useState(false);
    const errors = {
        email: 'Your have entered the wrong email',
        password: 'Your have entered the wrong password'
    };
    let inputValue = '';
    let inputProps = {
        style: getInputStyles()
    };

    if (type === 'password') {
        inputProps = {
            ...inputProps,
            secureTextEntry: secure,
            maxLength: 8
        }
    }

    const [focusAnim] = useState(new Animated.Value(0));
    useEffect(() => {
        Animated.timing(focusAnim, {
            toValue: isFocused ? 1 : 0,
            duration: 300,
        }).start();
    });

    const onFocus = () => {
        setFocus(true)
    };
    const onBlur = () => {
        inputValue ? setFocus(true) : setFocus(false);
    };

    const validate = (type, inputValue) => {
        if (type === 'email') {
            const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
            return setError(!expression.test(String(inputValue).toLowerCase()));
        } else if (type === 'password') {
            return setError(inputValue.length < 8);
        }
    };

    return (
        <View style={getViewStyles(type, isFocused)}>
            <Animated.Text style={getInputLabelStyles(type, focusAnim)}>
                {text}
            </Animated.Text>
            <TextInput {...inputProps}
                       onChangeText={(value) => inputValue = value}
                       onBlur={() => onBlur()}
                       onFocus={() => onFocus()}
            />
            <Image
                style={getTypeImageStyles()}
                source={images[type]}
                tintColor={getTypeImageColor(type, isFocused)}
            />
            { type === 'password' &&
            <TouchableOpacity
                style={getViewImageStyles()}
                onPress={() => setSecure(!secure)}
            >
                <Image source={images[`${secure ? 'viewCross' : 'view'}`]}/>
            </TouchableOpacity>
            }
            { error && <Text style={getErrorsStyles()}>{errors[type]}</Text>}
        </View>
    )
};

export default Input;
