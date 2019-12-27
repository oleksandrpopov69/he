/**
 * @format
 * @flow
 */

import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from "react-native";
import Button from "../../components/Button";
import styles from './styles'
import image from '../../assets/logo.png';

const WelcomeScreen = (props) => {
    const {navigate} = props.navigation;

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={image}
                    />
                </View>
                <Text style={styles.welcome}>Welcome to he.</Text>
                <Text style={styles.welcomeText}>Hey man! Great to see you here. Take
                    a minute to get familiar. This is your
                    space for your thoughts, your actions
                    and your community. We have
                    resources, experts and a messaging
                    platform to get you started. We are
                    stoked you joined us.</Text>
                <Button text={'Sign Up'}
                        onPress={() => navigate('SignUp')}
                        color={'blue'}
                        size={'large'}
                        gradient
                />
                <TouchableOpacity
                    onPress={() => navigate('SignIn')}>
                    <Text style={styles.href}>Already a member?</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default WelcomeScreen;
