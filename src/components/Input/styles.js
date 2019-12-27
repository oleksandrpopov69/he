/**
 * @format
 * @flow
 */

import theme from '../../theme';
const {text} = theme;

const viewStyles = {
    width: '75%',
    height: 54,
    borderRadius: 12,
    borderColor: theme.getColor('grey'),
    borderWidth: .5,
    backgroundColor: theme.getColor('white'),
    justifyContent: 'center'
};

const typeImageStyles = {
    position: 'absolute',
    marginLeft: 14,
    marginTop: 19,
    marginBottom: 18
};

export const getViewStyles = (type, isFocused) => {
    if (isFocused) {
        return {
            ...viewStyles,
            borderColor: type === 'email' ? theme.getColor('purple') : theme.getColor('orange2')
        }
    } return {
        ...viewStyles
    }
};

export const getInputStyles = () => {
    return {
        justifyContent: 'center',
        marginLeft: 48,
        marginRight: 20,
        width: 247,
        ...text.r18('grey')
    }
};

export const getTypeImageStyles = () => {
    return {
        ...typeImageStyles
    }
};

export const getTypeImageColor = (type, isFocused) => {
    if (isFocused) {
        return type === 'email' ? theme.getColor('purple') : theme.getColor('orange2');
    } return theme.getColor('grey')
};

export const getViewImageStyles = () => {
    return {
        position: 'absolute',
        right: 20,
        marginTop: 19,
        marginBottom: 18
    }
};

export const getErrorsStyles = () => {
    return {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        top: '100%',
        ...text.r12('orange2')
    }
};

export const getInputLabelStyles = (type, focusAnim) => {
    return {
        position: 'absolute',
        padding: 4,
        backgroundColor: theme.getColor('white'),
        bottom: focusAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [12, 43]
        }),
        left: focusAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [45, 10]
        }),
        fontSize: focusAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [18, 12]
        }),
        color: focusAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [theme.getColor('grey'), theme.getColor(type === 'email' ? 'purple' : 'orange2')],
        })
    }
};
