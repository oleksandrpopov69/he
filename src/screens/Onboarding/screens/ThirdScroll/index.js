/**
 * @format
 * @flow
 */

import React from 'react';
import {ScrollView, View, Text, Image, TextInput, TouchableOpacity} from "react-native";
import styles from "../ThirdScroll/styles";
import images from '../../../../assets/index'
import Button from "../../../../components/Button";

const {sleepy, angry, annoyed, great, good, bad, profile} = images;
const emotions = [
    {
        title: 'Angry',
        image: angry
    },
    {
        title: 'Sad',
        image: bad
    },
    {
        title: 'Happy',
        image: good
    },
    {
        title: 'Sleepy',
        image: sleepy
    },
    {
        title: 'Excited  ',
        image: great
    },
    {
        title: 'Annoyed  ',
        image: annoyed
    }
];

const Emotions = emotions.map((item) => {
    return (
        <TouchableOpacity style={styles.item}>
            <Image source={item.image}
                   style={styles.image}/>
            <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
    );
});

const ThirdScroll = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.captions}>What emotion describes you the best today?</Text>
                <View style={styles.emotions}>
                    {Emotions}
                </View>
                <View style={styles.base}>
                    <Text style={styles.baseText}>
                        Ah.. looks like you need to get stuff off your chest.
                        Click here to vent that out!
                    </Text>
                    <Image source={profile}
                           style={styles.profileImage}/>
                    <TouchableOpacity>
                        <Text style={styles.tapText}>Tap to Upload Image or Video</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default ThirdScroll;
