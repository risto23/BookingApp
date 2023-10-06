import React from 'react'
import {
    View,
    TouchableOpacity
} from 'react-native';
import { Header, Icon } from "@rneui/base";
import { faArrowCircleLeft, faBackspace, faBackward, faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

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

                        <FontAwesomeIcon
                            // size={24} color={'rgba(67, 37, 119,0.7)'}
                            size={40}
                            color={'#fff'}
                            icon={faArrowCircleLeft}
                        // style={styles.homeicon3}
                        />

                    </TouchableOpacity>
                </View>
            }

            centerContainerStyle={{}}
            centerComponent={{ text: judul_menu, style: { color: '#FFF', fontSize: 22, fontWeight: 'bold' } }}

            rightContainerStyle={{}}

        />
    );


}
