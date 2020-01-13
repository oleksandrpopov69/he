/**
 * @format
 * @flow
 */

import React from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from "react-native";
import styles from "../FourthScroll/styles";
import images from '../../../../assets/index'
import Button from "../../../../components/Button";

const {dolphin, bear, turtle} = images;
const activity = [
    {
        title: 'Low',
        image: turtle
    },
    {
        title: 'Average',
        image: bear
    },
    {
        title: 'High',
        image: dolphin
    }
];

const Activities = activity.map((item) => {
    return (
        <TouchableOpacity style={styles.item}>
            <View style={styles.imageContainer}>
                <Image source={item.image}
                       style={styles.image}/>
            </View>
            <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
    );
});

const FourthScroll = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.captions}>What’s your activity level?</Text>
                <View style={styles.activity}>
                    {Activities}
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

export default FourthScroll;
