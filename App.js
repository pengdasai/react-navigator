/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
//import RootTabs from './src/navigation/RootTabs'
//import RootStack from './src/navigation/StackNavigatorDemo01'
//import RootDrawer from './src/navigation/RootDrawer'
//import TabNavigator from './src/navigation/TabNavigator'
//import FetchFDemo from './src/comments/FetchDemo'
//import RootTabs from "./src/navigation/RootTabs";
//import FetchDemo from "./src/comments/FetchDemo";
//import Template from './src/comments/Template';
import Index from './src/news/Index'
//import SwiperDemo from './src/comments/SwiperDemo'
//import MyDrawerNavigator from './src/navigation/MyDrawerNavigator'
import FlatListDemo from './src/comments/FlatListDemo'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (

          <Index/>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
