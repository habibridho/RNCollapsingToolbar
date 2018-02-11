/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import str from './content';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>This is Title</Text>
          <Text style={styles.content}>{str}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },
  scrollContainer: {
    padding: 16
  },
  header: {
    backgroundColor: 'lightblue',
    height: 300
  },
  title: {
    marginVertical: 16,
    color: "black",
    fontWeight: "bold",
    fontSize: 24
  }
});
