/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Platform } from 'react-native';
//import Form from './src/Component/Form';
//import Login from './src/page/Login'
//import TestStyle from './TestStyle';
import AppNavigator from './src/TestNavigation/AppNavigator'




const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',

});
export default class App extends React.Component {
  render() {
    return (
    // <TestStyle/>
   <AppNavigator/>
 // <Login/>
    
    );
  }
}
