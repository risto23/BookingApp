import React from 'react'
import {
    View,
    TouchableOpacity
} from 'react-native';
import { Header, Icon } from "@rneui/base";
import { useNavigation } from '@react-navigation/native';

export default Header2 = ({ judul_menu }) => {
    const navigation = useNavigation();

    Beranda = () => {
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
