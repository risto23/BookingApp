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
import Edit_Data from './component/Edit_Data';


//autoresize gambar
const dimensions = Dimensions.get('window');
const splash_width = dimensions.width;
const splash_height = dimensions.height;

export default function app() {
  const [isloading, setloading] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setloading(!isloading)
  //   }, 2000);
  //   // setloading(!isloading)
  // }, [])

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
            <Stack.Screen name="Edit_Data" component={Edit_Data} />
            

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
