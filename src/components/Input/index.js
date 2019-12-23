/**
 * @format
 * @flow
 */

import React from 'react';
import { TextInput, View, Image} from 'react-native';
import styles from './styles'
import email from "../../assets/email.png";
import password from '../../assets/password.png';
import view from '../../assets/view.png';


const Input = (props) => {
    const {style, type} = props;
    const viewImg = type === 'password' ? <Image style={styles.viewImg} source={view}/> : null;
    return <View style={{...styles.container, ...style}}>
        <TextInput
            style={styles.input}
            onChangeText={() => {}}
            placeholder={type === 'email' ? 'Email Address' : 'Password'}
        />
        <Image style={styles.logo}
               source={type === 'email' ? email : password}
        />
        {viewImg}
    </View>
};

export default Input;
