/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Animated,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import str from './content';

const HEADER_EXPANDED_HEIGHT = 300;
const HEADER_COLLAPSED_HEIGHT = 60;

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      scrollY: new Animated.Value(0)
    }
  }

  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
      outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
      extrapolate: 'clamp'
    });

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.header, { height: headerHeight }]}/>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          onScroll={Animated.event(
            [{ nativeEvent: {
                contentOffset: {
                  y: this.state.scrollY
                }
              }
            }])
          }
          scrollEventThrottle={16}
        >
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
    backgroundColor: 'lightblue'
  },
  title: {
    marginVertical: 16,
    color: "black",
    fontWeight: "bold",
    fontSize: 24
  }
});
