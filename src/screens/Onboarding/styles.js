/**
 * @format
 * @flow
 */
import theme from "../../theme";
import {Dimensions } from "react-native";
const {text} = theme;

import {StyleSheet} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
        container: {
            marginTop: 46
        },
        topNav: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 345,
            height: 20,
            marginBottom: 32,
            marginLeft: 30
        },
        ovals: {
            flexDirection: 'row'
        },
        oval: {
            width: 6,
            height: 6,
            borderRadius: 6,
            margin: 2,
            backgroundColor: theme.getColor('grey')
        },
        skip: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            ...text.r14('grey'),
            marginRight: 7,
        },
        arrow: {
            width: 14,
            height: 12
        },
        screen: {
            width: screenWidth,
            height: 615
        }
    },
);

export default styles;
