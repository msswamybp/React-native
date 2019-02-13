import React from "react";
import { View, Text, Button } from "react-native";

export default class TestFirst extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      title: 'First Screen'
    })
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>First Screen</Text>
          <Button 
        title="go to 2nd"
        onPress={() => {
          this.props.navigation.navigate('Second')
        }}/>
        </View>
      );
    }
  }
