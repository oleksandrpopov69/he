/**
 * @format
 * @flow
 */

import React, {useState} from 'react';
import i18n from '../../locales';
import {ScrollView, View, Image, Text, TouchableOpacity, Linking} from "react-native";
import arrowLeft from '../../assets/arrow-left.png'
import facebook from '../../assets/facebook.png'
import google from '../../assets/google.png'
import checkMark from '../../assets/tick-square.png'
import Input from "../../components/Input";
import Button from "../../components/Button";
import styles from './styles'

const SignUpScreen = (props) => {
    const {navigate} = props.navigation;

    const state = {
        language: i18n.language,
    };
    const [checked, setChecked] = useState(false);

    const {language} = state;

    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.arrowContainer}
                                  onPress={() => navigate('Welcome')}
                >
                    <Image style={styles.arrow}
                           source={arrowLeft}
                    />
                </TouchableOpacity>
                <Text style={styles.signUp}>
                    Sign Up
                </Text>
                <Input style={styles.email} type={'email'}/>
                <Input style={styles.password} type={'password'}/>
                <View style={styles.agreement}>
                    <TouchableOpacity
                        onPress={() => setChecked(!checked)}>
                        {checked ? <View style={styles.getCheckboxStyle(checked)}/> : <View><Image source={checkMark} style={styles.getCheckboxStyle(checked)}/></View>}
                    </TouchableOpacity>
                    <Text>Agree to the</Text>
                    <TouchableOpacity>
                        <Text style={styles.terms}> Terms & Conditions</Text>
                    </TouchableOpacity>
                </View>
                <Button text={'Sign Up'} onPress={() => navigate('Verification')} color={'blue'} size={'large'} outline={false} />
                <View style={styles.links}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com').catch(err => console.error("Couldn't load page", err))}>
                        <Image style={styles.link}
                               source={facebook}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://google.com').catch(err => console.error("Couldn't load page", err))}>
                        <Image style={styles.link}
                               source={google}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.signInWrapper}>
                    <Text style={styles.member}>Already a member? </Text>
                    <TouchableOpacity style={styles.signIn}
                                      onPress={() => navigate('SignIn')}
                    >
                        <Text>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    )
};

export default SignUpScreen;
