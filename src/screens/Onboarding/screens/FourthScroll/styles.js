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
        marginRight: 30,
        marginBottom: 360
    },
    captions: {
        width: 350,
        height: 60,
        ...text.r24('dark1'),
        marginBottom: 30
    },
    activity: {
        width: 350,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    item: {
        width: 90,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        backgroundColor: theme.getColor('grey'),
        width: 89,
        height: 89,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    image: {
        width: 36,
        height: 36,

    },
    text: {
        textAlign: 'center',
        width: 89,
        height: 32,
        marginTop: 10,
        paddingTop: 8,
        borderRadius: 12,
        borderColor: theme.getColor('grey'),
        backgroundColor: theme.getColor('white1'),
        ...shadows.dark,
        ...text.r12('grey')
    }
});

export default styles;
