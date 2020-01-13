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
        marginRight: 30
    },
    captions: {
        width: 350,
        height: 60,
        ...text.r24('dark1'),
        marginBottom: 30
    },
    buttons: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 350,
        marginBottom: 74
    },
    goals: {
        width: 350,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 50
    },
    item: {
        width: 90,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 24
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
        height: 36
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
    },
    basesItem: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 350,
        height: 60,
        borderRadius: 20,
        ...shadows.dark,
        borderColor: theme.getColor('grey'),
        borderWidth: .5,
        backgroundColor: theme.getColor('white1'),
        marginBottom: 20,
    },
    basesText: {
        ...text.r18('dark1'),
        width: 290,
        height: 25,
        paddingLeft: 20,
        paddingRight: 20
    },
    basesImage: {
        width: 36,
        height: 36
    }
});

export default styles;
