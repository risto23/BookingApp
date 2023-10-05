import React, { Component, useEffect, useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button,
    Alert,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    Dimensions,
    ImageBackground,
    Linking,
    BackHandler,
    PermissionsAndroid
} from 'react-native';
import { Header, Icon } from "@rneui/base";


import { faArrowCircleLeft, faBackspace, faBackward, faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default Header2 = ({ judul_menu }) => {
    const navigation = useNavigation();

    Beranda = () => {
        // Alert.alert(this.state.nip)
        // navigation.replace("Menu_Utama");
        navigation.goBack();
    }


    return (
        <Header
            backgroundImageStyle={{}}
            barStyle="default"
            containerStyle={{ backgroundColor: '#337aff' }}
            linearGradientProps={{}}
            placement="center"
            statusBarProps={{}}

            leftContainerStyle={{}}
            leftComponent={
                <View>
                    <TouchableOpacity
                        style={{ marginLeft: 0 }}
                        onPress={() => this.Beranda()}
                    >

                        <Icon name="arrow-back" color="white" />

                    </TouchableOpacity>
                </View>
            }

            centerContainerStyle={{}}
            centerComponent={{ text: judul_menu, style: { color: '#FFF', fontSize: 22, fontWeight: 'bold' } }}

            rightContainerStyle={{}}

        />
    );


}
