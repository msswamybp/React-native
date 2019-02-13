import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView ,StatusBar} from 'react-native';
import * as data1 from '../../src/TestNavigation/Person.json';
export default class Home extends React.Component {
  static navigationOptions = {
    title: 'User App',
    headerStyle: { backgroundColor: '#FFF' },
    headerTitleStyle: { alignSelf: 'center' },
    headerTitleStyle:{ color: 'green' },
  };
  render() {
    var object = data1.Person
    var arr = []
    for (let i in object) {
      var st = object[i].fname + " " + object[i].lname + "-" + object[i].age
      arr.push(st)
    }

    return (
      <ScrollView >
        <View style={style.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
          <FlatList
            data={arr}
            renderItem={({ item }) =>
              <View style={style.container1}>
                <Button title={item}
                  onPress={() =>
                    this.props.navigation.navigate('Friends', { name: item })
                  }></Button>
              </View>}
          />
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    height: 40,
    width: 250,
    color: 'white',
    fontSize: 20,
    textAlign: 'center'

  }
});