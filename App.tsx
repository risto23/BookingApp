import React, { Component, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux'
import store from './redux/store';


// // LIST CALL DARI MENU
import Menu_Awal from './component/Menu_Awal';
import PanZoom from './component/PanZoom';
import Detail_Booking from './component/Detail_Booking';
import Add_Data from './component/Add_Data';
// import Menu_Utama from './component/Menu_Utama';
// import Menu_Layanan_24_Jam from './component/Layanan_24_Jam/Menu_Layanan_24_Jam.js';
// import Menu_Lokasi_Claim from './component/Lokasi_Claim/Menu_Lokasi_Claim.js';
// import Menu_Bengkel_Rekanan from './component/Bengkel_Rekanan/Menu_Bengkel_Rekanan.js';
// import Menu_Pengajuan_Klaim from './component/Pengajuan_Klaim/Menu_Pengajuan_Klaim';
// import Menu_Detail_Polis from './component/Detail_Polis/Menu_Detail_Polis';
// import Menu_Lonceng_Info from './component/Lonceng_Informasi/Menu_Lonceng_Info';
// import Menu_Promo from './component/Promo/Menu_Promo';
// import Status_Klaim from './component/Riwayat/Klaim/Status_Klaim';
// import Menu_Simulasi_Premi from './component/Simulasi_Premi/Menu_Simulasi_Premi';
// import Menu_Simulasi_Motor from './component/Simulasi_Premi/Motor/Menu_Simulasi_Motor';
// import Menu_Simulasi_Mobil from './component/Simulasi_Premi/Mobil/Menu_Simulasi_Mobil';
// import WebView_Fire from './component/Simulasi_Premi/Kebakaran/WebView_Fire';
// import Menu_Bantuan_Derek from './component/Bantuan_Derek/Menu_Bantuan_Derek';
// import Request_Permission_Location from './component/reuse/Request_Permission_Location';
// import PanZoom from './component/reuse/PanZoom';

// // sub Menu Polis Saya
// import Rincian_Polis_Saya from './component/Polis_Saya/Rincian_Polis/Rincian_Polis.js';
// import Tambah_Polis_ke_Apps from './component/Tambah_Polis/Menu_Tambah_Polis.js';
// // sub Menu Lokasi Claim
// import Detail_Lokasi_Claim from './component/Lokasi_Claim/Detail_Lokasi_Claim.js';


//autoresize gambar
const dimensions = Dimensions.get('window');
const splash_width = dimensions.width;
const splash_height = dimensions.height;

export default function app() {
  const [isloading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(!isloading)
    }, 2000);
    // setloading(!isloading)
  }, [])

  if (isloading) {
    return (
      <View style={styles.img_container}>
        <Text>Tessss</Text>
      </View>
    );
  }
  else {
    const Stack = createNativeStackNavigator();
    return (
      <Provider store={store}>
        
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
            initialRouteName="Menu_Awal"
          >
          <Stack.Screen name="Menu_Awal" component={Menu_Awal} />
          <Stack.Screen name="PanZoom" component={PanZoom} />
            <Stack.Screen name="Detail_Booking" component={Detail_Booking} />
            <Stack.Screen name="Add_Data" component={Add_Data} />
            

          </Stack.Navigator>

          {/* <Request_Permission_Location /> */}
        </NavigationContainer>

      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  img_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#e1c508"
  },
  img_container2: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#e1c508"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#e1e5eb',
    marginBottom: 5,
  },
  gambar: {
    width: '100%',
    height: '100%',
  },
  gambar2: {
    width: 300,
    height: 50
  },
  splash: {
    height: splash_height,
    width: splash_width
  },
});
