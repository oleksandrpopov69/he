/**
 * @format
 * @flow
 */

import i18n from '../../locales';
import {ScrollView, View, Image, Text, TouchableOpacity} from "react-native";
import arrowLeft from '../../assets/arrow-left.png'
import Input from "../../components/Input";
import Button from "../../components/Button";
import styles from './styles'
import React from "react";

const NewPasswordScreen = (props) => {
    const {navigate} = props.navigation;

    const state = {
        language: i18n.language,
    };

    const {language} = state;

    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.arrowContainer}
                                  onPress={() => navigate('Verification')}
                >
                    <Image style={styles.arrow}
                           source={arrowLeft}
                    />
                </TouchableOpacity>
                <Text style={styles.caption}>
                    Enter your new password
                </Text>
                <Input style={styles.password} type={'password'}/>
                <Button text={'Reset Password'} onPress={() => navigate('SignIn')} color={'blue'} size={'large'} outline={false} />
            </View>
        </ScrollView>
    )
};

export default NewPasswordScreen;
