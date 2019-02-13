import React,{Component} from 'react'
import{View,Text,StyleSheet,TextInput} from 'react-native'
export default class Logo extends Component {
    render() {
        return (
           
                <View style={style.data1}>
               <Text>login</Text>
               <TextInput/>
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
