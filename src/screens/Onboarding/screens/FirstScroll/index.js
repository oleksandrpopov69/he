/**
 * @format
 * @flow
 */

import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../FirstScroll/styles";
import images from '../../../../assets/index';
import Button from "../../../../components/Button";

const {add, added, nutrition, meditation} = images;

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Nutrition',
        image: nutrition
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Meditation',
        image: meditation
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        image: meditation
    }
];

const Item = DATA.map((item) => {
    return (
        <View style={styles.item}>
            <Image source={item.image}
                   style={styles.image}/>
            <Text style={styles.text}>{item.title}</Text>
            <TouchableOpacity style={styles.itemButton}>
                <Image source={add}
                       style={styles.buttonImage}/>
            </TouchableOpacity>
        </View>
    );
});

const FirstScroll = () => {
    return (
        <ScrollView >
            <View style={styles.container}>
                <Text style={styles.confirmation}>Let’s start, Mika!</Text>
                <Text style={styles.captions}>What are you interested in?</Text>
                <ScrollView horizontal
                            style={styles.itemsContainer}>
                    {Item}
                </ScrollView >
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

export default FirstScroll;
