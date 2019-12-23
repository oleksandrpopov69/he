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
        justifyContent: 'flex-start'
    },
    logoContainer: {
        width: 315,
        marginBottom: 50,
        marginTop: 108,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    logo: {
        width: 42,
        height: 55,
    },
    welcome: {
        width: 315,
        height: 43,
        marginBottom: 30,
        ...text.b36('dark1'),
        fontWeight: 'bold'

    },
    welcomeText: {
        ...text.r18('grey'),
        width: 315,
        height: 175,
        marginBottom: 167,
    },
    href: {
        width: 126,
        height: 20,
        marginTop: 58,
        marginBottom: 68,
        ...text.r14('purple')
    }
});

export default styles;
