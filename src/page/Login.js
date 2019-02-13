import React,{Component} from 'react'
import{View,Text,StyleSheet,StatusBar} from 'react-native'
import Logo from '../Component/Logo';
import Form from '../Component/Form';
//import Logo from '../Component/Logo';
export default class Login extends Component {
    render() {
        return (
           
                <View style={style.data1}>
                 <Text>hi shiva</Text>
                 <Logo/>
                 <Form type='Login'/>
           
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
        backgroundColor:'green',
        padding: 20,
        borderRadius: 16,
        fontSize: 20,
        textAlign: 'center'



    }
})
