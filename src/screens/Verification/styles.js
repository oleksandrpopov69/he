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
    instruction: {
        width: 315,
        height: 259,
        borderRadius: 20,
        borderWidth: .5,
        borderColor: theme.getColor('grey'),
        marginTop: 30,
        backgroundColor: theme.getColor('white'),
        padding: 20
    },
    logoContainer: {
        width: 315
    },
    logo: {
        width: 24,
        height: 24
    },
    instructionCaption: {
        width: 241,
        height: 30,
        marginTop: 20,
        ...text.r24('dark1')
    },
    instructionText: {
        width: 275,
        height: 125,
        marginTop: 10,
        ...text.r18('grey')
    },
    codeWrapper: {
        width:315,
        height: 90,
        marginTop: 31,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    codeItemWrapper: {
        width: 72,
        height: 90,
        borderRadius: 12,
        borderWidth: .5,
        borderColor: theme.getColor('grey'),
        backgroundColor: theme.getColor('white'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    codeItem: {
        ...text.b36('dark1'),
        fontWeight: 'bold'
    },
    input: {
        width: 315,
        height: 90,
        borderRadius: 12,
        position: 'absolute',
        ...text.b36('dark1'),
        fontWeight: 'bold',
        opacity: 0

    },
    resendWrapper: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 315,
        marginBottom: 39
    },
    resend: {
        ...text.r14('purple')
    }
});

export default styles;
