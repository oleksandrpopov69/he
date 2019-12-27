/**
 * @format
 * @flow
 */

import {StyleSheet} from 'react-native';
import theme from "../../theme";
const {text} = theme;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 812,
        backgroundColor: theme.getColor('white')
    },
    arrowContainer: {
        width: 315,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 72
    },
    arrow: {
        width: 24,
        height: 22
    },
    caption: {
        width: 315,
        height: 46,
        marginTop: 36,
        ...text.b36('dark1'),
        fontWeight: 'bold'
    },
    instructions: {
        width: 315,
        height: 75,
        marginTop: 20,
        marginBottom: 30,
        ...text.r18('grey'),
    },
    email: {
        marginBottom: 156
    }
});

export default styles;
