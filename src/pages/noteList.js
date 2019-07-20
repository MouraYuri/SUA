import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';


const NoteList = ( props ) => {
    return (
    props.note.map((note, id) => (
        <View key={id} style={styles.noteStyle}>
            <TouchableOpacity onPress={() => props.navigation.navigate('EditNoteScreen')} style={{flex: 1}}>
                <View>
                    <Text style={{ fontSize: 20, color: 'black', alignSelf: 'center', fontWeight: 'bold' }}>{note.title}</Text>
                    <Text style={{ fontSize: 15, color: 'black', marginLeft: 10 }}>{note.date}</Text>
                    <Text style={{ fontSize: 15, color: 'black', marginLeft: 10 }}>{note.content}</Text>
                </View>
            </TouchableOpacity>
        </View>
    ))
)}

const styles = StyleSheet.create({
    noteStyle: {
        width: '80%', height: 160, backgroundColor: 'white', marginTop: 20, borderRadius: 10
    }




})


export default NoteList;