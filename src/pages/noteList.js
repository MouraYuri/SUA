import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import getRealm from '../../services/realm';

state = {
    notes: []
}





const NoteList = ( props ) => {
    
    
    // useEffect(() => {
    //     async function loadNotes() {
    //         const realm = await getRealm();
    
    //         const data = realm.objects('NotesSchema');
    
    //         this.state.notes = data;
            
    //         alert(data.title);
    //     }
        
    //     loadNotes();
    
    
    // }, []);

        async function loadNotes() {
            const realm = await getRealm();
    
            const data = realm.objects('NotesSchema');
    
            this.state.notes = data;
            
            alert(data.title);
        }
        
        loadNotes();



    return (
    this.state.notes.map((notes, id) => (
        <View key={id} style={styles.noteStyle}>
            <TouchableOpacity onPress={() => props.navigation.navigate('EditNoteScreen', {
                id: notes.id,
                title: notes.title,
                date: notes.date,
                content: notes.content,
                fullNote: notes,
            })} style={{flex: 1}}>
                <View>
                    <Text style={{ fontSize: 20, color: 'black', alignSelf: 'center', fontWeight: 'bold' }}>{notes.title}</Text>
                    <Text style={{ fontSize: 15, color: 'black', marginLeft: 10 }}>{notes.date}</Text>
                    <Text style={{ fontSize: 15, color: 'black', marginLeft: 10 }}>{notes.content}</Text>
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