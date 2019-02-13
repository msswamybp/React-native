import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';
export default class ButtonBasics1 extends Component {
    _onPressButton() {
        alert('You pressed the button! ')
      }
    render(){
        return(<View style={
       
            {
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                marginTop:40
            }

        }> 
        <View style={{backgroundColor:'green',
        padding:10,
        borderRadius:16,
        shadowRadius:20,
        shadowOpacity:.5,
        height:20,
        
        
    }}>
       <Button
            
            title="Press Me"
            color='green'
            onPress={this._onPressButton}
            
          />
        </View>
        </View>
         
        );}
}
