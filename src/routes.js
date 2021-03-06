import {createStackNavigator, createAppContainer} from 'react-navigation';

import Notes from './pages/notes';
import Mainmenu from './pages/mainMenu';
import Activities from './pages/activities';
import Calender from './pages/calender';
import Schedule from './pages/schedule';
import Subjects from './pages/subjects';
import Cardgrade from './pages/cardgrade';
import EditNotes from './pages/editNote';
import AddNote from './pages/addNote';

const Routes = createAppContainer(
  createStackNavigator({
    MainMenuScren: {
      screen: Mainmenu,
      navigationOptions: {
        header: null,
      }
    },
    NotesScreen: {
      screen: Notes,
      navigationOptions: {
        header: null,
      }
    },
    ActivitiesScreen: {
      screen: Activities,
      navigationOptions: {
        header: null,
      }
    },
    ScheduleScreen: {
      screen: Schedule,
      navigationOptions: {
        header: null,
      }
    },
    SubjectsScreen: {
      screen: Subjects,
      navigationOptions: {
        header: null,
      }
    },
    CalenderScreen: {
      screen: Calender,
      navigationOptions: {
        header: null,
      }
    },
    CardgradeScreen: {
      screen: Cardgrade,
      navigationOptions: {
        header: null,
      },
    },
    EditNoteScreen: {
      screen: EditNotes,
      navigationOptions: {
        header: null
      }
    },

    AddNoteScreen: {
      screen: AddNote,
      navigationOptions: {
        header: null
      }
    }

  })
)

export default Routes;
