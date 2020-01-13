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
        height: 86,
        ...text.b36('dark1'),
        marginBottom: 30,
        fontWeight: 'bold'
    },
    imageContainer: {
        marginTop: 149,
        marginBottom: 124,
        alignItems: 'center'
    },
    image: {
        width: 166,
        height: 203
    }
});

export default styles;
