import React,{Component} from 'react';
import {Button, Text, View,StyleSheet} from 'react-native';
import{createStackNavigator} from 'react-navigation';
class Login extends Component {
    render() {
        return (
            <View style={style.data1}>
            <Text style={style.container}>login1st</Text>
            <Button onPress={()=>this.props.navigation.navigate('Login')}title="login1st"></Button>
            </View>
        );
    }
}


class Login1 extends Component {
    render() {
        return (
            <View style={style.data1}>
            <Text style={style.container}>login2nd</Text>
            <Button onPress={()=>this.props.navigation.navigate('Login')}title="login2nd"></Button>
            </View>
        );
    }
}
const style = StyleSheet.create({
    data1: { justifyContent: "center", alignItems: "center" },
    container: {
        height: 70,
        width: 200,
        marginTop: 20,
        color: 'white',
        backgroundColor: 'green',
        padding: 20,
        borderRadius: 16,
        fontSize: 20,
        textAlign: 'center'
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10,
    },
    instruction:{
        textAlign:'center',
        color: 'white',

    }
})


export default createStackNavigator({
    home:Login,
    test:Login1
})
