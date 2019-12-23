/**
 * @format
 * @flow
 */

import theme from "../../theme";
const {text} = theme;

const sizes = {
    large: {
        width: '75%',
        height: 56,
        borderRadius: 14
    },
    middle: {
        width: '40%',
        height: 56,
        borderRadius: 14
    },
    short: {
        width: '20%',
        height: 32,
        borderRadius: 6
    }
};

const colors = {
    blue: theme.getColor('blue1'),
    white: theme.getColor('white1'),
    grey: theme.getColor('white2'),
    dark: theme.getColor('dark1'),
    orange: theme.getColor('orange2')
};

const fontSizes = {
    large: {
        ...text.b18('white')
    },
    middle: {
        ...text.b18('white')
    },
    short: {
        ...text.b14('white')
    }
};

const styles = {
    justifyContent: 'center',
    alignItems: 'center'
};

export const getButtonStyles = (size, color, outline) => {
    if (outline) {
        return {
            ...styles,
            ...sizes[size],
            backgroundColor: colors.white,
            borderColor: colors[color],
            borderWidth: 1
        }
    }
    return {
        ...styles,
        ...sizes[size],
        backgroundColor: colors[color],
    }
};

export const getTextStyles = (size, color, outline) => {
    if (outline) {
        return {
            ...fontSizes[size],
            color: colors[color]
        }
    }
    return {
        ...fontSizes[size],
        color: colors.white
    }
};





