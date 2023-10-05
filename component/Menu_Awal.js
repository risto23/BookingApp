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
    Linking,
    FlatList
} from 'react-native';
import axios from 'axios';
import { Card } from "@rneui/base";
import Judul_atas from './Header_Menu.js';



//autoresize gambar
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 18);
const imageWidth = dimensions.width;

export default main_program = ({ navigation }) => {
    //VARIABEL AWAL
    let [json_hotel_room, setjson_hotel_room] = useState("");
    let [json_hotel_detail, setjson_hotel_detail] = useState("");
    let [json_hotel_param, setjson_hotel_param] = useState("");
    let [json_hotel_price, setjson_hotel_price] = useState("");
    let [hotel_expired, sethotel_expired] = useState("");
    let [hotel_fasilitas, sethotel_fasilitas] = useState([]);



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
                // console.log(response.data.chosen_hotel.data.get_chosen_hotel.chosen_hotel_room)
                setjson_hotel_room(response.data.chosen_hotel.data.get_chosen_hotel.chosen_hotel_room)
                setjson_hotel_detail(response.data.chosen_hotel.data.get_chosen_hotel.chosen_hotel_detail)
                setjson_hotel_param(response.data.chosen_hotel.data.get_chosen_hotel.chosen_hotel_params)
                setjson_hotel_price(response.data.chosen_hotel.data.get_chosen_hotel.chosen_hotel_prices)
                sethotel_expired(response.data.chosen_hotel.data.get_chosen_hotel.chosen_hotel_expired)
                sethotel_fasilitas(response.data.chosen_hotel.data.get_chosen_hotel.chosen_hotel_detail.facilities)
                // console.log(json_view_data.chosen_hotel_room.meal)
            })
    }

    renderItem = ({ item }) => (
        <View style={{ marginLeft: 5 }}>
                <ScrollView horizontal={true}>
                        <Image
                            source={{
                                uri: item.thumbnail,
                            }}
                            style={{ marginTop: 20, marginBottom: 10, width: 100, height: 100 }}
                        />
                </ScrollView>
        </View>
    )


   

    

    return (
        <SafeAreaView style={{ flexDirection: 'column', flex: 1 }}>
            <Judul_atas judul_menu={'Menu Awal'} ></Judul_atas>

            <View style={{justifyContent: 'center', alignItems:'center'}}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 5, color: '#000000' }}>Pesanan Saya</Text>
            </View>
            <View>
                <TouchableOpacity
                    activeOpacity={0.3}
                    style={{ marginRight: 5 }}
                    onPress={() => {
                        navigation.navigate("Detail_Booking", {
                        'data_hotel_room' : json_hotel_room, 
                        'data_hotel_detail' : json_hotel_detail ,  
                        'data_hotel_param' : json_hotel_param ,   
                        'data_hotel_price' : json_hotel_price ,   
                        'data_hotel_expired' : hotel_expired ,      
                        'data_hotel_fasilitas' : hotel_fasilitas,     
                            
                        })
                        console.log('ssss')
                    }}
                >

                    <Card containerStyle={{ width: "100%", marginLeft: 0, backgroundColor: 'white' }} wrapperStyle={{}}>
                        <View>
                            <FlatList
                                horizontal={true}
                                data={json_hotel_detail.images}
                                // ItemSeparatorComponent = {FlatListItemSeparator}
                                renderItem={renderItem}
                            // ListEmptyComponent={EmptyListMessage}
                            />
                        </View>
                        <View>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 5, color: '#000000' }}>{json_hotel_detail.hotel_name}</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5, color: '#000000' }}>{json_hotel_detail.address}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <ScrollView horizontal={true}>
                                {hotel_fasilitas.map((item) =>
                                    <View style={{ marginRight: 5, borderWidth: 1, borderRadius: 10, backgroundColor: '#e8e8e8' }}>
                                        <View style={{ padding: 5 }}>
                                            <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5, color: '#000000' }}>{item}</Text>
                                        </View>
                                    </View>
                                )}
                            </ScrollView>

                        </View>



                    </Card>
                </TouchableOpacity>

                
            </View>
        </SafeAreaView>
    );
}
