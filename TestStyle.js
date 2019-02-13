import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet, AppRegistry, View ,FlatList,Button} from 'react-native'

export default class TestStyle extends Component {
    mybuttonclick() {
       
       
    }
    render() {
        
        return (
            <ScrollView >
                <View style={style.data1}>
                <FlatList

                data={['shiva','swamy','guru','shiva','darma','shiva','arun','yashu']}
                renderItem={({item})=><Button style={style.container} title={item} onPress={() =>
                    this.props.navigation.navigate('Friends')
                  }></Button>}
                   />
                </View>
            </ScrollView>
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

