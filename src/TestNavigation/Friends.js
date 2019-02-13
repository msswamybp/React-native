import React from 'react';
import { StyleSheet, Text, View, Button ,StatusBar} from 'react-native';
import * as data1 from '../../src/TestNavigation/Person.json';

export default class Friends extends React.Component {
  static navigationOptions = {
    title: 'Person Details',
    headerStyle: { backgroundColor: '#FFF' },
    headerTitleStyle: { color: 'green' },
    headerTitleStyle: { alignSelf: 'center' },
  }
  render() {

    var n = this.props.navigation.state.params.name
    var object = data1.Person


    for (let i in object) {
      if (n == object[i].fname + " " + object[i].lname + "-" + object[i].age) {
        var fname = "fname : " + object[i].fname;
        var lname = "lname : " + object[i].lname;
        var age = "age : " + object[i].age;
        var phonenumber = "phonenumber : " + object[i].phonenumber;
        var state = "state : " + object[i].state;
        var place = "place : " + object[i].place;
        var DOB = "DOB : " + object[i].DOB;

      }

    }
    return (
      <View style={styles.container}>
 <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Text style={styles.container1}>{fname}</Text>
        <Text style={styles.container1}>{lname}</Text>
        <Text style={styles.container1}>{age}</Text>
        <Text style={styles.container1}>{DOB}</Text>
        <Text style={styles.container1}>{place}</Text>
        <Text style={styles.container1}>{state}</Text>
        <Text style={styles.container1}>{phonenumber}</Text>


        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          } />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {

    marginTop: 10,
    color: 'green',

    fontSize: 20,
    textAlign: 'center'



  }
});