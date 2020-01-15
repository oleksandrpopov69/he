/**
 * @format
 * @flow
 */

import React, {useState} from 'react';
import { View, FlatList, ScrollView, TouchableOpacity, Text, Image } from "react-native";
import Discover from "../../containers/Onboarding/containers/Discover";
import FirstScroll from "../../containers/Onboarding/containers/FirstScroll";
import SecondScroll from "../../containers/Onboarding/containers/SecondScroll";
import ThirdScroll from "../../containers/Onboarding/containers/ThirdScroll";
import FourthScroll from "../../containers/Onboarding/containers/FourthScroll";
import FifthScroll from "../../containers/Onboarding/containers/FifthScroll";
import SixthScroll from "../../containers/Onboarding/containers/SixthScroll";
import SeventhScroll from "../../containers/Onboarding/containers/SeventhScroll";
import styles, {getOvalStyles} from "./styles";
import arrowRight from "../../assets/arrow-right.png";

const Onboarding = () => {
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

    const [pageNum, setPageNum] = useState(0)
    const Ovals = Screens.map((item, index) => {
        return ( <View style={getOvalStyles(index === pageNum)}/> )
    }) ;

    const onScrollEnd = (e) => {
        let contentOffset = e.nativeEvent.contentOffset;
        let viewSize = e.nativeEvent.layoutMeasurement;
        let pageNum = Math.floor(contentOffset.x / viewSize.width);
        setPageNum(pageNum);
    };

    return (
        <ScrollView >
            <View style={styles.container} >
                <View style={styles.topNav}>
                    <View style={styles.ovals}>
                        {Ovals}
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
                    onScroll={onScrollEnd}
                    renderItem={({ item: Screen }) => (<Screen style={styles.screen} />)}
                />
            </View>
        </ScrollView>
    );
};

export default Onboarding;
