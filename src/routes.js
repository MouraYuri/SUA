import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

const MainmenuButtons = () => (
  <View style={{ flex: 1, backgroundColor: '#55b15e' }}>
    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', paddingTop: 10, paddingLeft: 20,
  paddingRight: 20}}>
      <TouchableOpacity onPress={()=> (alert('Lampada!'))}>

        <Image source={require('./icons/Lamp.png')} style={{width: 30, height: 45, resizeMode: 'center', marginTop: 15}}/>
      
      </TouchableOpacity>

      <Image source={require('./icons/Logo.png')} style={{width: 80, height: 80, resizeMode: 'center'}}/>

      <TouchableOpacity onPress={()=> (alert('Usuário!'))}>

        <Image source={require('./icons/Usuario.png')} style={{width: 45, height: 45, resizeMode: 'center', marginTop: 17}}/>
      
      </TouchableOpacity>

    </View>


    <View style={{ flex: 2, alignItems: 'center' }}>
      <TouchableOpacity onPress={() => Alert.alert("Horário!")}>

        <Image source={require('./icons/Horario.png')} style={styles.menuButtons} />

      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert("disciplinas!")}>

        <Image source={require('./icons/Disciplinas.png')} style={styles.menuButtons} />

      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert("Calendário!")}>

        <Image source={require('./icons/Calendario.png')} style={styles.menuButtons} />

      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert("Anotações!")}>

        <Image source={require('./icons/Anotações.png')} style={styles.menuButtons} />

      </TouchableOpacity>      
      <TouchableOpacity onPress={() => Alert.alert("Atividades!")}>

        <Image source={require('./icons/Atividades.png')} style={styles.menuButtons} />

      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert("Boletim!")}>

        <Image source={require('./icons/Boletim.png')} style={styles.menuButtons} />

      </TouchableOpacity>
    </View>
    <View style={{flex: 1}}/>
  </View>
  


)

const styles = StyleSheet.create({
  
  menuButtons: {
    resizeMode: 'center',
    width: 170,
    height: 50

  }

  });

  export default MainmenuButtons;