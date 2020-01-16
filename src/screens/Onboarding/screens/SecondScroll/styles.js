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
        marginBottom: 30
    },
    captions: {
        width: 350,
        height: 30,
        ...text.r24('dark1'),
        marginBottom: 30
    },
    graph: {
        marginBottom: 124
    },
    base: {
        width: 350,
        height: 204,
        borderRadius: 20,
        ...shadows.dark,
        backgroundColor: theme.getColor('white1')
    },
    baseText: {
        width: 275,
        height: 20,
        ...text.r14('dark1'),
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10
    },
    input: {
        marginLeft: 20,
        marginRight: 20,
        width: 275,
        ...text.r14('grey')
    }
});

export default styles;
