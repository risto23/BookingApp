import React, { useState } from 'react'
import {
    View,
    Text,
    Alert,
    Dimensions,
    SafeAreaView,
    TextInput,
} from 'react-native';
import { Button } from '@rneui/themed';
import { useDispatch } from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import Judul_atas from './Header.js';





export default main_program = ({ navigation, route }) => {
    //VARIABEL AWAL

    const dispatch = useDispatch();


    let [gelar, setgelar] = useState(route.params.gelar);
    let [nama, setnama] = useState(route.params.nama);
    let [email, setemail] = useState(route.params.email);
    let [telp, settelp] = useState(route.params.telp);
    let [index, setindex] = useState(route.params.index);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Mr', value: 'Mr' },
        { label: 'Mrs', value: 'Mrs' },
        { label: 'Miss', value: 'Miss' },
    ]);

    const [selectedId, setSelectedId] = useState();



    edit_data = () => {


        if (nama != '' && gelar != '' && telp != '' && email != '') {
            const dataArray = [];
            let pemesan = {}

            pemesan.nama = nama,
                pemesan.gelar = gelar,
                pemesan.telp = telp,
                pemesan.email = email
            dataArray.push(pemesan);
            dispatch({ type: 'EDIT_DATA_SUCCESS', inputValue: pemesan, indeks: index })
            navigation.goBack();
        }


    }








    return (
        <SafeAreaView style={{ flexDirection: 'column', flex: 1, backgroundColor: 'white' }}>
            <Judul_atas judul_menu={'Detail Data'} ></Judul_atas>
            <View style={{ marginLeft: 10 }}>
                {/* <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 5, color: '#000000' }}>Detail Pesanan</Text>
                </View> */}

                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10, color: '#000000' }}>Gelar</Text>
                        </View>
                        <View style={{ flex: 3, marginLeft: 5 }}>
                            <TextInput
                                value={gelar}
                                editable={false}
                                style={{
                                    borderBottomColor: '#000000',
                                    borderBottomWidth: 1, color: 'black', fontSize: 12,
                                }}
                                onChangeText={(text) => {
                                    setgelar(text);
                                }}
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
                                editable={false}
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
                                editable={false}
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
                                editable={false}
                                keyboardType={'number-pad'}
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

                    
                </View>

            </View>


        </SafeAreaView>
    );
}
