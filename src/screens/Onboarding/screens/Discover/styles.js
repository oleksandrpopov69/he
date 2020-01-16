/**
 * @format
 * @flow
 */

import {StyleSheet} from 'react-native';
import theme, {shadows} from "../../../../theme";
const {text} = theme;

const styles = StyleSheet.create({
    container: {
        width: 350,
        justifyContent: 'center',
        marginRight: 30,
        marginLeft: 30
    },
    confirmation: {
        width: 350,
        height: 43,
        ...text.b36('dark1'),
        fontWeight: 'bold',
        marginBottom: 40
    },
    captions: {
        width: 350,
        height: 30,
        ...text.r24('dark1'),
        marginBottom: 10
    },
    infoCaption: {
        ...text.r24('dark1'),
        width: 350,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    info: {
        width: 20,
        height: 20
    },
    input: {
        width: 350,
        height: 54,
        borderRadius: 12,
        borderColor: theme.getColor('grey'),
        borderWidth: .5,
        backgroundColor: theme.getColor('white1'),
        paddingLeft: 20,
        ...text.r18('grey'),
        marginBottom: 40
    },
    maskContainer: {
        width: 350,
        marginTop: 10,
        marginBottom: 67,
        flexDirection: 'row',
        alignItems: 'center'
    },
    mask: {
        height: 64,
        width: 64,
        marginRight: 20
    },
    maskInputContainer: {
        width: 265,
        height: 54,
        borderColor: theme.getColor('grey'),
        borderWidth: .5,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    maskName: {
        width: 165,
        height: 25,
        ...text.r18('dark1'),
        marginLeft: 20
    },
    smallArrowDown: {
        width: 12,
        height: 7
    }
});

export default styles;
