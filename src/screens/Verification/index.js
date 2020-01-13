/**
 * @format
 * @flow
 */

import i18n from '../../locales';
import {ScrollView, View, Image, Text, TouchableOpacity, TextInput} from "react-native";
import arrowLeft from '../../assets/arrow-left.png'
import Button from "../../components/Button";
import styles, {getCodeItemWrapper} from './styles'
import React, {useState} from "react";
import profile from "../../assets/profile.png";

const VerificationScreen = (props) => {
    const {navigate} = props.navigation;

    const state = {
        language: i18n.language,
    };

    const {language} = state;
    const verificationCode = '1111';
    let verificationValues = ['','','',''];
    let [verificationString, setVerificationString] = useState(0);
    let [error, setError] = useState(false);
    const getVerification = (verificationString, verificationCode) => {
        verificationCode !== verificationString ? setError(true) : setError(false);
    };

    const verificationValue = verificationValues.map((i, index) => {
        return (
            <View style={getCodeItemWrapper(error)}>
                <Text style={styles.codeItem}>{verificationString[index]}</Text>
            </View>
        )
    });

    const onBlur = (verificationString, verificationCode) => {
        verificationString.length === 4 ? getVerification(verificationString, verificationCode) : null
    };

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
                    {verificationValue}
                    <TextInput style={styles.input}
                               keyboardType={'numeric'}
                               maxLength={4}
                               onChangeText={value => setVerificationString(value)}
                               onBlur={() => onBlur(verificationString, verificationCode)}
                    />
                    { error && <Text style={styles.error}>We couldn’t recognize this code</Text>}
                </View>
                <TouchableOpacity style={styles.resendWrapper}>
                    <Text style={styles.resend}>Resend Email</Text>
                </TouchableOpacity>
                <Button text={'Verify'}
                        onPress={() => navigate('SignIn')}
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

export default VerificationScreen;
