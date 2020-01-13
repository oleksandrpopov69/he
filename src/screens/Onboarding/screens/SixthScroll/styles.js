/**
 * @format
 * @flow
 */

import {StyleSheet} from 'react-native';
import theme, {shadows} from "../../../../theme";
const {text} = theme;

export const getItemStyles = (color) => {
    return {
        width: 350,
        height: 60,
        borderRadius: 20,
        ...shadows.dark,
        borderWidth: .5,
        borderColor: color === 'white1' ? theme.getColor('grey') : null,
        backgroundColor: theme.getColor(color),
        justifyContent: 'center',
        paddingLeft: 20,
        marginBottom: 20
    }
};

export const getItemTextStyles = (color) => {
    return {
        ...text.r18(color === 'white1' ? theme.getColor('dark1') : theme.getColor('white1'))
    }
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 30
    },
    captions: {
        width: 350,
        height: 120,
        ...text.r24('dark1'),
        marginBottom: 30
    },
    buttons: {
        marginTop: 240,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 350,
        marginBottom: 74
    }
});

export default styles;
