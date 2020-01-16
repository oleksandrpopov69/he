/**
 * @format
 * @flow
 */

import React from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from "react-native";
import styles from "../FifthScroll/styles";
import images from '../../../../assets/index'
import Button from "../../../../components/Button";

const {apple, sport, add, added} = images;
const goals = [
    {
        title: 'Nutrition',
        image: apple
    },
    {
        title: 'Sport',
        image: sport
    }
];

const bases = [
    {
        title: 'Stay hydrated',
        image: add
    },
    {
        title: 'Eat healthy',
        image: added
    },
    {
        title: 'Cook at home more',
        image: add
    },
    {
        title: 'try out a vegetarian diet',
        image: add
    },
    {
        title: 'Educate yourself about nutrition',
        image: add
    }
];

const Goals = goals.map((item) => {
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

const Bases = bases.map((item) => {
        return (
            <TouchableOpacity style={styles.basesItem}>
                <Text style={styles.basesText}>{item.title}</Text>
                <Image style={styles.basesImage}
                       source={item.image}/>
            </TouchableOpacity>
        );
    }
);

const FifthScroll = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.captions}>Set up some goals.</Text>
                <View style={styles.goals}>
                    {Goals}
                </View>
                {Bases}
            </View>
        </ScrollView>
    );
};

export default FifthScroll;
