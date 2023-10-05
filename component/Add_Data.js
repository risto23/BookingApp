import React, { Component, useEffect, useState, version, useMemo } from 'react'
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
import { Button } from '@rneui/themed';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
// import RadioGroup from 'react-native-radio-buttons-group';
import DropDownPicker from 'react-native-dropdown-picker';




//autoresize gambar
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 18);
const imageWidth = dimensions.width;

export default main_program = ({ navigation, route }) => {
    //VARIABEL AWAL

     const dispatch = useDispatch();
    const data_pemesan = useSelector(state => state.reducer_pemesan);
    const data_tamu = useSelector(state => state.reducer_tamu);


    let [gelar, setgelar] = useState("");
    let [nama, setnama] = useState("");
    let [email, setemail] = useState("");
    let [phone, setphone] = useState("");

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Mr', value: 'Mr' },
        { label: 'Mrs', value: 'Mrs' },
        { label: 'Miss', value: 'Miss' },
    ]);

    const [selectedId, setSelectedId] = useState();

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
    //     //    let a= []
    //     //     a = []
    //     //     setdata_tamu(data_tamu => [...data_tamu,a]);
    //     //     let b = new Array()
    //     //     b = []
    //     //     setdata_pemesan([...data_pemesan, b]);

    //     console.log(data_tamu)

    // }, [data_tamu])


    add_data = () => {

        const dataArray = [];

        // Define the key and data
        // const key = 'name';
        // const data = 'John';

        // // Create an object with the key-value pair
        // const newData = {};
        // newData[key] = data;

        // Push the object into the array
        // dataArray.push(newData);
        let pemesan = {}

        pemesan.nama = nama,
        pemesan.gelar = gelar,
        pemesan.telp = phone,
        pemesan.email = email

        dataArray.push(pemesan);



        console.log('aa:' + pemesan)
        // let json_data = JSON.parse(pemesan);

        dispatch({ type: 'ADD_ORANG', inputValue: pemesan })

        navigation.goBack();
    }








    return (
        <SafeAreaView style={{ flexDirection: 'column', flex: 1, backgroundColor: 'white' }}>
            <View style={{ marginLeft: 10 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 5, color: '#000000' }}>Detail Pesanan</Text>
                </View>

                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{flex:1}}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10, color: '#000000' }}>Gelar</Text>
                        </View>
                        <View style={{ flex: 3 ,marginLeft: 5}}>
                            <DropDownPicker
                                open={open}
                                value={gelar}
                                items={items}
                                setOpen={setOpen}
                                setValue={setgelar}
                                setItems={setItems}
                                placeholder={'Gelar'}
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10, color: '#000000' }}>Nama</Text>
                        </View>
                        <View style={{ flex: 3 }}>
                            <TextInput
                                value={nama}
                                style={{
                                    borderBottomColor: '#000000',
                                    borderBottomWidth: 1, color: 'black', fontSize: 12,
                                }}
                                onChangeText={(text) => {
                                    setnama(text);
                                }}
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10, color: '#000000' }}>Email</Text>
                        </View>
                        <View style={{ flex: 3 }}>
                            <TextInput
                                value={email}
                                inputMode={'email'}
                                style={{
                                    borderBottomColor: '#000000',
                                    borderBottomWidth: 1, color: 'black', fontSize: 12,
                                }}
                                onChangeText={(text) => {
                                    setemail(text);
                                }}
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10, color: '#000000' }}>Phone</Text>
                        </View>
                        <View style={{ flex: 3 }}>
                            <TextInput
                                value={phone}
                                keyboardType ={'number-pad'}
                                style={{
                                    borderBottomColor: '#000000',
                                    borderBottomWidth: 1, color: 'black', fontSize: 12,
                                }}
                                onChangeText={(text) => {
                                    setphone(text);
                                }}
                            />
                        </View>
                    </View>

                    <View style={{marginTop: 10}}>
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
                            onPress={() => add_data()}
                        /> 
                    </View>
                </View>

            </View>


        </SafeAreaView>
    );
}
