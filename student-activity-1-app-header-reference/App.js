import * as React from 'react';
import { View } from 'react-native';
import SoundButton from './components/SoundButton'
import AppHeader from './components/AppHeader'
import HomeScreen from './screens/HomeScreen'
import BuzzerScreen from './screens/BuzzerScreen'
import { createAppContainer, createSwitchNavigator} from 'react-navigation';



export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppHeader/>
        <SoundButton />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  BuzzerScreen : BuzzerScreen
})

const AppContainer = createAppContainer(AppNavigator)

