import React, {Component} from 'react';
import {Alert, AppRegistry, Button, StyleSheet, View,Platform } from 'react-native';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  
    });
    export default class DO extends Component {
        _onPressButton() {
          Alert.alert('You tapped the button!')
        }
        render() {
          return (
            <View style={styles.container}>
            <View style={styles.buttonContainer}>
              <Button
                onPress={this._onPressButton}
                title="Press Me"
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                onPress={this._onPressButton}
                title="Press Me"
                color="#841584"
              />
            </View>
            <View style={styles.alternativeLayoutButtonContainer}>
              <Button
                onPress={this._onPressButton}
                title="This looks great!"
              />
              <Button
                onPress={this._onPressButton}
                title="OK!"
                color="#841584"
              />
            </View>
          </View>
          );
        }
      }
      const styles = StyleSheet.create({
        container: {
         flex: 1,
         justifyContent: 'center',
        },
        buttonContainer: {
          margin: 20
        },
        alternativeLayoutButtonContainer: {
          margin: 20,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }
      });
      
      
        