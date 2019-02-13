
import { createStackNavigator,createAppContainer } from 'react-navigation';
import Home from './Home';
import Friends from './Friends';

 const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Friends: { screen: Friends },
}, {
    initialRouteName: 'Home'
  });

  const container = createAppContainer(AppNavigator);
  export default container;   
  
  