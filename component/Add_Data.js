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
import { useSelector, useDispatch } from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import Judul_atas from './Header.js';





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
    let [telp, settelp] = useState("");

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Mr', value: 'Mr' },
        { label: 'Mrs', value: 'Mrs' },
        { label: 'Miss', value: 'Miss' },
    ]);

    const [selectedId, setSelectedId] = useState();

   


    add_data = () => {

        const dataArray = [];

        let pemesan = {}

        pemesan.nama = nama,
        pemesan.gelar = gelar,
        pemesan.telp = telp,
        pemesan.email = email
        dataArray.push(pemesan);
        dispatch({ type: 'ADD_ORANG', inputValue: pemesan })

        navigation.goBack();
    }








    return (
        <SafeAreaView style={{ flexDirection: 'column', flex: 1, backgroundColor: 'white' }}>
            <Judul_atas judul_menu={'Add Data'} ></Judul_atas>

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
                            <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10, color: '#000000' }}>telp</Text>
                        </View>
                        <View style={{ flex: 3 }}>
                            <TextInput
                                value={telp}
                                keyboardType ={'number-pad'}
                                style={{
                                    borderBottomColor: '#000000',
                                    borderBottomWidth: 1, color: 'black', fontSize: 12,
                                }}
                                onChangeText={(text) => {
                                    settelp(text);
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
