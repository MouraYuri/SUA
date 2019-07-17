import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  AppRegistry
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MainMenu from './src/mainMenu';
import Notes from './src/notes';

const App = () => {
  return (
    <View style={{ backgroundColor: '#55b15e', flex: 1 }}>
      <Notes/>
    </View>
  );
};



export default App;


