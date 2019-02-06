import { createStackNavigator, createAppContainer, NavigationContainer } from 'react-navigation'
import StartScreen from '../features/start-screen/containers/StartScreen'
import SecondScreen from '../features/second-screen/components/SecondScreen'

const AppNavigator: NavigationContainer = createStackNavigator(
  {
    Start: {
      screen: StartScreen,
    },
    SecondScreen: {
      screen: SecondScreen,
    },
  },
  {
    initialRouteName: 'Start',
  }
)

export default createAppContainer(AppNavigator)
