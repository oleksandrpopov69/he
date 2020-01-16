/**
 * @format
 * @flow
 */
import theme, {shadows} from "../../theme";
import {Dimensions } from "react-native";
const {text} = theme;

import {StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
        container: {
            marginTop: 46
        },
        topNav: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 345,
            height: 20,
            marginBottom: 32,
            marginLeft: 30
        },
        ovals: {
            flexDirection: 'row'
        },
        skip: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            ...text.r14('grey'),
            marginRight: 7,
        },
        arrow: {
            width: 14,
            height: 12
        },
        screen: {
            width,
            height: 615
        },
        buttons: {
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: 74,
            zIndex: 1
        },
        modal: {
            ...shadows.modal,
            zIndex: 1,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderRadius: 30,
            backgroundColor: theme.getColor('white'),
            borderWidth: .3,
            borderColor: theme.getColor('grey')
        },
        content: {
            alignItems: 'center'
        },
        maskModalCaption: {
            height: 63,
            width: '70%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            borderBottomColor: theme.getColor('grey'),
            borderBottomWidth: .5
        },
        maskModalText: {
            width: 54,
            height: 20,
            ...text.r14('grey')
        },
        mask: {
            width: 80,
            height: 100,
            marginRight: 30,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 32
        },
        maskImage: {
            width: 80,
            height: 80
        },
        maskColor: {
            ...text.r14('grey'),
            width: 80,
            height: 20,
            textAlign: 'center'
        },
        maskModalCloseImage: {
            height: 20,
            width: 20
        },
        masks: {
            flexWrap: 'wrap',
            width: '100%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 30,
            marginRight: 30,
            marginLeft: 60
        }
    },
);

export const getOvalStyles = (active) => {
    return {
        width: 6,
        height: 6,
        borderRadius: 6,
        margin: 2,
        backgroundColor: theme.getColor(active ? 'purple' : 'grey')
    }};

export default styles;
