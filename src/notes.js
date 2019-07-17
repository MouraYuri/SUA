import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Text
} from 'react-native';

import {createStackNavigator, createAppContainer} from 'react-navigation';

const Notes = () => (
    <View style={{ flex: 1, backgroundColor: '#55b15e' }}>
        <View styles={styles.headerStyle}>
            <TouchableOpacity>

                <Image source={require('./icons/Return.png')} style={styles.returnButton}/>

            </TouchableOpacity>

            <Text>Anotações</Text>
            
            <TouchableOpacity>

                <Image source={require('./icons/MoreOptions.png')} style={{resizeMode: 'center',
                width: 90, height: 90, tintColor: 'white'}} />

            </TouchableOpacity>
        </View>

        <View style={{flex: 2}}>


        </View>






    </View>
)

const styles = StyleSheet.create({

    returnButton: {
    resizeMode: 'center',
    width: 30, height: 40, 
    marginTop: 20, 
    marginLeft: 15, 
    tintColor: 'white'
    },

    headerStyle: {
        flexDirection: 'row',
        flex: 1,
        //paddingTop: 20,
        justifyContent: 'space-between'

    }

})


export default Notes;