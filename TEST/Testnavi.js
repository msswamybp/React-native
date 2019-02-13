import React,{Component} from 'react'
import{View,Text,StyleSheet,} from 'react-native'
import {createStackNavigator} from 'react-navigation'
class Homescreen extends React.Component{
    static navigationoption={
        title:'Home',
    }
    render(){
        const{navigate}=this.props.navigation;
        return(
        <View style={style.data1}>
        <Text 
        onPress={()=>navigate('Profile')}>Navigate to Profile
            
        </Text>
            
        </View>

         ); }
}
class Profilescreen extends React.Component{
    static navigationoption={
        title:'Profile',
    }
    render(){
        const{navigate}=this.props.navigation;
        return(
        <View style={style.data1}>
        <Text 
        onPress={()=>navigate('Home')}>Navigate to Home
            
        </Text>
            
        </View>

         ); }
}
export default NavigationApp = createStackNavigator({
    Home:{screen:Homescreen},
    Profile:{screen:Profilescreen}
})

const style=StyleSheet.create({
    data1: { justifyContent: "center", alignItems: "center" },

})