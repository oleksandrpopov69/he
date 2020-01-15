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
    signUp: {
        width: 315,
        height: 46,
        marginTop: 36,
        marginBottom: 72,
        ...text.b36('dark1'),
        fontWeight: 'bold'
    },
    password: {
        marginTop: 20
    },
    agreement: {
        marginTop: 62,
        marginBottom: 62,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 315,
        ...text.r14('dark1')
    },
    terms: {
        ...text.r14('purple')
    },
    links: {
        marginTop: 60,
        flexDirection: 'row'
    },
    link: {
        borderRadius: 50,
        margin: 20,
        height: 50,
        width: 50
    },
    signInWrapper: {
        flexDirection: 'row',
    },
    member: {
        ...text.r14('grey')
    },
    signIn: {
        ...text.r14('dark1')
    },
    getCheckboxStyle: (isSelected?: boolean) => ({
        width: 20,
        height: 20,
        marginRight: 5,
        borderRadius: 5,
        borderWidth: .5,
        borderColor: isSelected ? theme.getColor('grey') : 'transparent',
    })
});

export default styles;
