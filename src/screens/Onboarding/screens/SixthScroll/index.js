/**
 * @format
 * @flow
 */

import React from 'react';
import {ScrollView, View, Text, TouchableOpacity} from "react-native";
import styles, {getItemStyles, getItemTextStyles} from "../SixthScroll/styles";
import Button from "../../../../components/Button";

const bases = [
    {
        title: 'Yes, send me reminders!',
        color: 'white1'
    },
    {
        title: 'No, thank you.',
        color: 'dark1'
    }
];

const Bases = bases.map((item) => {
    return (
        <TouchableOpacity style={getItemStyles(item.color)}>
            <Text style={getItemTextStyles(item.color)}>{item.title}</Text>
        </TouchableOpacity>
    );
});

const SixthScroll = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.captions}>
                    How's your memory?
                    Yeah, us either! Set your reminders then you won't miss stuff.
                </Text>
                {Bases}
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

export default SixthScroll;
