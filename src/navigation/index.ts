import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Medications from '../screens/Medications/Medications';

const navigationOptions = {
  headerShown: false,
};

const MainNavigator = createStackNavigator({
  Medications: {
    screen: Medications,
    navigationOptions,
  },
});

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;
