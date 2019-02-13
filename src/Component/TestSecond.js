import React from "react";
import { View, Text, Button } from "react-native";

export default class TestSecond extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      title: 'Second Screen'
    })
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Second Screen</Text>
        </View>
      );
    }
  }