/**
 * @format
 * @flow
 */

import {StyleSheet} from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
    container: {
        width: 315,
        height: 54,
        borderRadius: 12,
        borderColor: theme.getColor('grey'),
        borderWidth: .5,
        backgroundColor: theme.getColor('white'),
        justifyContent: 'center'
    },
    input: {
        justifyContent: 'center',
        marginLeft: 48,
        marginRight: 20,
        width: 247,
        fontSize: 18,
        fontWeight: 'normal',
        color: theme.getColor('grey')
    },
    logo: {
        position: 'absolute',
        marginLeft: 14,
        marginTop: 19,
        marginBottom: 18
    },
    viewImg: {
        position: 'absolute',
        right: 20,
        marginTop: 19,
        marginBottom: 18
    }
});

export default styles;

