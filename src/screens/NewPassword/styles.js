/**
 * @format
 * @flow
 */

import {StyleSheet} from 'react-native';
import theme from "../../theme";
const {shadows} = theme;
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
        height: 86,
        marginTop: 36,
        marginBottom: 29,
        ...text.b36('dark1'),
        fontWeight: 'bold'
    },
    password: {
        marginBottom: 219
    },
    modalView: {
        ...shadows.modal,
        height: 132,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    modalText: {
        ...text.r18('dark1'),
        height: 25,
        width: 265
    },
    modalImage: {
        width: 34,
        height: 34
    }
});

export default styles;
