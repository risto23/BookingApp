import react from "react";
import React, { useState, Component, useEffect } from "react";
import {
    View, Text, Image, StyleSheet,
    useWindowDimensions, TextInput,
    Button, Platform, Alert, TouchableOpacity,
    SafeAreaView, PermissionsAndroid, Picker, ScrollView, Pressable, Modal, Linking
    , Dimensions
} from "react-native";



function Pan_Zoom({ navigation, route }) {

    let data_redux = useSelector((state) => state)
    let data_sebelah = route.params;
    let link = (data_sebelah.link).toString();
    let sumber = data_sebelah.sumber
    let gambar_dimensi_height = (Dimensions.get('window').height) * 0.8


    console.log("data sebelah", data_sebelah)
    console.log("link", link)
    return (
        <View style={{ flexDirection: "column", marginTop: 20 }}>
            <View>
                <TouchableOpacity
                    onPress={() => { navigation.goBack() }}
                >
                    <FontAwesomeIcon

                        icon={faArrowAltCircleLeft}
                        size={40}

                    />
                </TouchableOpacity>
            </View>
            {/* <ImageZoom
                cropWidth={Dimensions.get('screen').width}
                cropHeight={gambar_dimensi_height}
                imageWidth={Dimensions.get('screen').width}
                imageHeight={gambar_dimensi_height}
                pinchToZoom={true}
                panToMove={true}
                style={{ borderWidth: 4, width: "100%", height: "100%" }}
            >
                <Image style={{ width: Dimensions.get('window').width, height: gambar_dimensi_height, resizeMode: "contain" }}
                    source={{ uri: data_sebelah.link }} />
            </ImageZoom> */}

            <Modal visible={true} transparent={true}>
                <ImageViewer imageUrls={data_sebelah.link} />
            </Modal>

            {sumber == 'db' ? (
                <TouchableOpacity
                    onPress={() => { Linking.openURL(link) }}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 20,
                            color: "blue",
                            marginTop: 10,
                            textDecorationLine: 'underline'
                        }}
                    >
                        Download Gambar
                    </Text>
                </TouchableOpacity>
            )
                :
                null
            }


        </View>
    )

}


export default Pan_Zoom;