/**
 * @format
 * @flow
 */

import React, {useState, useRef} from 'react';
import {View, FlatList, ScrollView, TouchableOpacity, Text, Image, Dimensions} from "react-native";
import Discover from "../../containers/Onboarding/containers/Discover";
import FirstScroll from "../../containers/Onboarding/containers/FirstScroll";
import SecondScroll from "../../containers/Onboarding/containers/SecondScroll";
import ThirdScroll from "../../containers/Onboarding/containers/ThirdScroll";
import FourthScroll from "../../containers/Onboarding/containers/FourthScroll";
import FifthScroll from "../../containers/Onboarding/containers/FifthScroll";
import SixthScroll from "../../containers/Onboarding/containers/SixthScroll";
import SeventhScroll from "../../containers/Onboarding/containers/SeventhScroll";
import styles, {getOvalStyles} from "./styles";
import arrowRight from "../../assets/arrow-right.png";
import Button from "../../components/Button";
import {Modalize} from "react-native-modalize";
import images from "../../assets";

const {close, medium, medium2, medium3, medium4, medium5, medium6} = images;

const Onboarding = () => {
    const {width} = Dimensions.get('window');
    const flatListRef = useRef(null);
    const Screens = [
        Discover,
        FirstScroll,
        SecondScroll,
        ThirdScroll,
        FourthScroll,
        FifthScroll,
        SixthScroll,
        SeventhScroll
    ];

    const [pageNum, setPageNum] = useState(0);

    const Ovals = Screens.map((item, index) => {
        return ( <View style={getOvalStyles(index <= pageNum)}/> )
    }) ;

    const onScrollEnd = (e) => {
        let contentOffset = e.nativeEvent.contentOffset;
        let viewSize = e.nativeEvent.layoutMeasurement;
        let pageNum = Math.round(contentOffset.x / viewSize.width);
        setPageNum(pageNum);
    };

    const goToNextScreen = () => {
        flatListRef.current.scrollToOffset({
            offset: pageNum * width + width
        });
    };

    const goToPreviousScreen = () => {
        flatListRef.current.scrollToOffset({
            offset: pageNum * width - width
        });
    };

    const modalRef = useRef<Modalize>(null);
    let modalType = '';
    const openModal = (type) => {
        modalType = type;
        const modal = modalRef.current;
        if (modal) {
            modal.open();
        }
    };

    const closeModal = (type) => {
        modalType = type;
        const modal = modalRef.current;
        if (modal) {
            modal.close();
        }
    };

    const masks = [
        {
            title: 'Green',
            image: medium
        },
        {
            title: 'Red',
            image: medium2
        },
        {
            title: 'Purple',
            image: medium3
        },
        {
            title: 'Orange',
            image: medium4
        },
        {
            title: 'Blue',
            image: medium5
        },
        {
            title: 'Black',
            image: medium6
        }
    ];

    const [mask, setMask] = useState({
        title: 'Green',
        image: medium
    });

    const onChooseMask = (mask) => {
        setMask({
            title: mask.title,
            image: mask.image
        });
        closeModal();
    };

    const Masks = masks.map((item) => {
        return (
            <View style={styles.mask}>
                <TouchableOpacity onPress={() => onChooseMask(item)}>
                    <Image source={item.image}
                           style={styles.maskImage}/>
                    <Text style={styles.maskColor}>{item.title}</Text>
                </TouchableOpacity>
            </View>
        )
    });

    return (
        <ScrollView >
            <View style={styles.container} >
                <View style={styles.topNav}>
                    <View style={styles.ovals}>
                        {Ovals}
                    </View>
                    <TouchableOpacity style={styles.skip}
                                      onPress={() => { flatListRef.current.scrollToEnd({animated: true})} }>
                        <Text style={styles.text}>
                            Skip
                        </Text>
                        <Image source={arrowRight}
                               style={styles.arrow}/>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={Screens}
                    ref={flatListRef}
                    horizontal
                    pagingEnabled
                    onScroll={onScrollEnd}
                    renderItem={
                        ({ item: Screen }) => (
                            <Screen style={styles.screen}
                                    openMaskModal={openModal}
                                    closeModal={closeModal}
                                    mask={mask}/>)
                    }
                />
                { (pageNum !== 7) &&
                <View style={styles.buttons}>
                    {(pageNum > 1) &&
                    <Button text={'Back'}
                            onPress={goToPreviousScreen}
                            color={'blue'}
                            size={'middle'}
                            shadow={'light'}
                            outline
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 0}}
                    />}
                    <View style={{width: '10%'}}/>
                    <Button text={'Next'}
                            onPress={goToNextScreen}
                            color={'blue'}
                            size={'middle'}
                            shadow={'light'}
                            gradient
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 0}}
                    />
                </View>}

                <Modalize ref={modalRef}
                          modalHeight={360}
                          modalStyle={styles.modal}
                          overlayStyle={{backgroundColor: 'transparent'}}
                          withHandle={false}
                >
                    <View style={styles.content}>
                        <View style={styles.maskModalCaption}>
                            <Text style={styles.maskModalText}>Avatars</Text>
                            <TouchableOpacity onPress={closeModal}>
                                <Image source={close}
                                       style={styles.maskModalCloseImage}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.masks}>
                            {Masks}
                        </View>
                    </View>
                </Modalize>

            </View>
        </ScrollView>
    );
};

export default Onboarding;
