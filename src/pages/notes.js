import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView
} from 'react-native';

import NoteList from './noteList'

state = {
    notes: [
        {id:1, title: 'first', date:'04/06/2000', content: 'first note'},
        {id:2, title: 'second', date: '30/08/1998', content: 'second note'},
        {id:2, title: 'second', date: '30/08/1998', content: 'second note'},
        {id:2, title: 'second', date: '30/08/1998', content: 'second note'},
        {id:2, title: 'second', date: '30/08/1998', content: 'second note'},
        {id:2, title: 'second', date: '30/08/1998', content: 'second note'},
    ]

}

addNote  = () => {
    this.state.notes.push({id: 3, title: 'thirty', date: '07/06/2019',
    content: 'now its gonna work!!'})
    alert("new note added!");
}


const Notes = ( {navigation}) => (
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
        <View style={{flex: 5, paddingBottom: 20}}>
            <ScrollView>
                <View style={{
                    flex: 5, alignItems: 'center',
                    flexDirection: 'column', justifyContent: 'space-between'
                }}>

                    <NoteList note={this.state.notes}/>

                </View>


                <View style={{ flex: 1, flexDirection: 'row-reverse', margin: 20 }}>

                    <TouchableOpacity onPress={() => this.addNote()}>

                        <Image source={require('../icons/Add.png')} style={{
                            resizeMode: 'center', width: 60, height: 60,
                        }} />

                    </TouchableOpacity>

                </View>
            </ScrollView>
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
    }

})





export default Notes;