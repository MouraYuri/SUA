import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';

const EditNotes = ( {navigation}, props) => (
    <View style={ styles.backgroundApp }>
        <View style={styles.headerStyle}>
            <TouchableOpacity onPress={() => navigation.goBack()}>

                <Image source={require('../icons/Flecha.png')} style={styles.returnButton}/>

            </TouchableOpacity>
							<Image source={require('../icons/Notes.png')} style={{resizeMode: 'center', width: 30, height: 30, flex: 2, marginLeft: 40}} />            
            <TouchableOpacity>

                <Image source={require('../icons/Opções.png')} style={{resizeMode: 'center',
                width: 70, height: 70, tintColor: 'white', paddingLeft: 30, marginBottom: 10, marginLeft: 20, flex: 1}} />

            </TouchableOpacity>
        </View>
        
        <View style={{flex: 5, flexDirection: 'column', alignItems:'center', justifyContent: 'space-between'
                    ,}}>
            <Text style={{fontSize: 20, color: 'black', width: '80%', height: '10%', paddingTop: 20}}>Título</Text>
            <View style={{width: '80%', backgroundColor: 'white', height: '10%', borderRadius: 10}}>

            </View>
            
            <Text style={{fontSize: 20, color: 'black', width: '80%', height: '10%', paddingTop: 20}}>Data</Text>
            <View style={{ width: '80%', backgroundColor: 'white', height: '10%', borderRadius: 10 }}>

            </View>
            
            <Text style={{fontSize: 20, color: 'black', width: '80%', height: '10%', paddingTop: 20}}>Conteúdo</Text>
            <View style={{ width: '80%', backgroundColor: 'white', height: '50%', borderRadius: 10,
             }}>

            </View>



        </View>
        
    </View>
)


const styles = StyleSheet.create({

    returnButton: {
			resizeMode: 'center',
			width: 30, 
			height: 25, 
			marginTop: 20, 
			marginLeft: 15, 
			tintColor: 'white',
			marginBottom: 30,
			flex: 1
    },

    backgroundApp: {
    	flex: 1,
      backgroundColor: '#55b15e',
    },

    headerStyle: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '20%'
    }

})





export default EditNotes;