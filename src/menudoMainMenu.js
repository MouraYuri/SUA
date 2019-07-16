import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const MenuDoMainMenu = () => (
    <View>
        <TouchableWithoutFeedback onPress={() => alert("Horário!")}>
            <View styles={{ flexDirection: 'row' }}>
                <Image source={require('../icons/clock.png')} style={{ width: 30, height: 30, tintColor: 'white' }} />
                <Text style={styles.horarioButton}>Horário</Text>
            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => alert("disciplinas!")}>
            <View>
                <Text style={styles.disciplinaButton}>Disciplinas</Text>
            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => alert("Calendário!")}>
            <View>
                <Text style={styles.disciplinaButton}>Calendário</Text>
            </View>
        </TouchableWithoutFeedback>
    </View>
)

const styles = StyleSheet.create({
  
    horarioButton: {
      fontSize: 37,
      color: 'white',
      //marginVertical: 110,
      //marginHorizontal: 110,
      height: 50,
      width: 125,
      //paddingTop: 10
    },
    disciplinaButton: {
      fontSize: 37,
      color: 'white',
      //marginVertical: 110,
      //marginHorizontal: 110,
      height: 50,
      width: 200,
      //paddingTop: 10
    }
  });

  export default MenuDoMainMenu;