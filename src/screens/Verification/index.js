/**
 * @format
 * @flow
 */

import i18n from '../../locales';
import {ScrollView, View, Image, Text, TouchableOpacity, TextInput} from "react-native";
import arrowLeft from '../../assets/arrow-left.png'
import Button from "../../components/Button";
import styles from './styles'
import React from "react";
import profile from "../../assets/profile.png";

const VerificationScreen = (props) => {
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
                <Text style={styles.caption}>
                    Verification
                </Text>
                <View style={styles.instruction}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={profile}
                        />
                    </View>
                    <Text style={styles.instructionCaption}>
                        We sent you an email.
                    </Text>
                    <Text style={styles.instructionText}>
                        Step 1 is done. Feeling good?
                        Thought you might! Now just
                        complete the verification
                        through the email we sent, or
                        throw the registration in here.
                    </Text>
                </View>
                <View style={styles.codeWrapper}>
                    <View style={styles.codeItemWrapper}>
                        <Text style={styles.codeItem}>1</Text>
                    </View>
                    <View style={styles.codeItemWrapper}>
                        <Text style={styles.codeItem}>1</Text>
                    </View>
                    <View style={styles.codeItemWrapper}>
                        <Text style={styles.codeItem}>1</Text>
                    </View>
                    <View style={styles.codeItemWrapper}>
                        <Text style={styles.codeItem}>1</Text>
                    </View>
                    <TextInput style={styles.input} keyboardType={'numeric'}/>
                </View>
                <TouchableOpacity style={styles.resendWrapper}>
                    <Text style={styles.resend}>Resend Email</Text>
                </TouchableOpacity>
                <Button text={'Verify'}
                        onPress={() => navigate('SignIn')}
                        color={'blue'}
                        size={'large'}
                        gradient={true}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                />
            </View>
        </ScrollView>

    )
};

export default VerificationScreen;
