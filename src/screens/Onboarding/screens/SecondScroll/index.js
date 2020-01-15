/**
 * @format
 * @flow
 */

import React from 'react';
import { ScrollView, View, Text, Image, TextInput } from "react-native";
import styles from "../SecondScroll/styles";
import images from '../../../../assets/index'
import Button from "../../../../components/Button";

const {graph} = images;

const SecondScroll = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.captions}>How are you feeling overall?</Text>
                <Image source={graph}
                       style={styles.graph}/>
                <View style={styles.base}>
                    <Text style={styles.baseText}>What has you feeling this way?</Text>
                    <TextInput placeholder={'Type...'}
                               style={styles.input}/>
                </View>
                <View style={styles.buttons}>
                    <Button text={'Back'}
                            onPress={() => {}}
                            color={'blue'}
                            size={'middle'}
                            shadow={'light'}
                            outline
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 0}}
                    />
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

export default SecondScroll;
