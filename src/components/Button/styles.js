/**
 * @format
 * @flow
 */

import theme from "../../theme";

const {text} = theme;
const {shadows} = theme;

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
    small: {
        width: '20%',
        height: 32,
        borderRadius: 6
    }
};

const colors = {
    blue: theme.getColor('purple'),
    white: theme.getColor('white1'),
    grey: theme.getColor('white2'),
    dark: theme.getColor('dark1'),
    orange: theme.getColor('orange2')
};

const viewStyles = {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
};

const fontSizes = {
    large: {
        ...text.b18('white')
    },
    middle: {
        ...text.b18('white')
    },
    small: {
        ...text.b14('white')
    }
};

export const gradientColors = {
    blue: ['#5f59f7', '#6592fd'],
    orange: ['#f75d59', '#ffbd6d']
};

export const getButtonStyles = (size, shadow) => {
    return {
        justifyContent: 'center',
        alignItems: 'center',
        ...sizes[size],
        ...shadows[shadow]
    }
};

export const getBackgroundStyles = (size, gradient, color) => {
    if (gradient) {
        return {
            ...viewStyles,
            position: 'absolute',
            borderRadius: sizes[size].borderRadius
        }
    }
    return {
        ...viewStyles,
        position: 'absolute',
        borderRadius: sizes[size].borderRadius,
        backgroundColor: colors[color]
    }
};

export const getViewStyles = (size, color, outline, gradient) => {
    if (gradient) {
        return {
            ...viewStyles,
            height: '95%',
            width: '99%',
            borderRadius: sizes[size].borderRadius,
            backgroundColor: outline ? colors.white : 'transparent'
        }
    }
    return {
        ...viewStyles,
        borderRadius: sizes[size].borderRadius,
        backgroundColor: outline ? colors.white : colors[color],
        borderColor: outline ? colors[color] : 'transparent',
        borderWidth: outline ? 1 : 0
    }
};

export const getTextStyles = (size, color, outline) => {
    return {
        ...fontSizes[size],
        color: outline ? colors[color] : colors.white,
        fontWeight: 'bold'
    }
};





