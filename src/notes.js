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

const Notes = ( {navigation}) => (
    <View style={{ flex: 1, backgroundColor: '#55b15e' }}>
        <View style={styles.headerStyle}>
            <TouchableOpacity onPress={() => navigation.goBack()}>

                <Image source={require('./icons/Return.png')} style={styles.returnButton}/>

            </TouchableOpacity>

            <Text style={{width: 60, height: 60, color: 'white'}}>Anotações</Text>
            
            <TouchableOpacity>

                <Image source={require('./icons/MoreOptions.png')} style={{resizeMode: 'center',
                width: 70, height: 70, tintColor: 'white', paddingLeft: 30, marginBottom: 10, marginLeft: 20}} />

            </TouchableOpacity>
        </View>

        <View style={{flex: 5}}>

        </View>

        <View style={{ flex: 1, flexDirection:'row-reverse', margin: 20 }}>

            <TouchableOpacity>

                <Image source={require('./icons/PlusIcon.png')} style={{
                    resizeMode: 'center', width: 40, height: 60, tintColor: 'white',

                }} />

            </TouchableOpacity>

        </View>





    </View>
)


const styles = StyleSheet.create({

    returnButton: {
    resizeMode: 'center',
    width: 30, height: 25, 
    marginTop: 20, 
    marginLeft: 15, 
    tintColor: 'white',
    marginBottom: 30
    },

    headerStyle: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'

    }

})


export default Notes;