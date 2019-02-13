import React,{Component} from 'react'
import{View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
export default class Form extends Component {
    render() {
        return (
           
                <View style={style.data1}>
             <Text>in form</Text>
               <TextInput style={style.inputBox}
               underlineColorAndroid='rgba(0,0,0,0)'  
               placeholder="Email"
               placeholderTextColor="#ffffff"/>
                 <TextInput style={style.inputBox}
               underlineColorAndroid='rgba(0,0,0,0)'  
               placeholder="password"
               secureTextEntry={true}
               placeholderTextColor="#ffffff"/>
               <TouchableOpacity style={style.button} >
                   <Text style={style.buttonText}>{this.props.type}</Text>
               </TouchableOpacity>
              
                </View>
          
        );
    }
}

const style = StyleSheet.create({
    data1: { justifyContent: "center", alignItems: "center"},
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



    },
    inputBox:{
        width:300,
        backgroundColor:'rgba(255,255,255,.3)',
        padding:16,
        borderRadius:25,
        fontSize:20,
        color:'green',
        marginVertical:16

    },
    buttonText:{
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff', 
        textAlign: 'center'

        
    },
    button:{
        width:200,
        backgroundColor:'skyblue',
        padding:16,
        borderRadius:25,
        marginVertical:16,
        paddingVertical:12,
        
       
    }
    

})
