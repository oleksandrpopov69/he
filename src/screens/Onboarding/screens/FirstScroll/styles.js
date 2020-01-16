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
        marginLeft: 30,
        marginRight: 30
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
        marginBottom: 30
    },
    itemsContainer: {
        marginBottom: 235,
        height: 185
    },
    item: {
        width: 150,
        height: 180,
        borderRadius: 20,
        ...shadows.dark,
        backgroundColor: theme.getColor('white1'),
        marginRight: 15
    },
    image: {
        width: 150,
        height: 131,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginBottom: 14
    },
    text: {
        ...text.r18('dark1'),
        width: 110,
        height: 25,
        marginBottom: 14,
        marginLeft: 20,
        marginRight: 20
    },
    itemButton: {
        position: 'absolute',
        top: 115,
        left: 105
    },
    buttonImage: {
        width: 36,
        height: 36
    }
});

export default styles;
