import React, { Component, useEffect, useState, version } from 'react'
import {
    ScrollView,
    View,
    Text,
    Alert,
    TouchableOpacity,
    Image,
    Dimensions,
    ImageBackground,
    PermissionsAndroid,
    LogBox,
    SafeAreaView,
    TextInput,
    Modal,
    Linking
} from 'react-native';
import axios from 'axios';

//autoresize gambar
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 18);
const imageWidth = dimensions.width;

export default main_program = ({ navigation }) => {
    //VARIABEL AWAL


    // contoh axios pake get
    // axios.get(URL, { headers: { Authorization: AuthStr } })
    //     .then(response => {
    //         // If request is good...
    //         console.log(response.data);
    //     })
    //     .catch((error) => {
    //         console.log('error ' + error);
    //     });


    useEffect(async () => {
        get_data();
    }, [])

    get_data = async () => {
        // setloading_view(true);

        // let md5pass = md5(in_pass);
        // await generate_token_firebase();

        //TEMBAK API LOGIN
        await axios.get('https://parseapi.back4app.com/classes/hotel/bVonXoSUHK',
            {
                headers: 
                { 
                    "X-Parse-Application-Id": "Rr9ZKgR2t2f49g5ueLWriacIrvKy8Hwv7P87FSw3",
                    "X-Parse-REST-API-Key": "4C6gLjrbNGoym5m9j9mFQiDzXO5eETLxjUjY9Fzy"
                }
            })
            .then(async function (response) {
               console.log(response.data)
            })
            .catch(error => {
                console.log("ERROR !!!");
                Alert.alert("ERROR", response.data.message);
            });
    }
    

    return (
        <SafeAreaView style={{ flexDirection: 'column', flex: 1 }}>
            <Text>Halllooooo</Text>
        </SafeAreaView>
    );
}
