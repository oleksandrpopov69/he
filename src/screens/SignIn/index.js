/**
 * @format
 * @flow
 */

import i18n from '../../locales';
import {ScrollView, View, Image, Text, TouchableOpacity, default as Linking} from "react-native";
import arrowLeft from '../../assets/arrow-left.png'
import facebook from '../../assets/facebook.png'
import google from '../../assets/google.png'
import Input from "../../components/Input";
import Button from "../../components/Button";
import styles from './styles'
import React from "react";

const SignInScreen = (props) => {
    const {navigate} = props.navigation;

    const state = {
        language: i18n.language,
    };

    const {language} = state;

    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.arrowContainer}
                                  onPress={() => navigate('SignUp')}
                >
                    <Image style={styles.arrow}
                           source={arrowLeft}
                    />
                </TouchableOpacity>
                <Text style={styles.signIn}>
                    Sign In
                </Text>
                <View>
                    <Input type={'email'} text={'Email Address'}/>
                </View>
                <View style={styles.password}>
                    <Input type={'password'} text={'Password'}/>
                </View>
                <TouchableOpacity style={styles.forgot}
                                  onPress={() => navigate('ResetPassword')}
                >
                    <Text style={styles.terms}>Forgot your password?</Text>
                </TouchableOpacity>
                <Button text={'Sign In'}
                        onPress={() => navigate('')}
                        color={'blue'}
                        size={'large'}
                        shadow={'light'}
                        gradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                />
                <View style={styles.links}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.facebook.com').catch(err => console.error("Couldn't load page", err))}>
                        <Image style={styles.link}
                               source={facebook}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://google.com').catch(err => console.error("Couldn't load page", err))}>
                        <Image style={styles.link}
                               source={google}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.signInWrapper}>
                    <Text style={styles.member}>Not a member yet? </Text>
                    <TouchableOpacity style={styles.signUp}
                                      onPress={() => navigate('SignUp')}
                    >
                        <Text>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    )
};

export default SignInScreen;
