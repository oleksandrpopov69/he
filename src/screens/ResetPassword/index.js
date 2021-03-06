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

const ResetPasswordScreen = (props) => {
    const {navigate} = props.navigation;

    const state = {
        language: i18n.language,
    };

    const {language} = state;

    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.arrowContainer}
                                  onPress={() => navigate('SignIn')}
                >
                    <Image style={styles.arrow}
                           source={arrowLeft}
                    />
                </TouchableOpacity>
                <Text style={styles.caption}>
                    Reset Password
                </Text>
                <Text style={styles.instructions}>
                    Enter the email address associated with your account, and we’ll email you a link to reset your password.
                </Text>
                <View style={styles.email} >
                    <Input type={'email'} text={'Email Address'}/>
                </View>
                <Button text={'Send Resent Link'}
                        onPress={() => navigate('NewPassword')}
                        color={'blue'}
                        size={'large'}
                        shadow={'light'}
                        gradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                />
            </View>
        </ScrollView>

    )
};

export default ResetPasswordScreen;
