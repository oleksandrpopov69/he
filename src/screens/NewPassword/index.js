/**
 * @format
 * @flow
 */

import i18n from '../../locales';
import {ScrollView, View, Image, Text, TouchableOpacity} from 'react-native';
import arrowLeft from '../../assets/arrow-left.png'
import Input from "../../components/Input";
import Button from "../../components/Button";
import styles from './styles'
import React, { useRef } from 'react';
import { Modalize } from 'react-native-modalize';
import images from '../../assets/index';

const NewPasswordScreen = (props) => {
    const {navigate} = props.navigation;

    const state = {
        language: i18n.language,
    };

    const {language} = state;

    const modalRef = useRef<Modalize>(null);

    const onOpen = () => {
        const modal = modalRef.current;

        if (modal) {
            modal.open();
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.arrowContainer}
                                  onPress={() => navigate('Verification')}
                >
                    <Image style={styles.arrow}
                           source={arrowLeft}
                    />
                </TouchableOpacity>
                <Text style={styles.caption}>
                    Enter your new password
                </Text>
                <View style={styles.password}>
                    <Input type={'password'} text={'Password'}/>
                </View>
                <Button onPress={onOpen}
                        text={'Reset Password'}
                        color={'blue'}
                        size={'large'}
                        gradient={true}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                />
                <Modalize ref={modalRef}
                          handleStyle={{backgroundColor: 'transparent'}}
                          overlayStyle={{backgroundColor: 'transparent'}}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Your password is reset</Text>
                        <Image style={styles.modalImage}
                               source={images.bonus}/>
                    </View>

                </Modalize>
            </View>
        </ScrollView>
    )
};

export default NewPasswordScreen;
