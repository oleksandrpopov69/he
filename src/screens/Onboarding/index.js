/**
 * @format
 * @flow
 */

import React from 'react';
import { View, FlatList, ScrollView, TouchableOpacity, Text, Image } from "react-native";
import Discover from "../../containers/Onboarding/containers/Discover";
import FirstScroll from "../../containers/Onboarding/containers/FirstScroll";
import SecondScroll from "../../containers/Onboarding/containers/SecondScroll";
import ThirdScroll from "../../containers/Onboarding/containers/ThirdScroll";
import FourthScroll from "../../containers/Onboarding/containers/FourthScroll";
import FifthScroll from "../../containers/Onboarding/containers/FifthScroll";
import SixthScroll from "../../containers/Onboarding/containers/SixthScroll";
import SeventhScroll from "../../containers/Onboarding/containers/SeventhScroll";
import styles from "./styles";
import arrowRight from "../../assets/arrow-right.png";

const Screens = [
    Discover,
    FirstScroll,
    SecondScroll,
    ThirdScroll,
    FourthScroll,
    FifthScroll,
    SixthScroll,
    SeventhScroll
];

const Onboarding = () => {
    return (
        <ScrollView >
            <View style={styles.container} >
                <View style={styles.topNav}>
                    <View style={styles.ovals}>
                        <View style={styles.oval}/>
                        <View style={styles.oval}/>
                        <View style={styles.oval}/>
                        <View style={styles.oval}/>
                        <View style={styles.oval}/>
                        <View style={styles.oval}/>
                        <View style={styles.oval}/>
                        <View style={styles.oval}/>
                    </View>
                    <TouchableOpacity style={styles.skip}
                                      onPress={() => {}}>
                        <Text style={styles.text}>
                            Skip
                        </Text>
                        <Image source={arrowRight}
                               style={styles.arrow}/>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={Screens}
                    horizontal
                    pagingEnabled
                    renderItem={({ item: Screen }) => <Screen style={styles.screen}/> }
                />
            </View>
        </ScrollView>
    );
};

export default Onboarding;
