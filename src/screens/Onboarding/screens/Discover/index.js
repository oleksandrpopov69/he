/**
 * @format
 * @flow
 */

import React, {useState} from 'react';
import { ScrollView, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import images from '../../../../assets/index'

const {info, smallArrowDown} = images;

const Discover = (props) => {

    const {openMaskModal, mask} = props;
    console.log(mask);

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
                    <Image source={mask.image} style={styles.mask}/>
                    <TouchableOpacity
                        style={styles.maskInputContainer}
                        onPress={openMaskModal}
                    >
                        <Text style={styles.maskName}>{mask.title}</Text>
                        <Image source={smallArrowDown}
                               style={styles.smallArrowDown}/>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default Discover;
