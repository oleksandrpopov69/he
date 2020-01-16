/**
 * @format
 * @flow
 */

import {StyleSheet} from 'react-native';
import theme, {shadows} from "../../../../theme";
const {text} = theme;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginLeft: 30,
        marginBottom: 30,
        marginRight: 30
    },
    captions: {
        width: 350,
        height: 60,
        ...text.r24('dark1'),
        marginBottom: 30
    },
    emotions: {
        width: 350,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 34
    },
    item: {
        width: 90,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24
    },
    image: {
        width: 36,
        height: 36
    },
    text: {
        textAlign: 'center',
        width: 89,
        height: 32,
        marginTop: 8,
        paddingTop: 8,
        borderRadius: 12,
        borderColor: theme.getColor('grey'),
        backgroundColor: theme.getColor('white1'),
        ...shadows.dark,
        ...text.r12('grey')
    },
    base: {
        width: 350,
        height: 204,
        borderRadius: 20,
        ...shadows.dark,
        backgroundColor: theme.getColor('white1'),
        alignItems: 'center'
    },
    baseText: {
        width: 275,
        height: 40,
        ...text.r14('dark1'),
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 24
    },
    profileImage: {
        width: 36,
        height: 36,
        marginBottom: 25
    },
    tapText: {
        width: 191,
        height: 20,
        ...text.r14('grey'),
    }
});

export default styles;
