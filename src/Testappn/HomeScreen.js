import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class Detaills extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home'
  })
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Detaill</Text>
      </View>
    );
  }
}
class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home'
  })
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button 
        title="go to Detaill"
        onPress={() => {
          this.props.navigation.navigate('Detaills')
        }}/>
      </View>
    );
  }
}

const MainNavigator = createStackNavigator({
  Home: {
     screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
    title: 'Home',
       headerTitleStyle: { color: 'white' },
      headerStyle: { backgroundColor: 'green' }
    })
  },
  Detaills: {
    screen: Detaills,
   navigationOptions: ({ navigation }) => ({
      title: 'Detaills',
       headerTitleStyle: { color: 'white' },
       headerStyle: { backgroundColor: 'green' }
     })}
});
export default MainNavigator=createAppContainer(MainNavigator);

