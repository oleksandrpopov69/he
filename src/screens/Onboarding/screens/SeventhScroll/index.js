/**
 * @format
 * @flow
 */

import React from 'react';
import {ScrollView, View, Text, Image} from "react-native";
import styles from "../SeventhScroll/styles";
import images from '../../../../assets/index'

const {face} = images;

const SeventhScroll = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.captions}>
                    Hell ya! You did it! Let's go....!
                </Text>
                <View style={styles.imageContainer}>
                    <Image source={face}
                           style={styles.image}/>
                </View>
            </View>
        </ScrollView>
    );
};

export default SeventhScroll;
