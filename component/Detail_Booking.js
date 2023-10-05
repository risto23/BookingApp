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
import { Button } from '@rneui/themed';
import { Card } from "@rneui/base";
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useSelector } from 'react-redux';
import {  useIsFocused } from '@react-navigation/native';





//autoresize gambar
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 18);
const imageWidth = dimensions.width;

export default main_program = ({ navigation,route }) => {
    //VARIABEL AWAL
    let [data_hotel_room, setdata_hotel_room] = useState(route.params.data_hotel_room);
    let [data_hotel_detail, setdata_hotel_detail] = useState(route.params.data_hotel_detail);
    let [data_hotel_param, setdata_hotel_param] = useState(route.params.data_hotel_param);
    let [data_hotel_price, setdata_hotel_price] = useState(route.params.data_hotel_price);
    let [data_hotel_expired, setdata_hotel_expired] = useState(route.params.data_hotel_expired);
    let [data_hotel_fasilitas, setdata_hotel_fasilitas] = useState(route.params.data_hotel_fasilitas);

    const data_pemesan = useSelector(state => state.reducer_pemesan);
    const data_tamu = useSelector(state => state.reducer_tamu);

    // let [data_pemesan, setdata_pemesan] = useState([
    //     { gelar: 'Mr', nama: 'ccc', email: 't@m.c', telp: '453' }
    // ]);
    // let [data_tamu, setdata_tamu] = useState([
       
    // ]);
    // 'data_hotel_room' : data_hotel_room,
    // 'data_hotel_detail' : data_hotel_detail,
    // 'data_hotel_param' : data_hotel_param,
    // 'data_hotel_price' : data_hotel_price,
    // 'data_data_hotel_expired' : data_hotel_expired,
    // 'data_data_hotel_fasilitas' : data_hotel_fasilitas,  
    // let [nama_karyawan_req, setnama_karyawan_req] = useState(route.params.nama_karyawan);




    // contoh axios pake get
    // axios.get(URL, { headers: { Authorization: AuthStr } })
    //     .then(response => {
    //         // If request is good...
    //         console.log(response.data);
    //     })
    //     .catch((error) => {
    //         console.log('error ' + error);
    //     });


    // useEffect(async () => {
    // //    let a= []
    // //     a = []
    // //     setdata_tamu(data_tamu => [...data_tamu,a]);
    // //     let b = new Array()
    // //     b = []
    // //     setdata_pemesan([...data_pemesan, b]);

    //     console.log(data_tamu)
       
    // }, [data_tamu])


    // tess = () => {
    //     console.log(data_tamu)
    // }

    // const isFocused = useIsFocused();
    // useEffect(() => { isFocused && tess() }, [isFocused]);

   






    return (
        <SafeAreaView style={{ flexDirection: 'column', flex: 1, backgroundColor: 'white' }}>
            <View style={{marginLeft:10}}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 5, color: '#000000' }}>Detail Pesanan</Text>
                </View>

                <View>
                    <Card containerStyle={{ width: "100%", marginLeft: 0, backgroundColor: 'white' }} wrapperStyle={{}}>
                        <View>
                            <Card containerStyle={{ width: "100%", marginLeft: 0, backgroundColor: 'white' }} wrapperStyle={{}}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Image
                                            source={{
                                                uri: data_hotel_detail.images[0].url,
                                            }}
                                            style={{ marginTop: 0, marginBottom: 10, width: 100, height: 100 }}
                                        />
                                    </View>
                                    <View style={{ flex: 2, flexDirection: 'column' }}>
                                        <View>
                                            <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 5, color: '#000000' }}>{data_hotel_detail.hotel_name}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5, color: '#000000' }}>{data_hotel_room.room_name}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View>
                                                <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5, color: '#000000' }}>{data_hotel_param.total_room} Kamar</Text>
                                            </View>
                                            <View>
                                                <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5, color: '#000000', marginLeft: 5 }}>{data_hotel_param.guest_adult} Dewasa</Text>
                                            </View>
                                        </View>
                                    </View>

                                </View>
                            </Card>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5, color: '#000000' }}>Check-In    :</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5, color: '#000000' }}>{data_hotel_param.check_in}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5, color: '#000000' }}>Check-Out :</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5, color: '#000000' }}>{data_hotel_param.check_out}</Text>
                                </View>
                            </View>
                        </View>
                    </Card>
                </View>

                <View>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 5, marginLeft: 5, color: '#000000' }}>Detail Pemesan</Text>
                    <View style={{ marginLeft: 10 }}>
                                <View>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 5, marginLeft: 5, color: '#000000' }}>{data_pemesan.gelar} {data_pemesan.nama}</Text>
                            <Text style={{ fontSize: 11, marginLeft: 5, color: '#a7a9ab' }}>{data_pemesan.email}</Text>
                            <Text style={{ fontSize: 12, marginLeft: 5, color: '#a7a9ab' }}>{data_pemesan.telp}</Text>
                                </View>
                            
                        
                    </View>

                </View>

                <View>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 5, marginLeft: 5, color: '#000000' }}>Data Tamu</Text>
                    <View style={{ marginLeft: 10, marginTop: 10 }}>
                        {data_tamu.data_tamu.map((item) => {
                            return (
                                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                    <View style={{ flex: 1 }}>
                                        <FontAwesomeIcon
                                            size={20}
                                            color={'#000000'}
                                            icon={faUser}
                                        />

                                    </View>
                                    <View style={{ flex: 8 }}>
                                        <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 5, color: '#000000' }}>{item.gelar} {item.nama}</Text>
                                    </View>

                                </View>
                            )
                        })}
                    </View>

                    <View>
                        <Button
                            title="Add Data"
                            buttonStyle={{
                                backgroundColor: 'rgba(0, 230, 4, 0.86)',
                                borderRadius: 5,
                            }}
                            titleStyle={{ fontWeight: 'bold', fontSize: 14 }}
                            containerStyle={{
                                // marginHorizontal: 50,
                                height: 50,
                                width: '70%',
                                // marginVertical: 10,
                            }}
                            // onPress={() =>Alert.alert(
                            //     'CONFIRMATION',
                            //     'Apakah anda yakin?',
                            //     [
                            //     {
                            //         text: 'OK',
                            //         onPress: () => {
                            //             tombol_reject()

                            //         }
                            //     },
                            //     {
                            //         text: 'CANCEL',
                            //     },
                            //     ],

                            //     {
                            //     cancelable: true
                            //     }
                            //     )

                            //     }
                            onPress={() => navigation.navigate('Add_Data')}
                        /> 
                    </View>

                </View>

            </View>

            
        </SafeAreaView>
    );
}
