/**
 * @format
 * @flow
 */

import React from 'react';
import { ScrollView, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import Button from "../../../../components/Button";
import styles from "./styles";
import images from '../../../../assets/index'

const {info, medium, smallArrowDown} = images;

const Discover = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.confirmation}>Good afternoon!</Text>
                <Text style={styles.captions}>What should we call you?</Text>
                <TextInput placeholder={'Mika'}
                           style={styles.input}/>
                <Text style={styles.infoCaption}>What would be your secret name?
                    <Image source={info}
                           style={styles.info}/>
                </Text>
                <TextInput placeholder={'Mr.Gustave'}
                           style={styles.input}/>
                <Text style={styles.captions}>Choose your look.</Text>
                <View style={styles.maskContainer}>
                    <Image source={medium} style={styles.mask}/>
                    <TouchableOpacity style={styles.maskInputContainer}>
                        <Text style={styles.maskName}>Color</Text>
                        <Image source={smallArrowDown}
                               style={styles.smallArrowDown}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <Button text={'Next'}
                            onPress={() => {}}
                            color={'blue'}
                            size={'middle'}
                            shadow={'light'}
                            gradient
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 0}}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default Discover;
