import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            'swamy','arun','anil'
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  data: { justifyContent: "center", alignItems: "center" },
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})