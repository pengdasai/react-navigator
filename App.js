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
//import IndexPage from './src/news/IndexPage'
//import SwiperDemo from './src/comments/SwiperDemo'
//import MyDrawerNavigator from './src/navigation/MyDrawerNavigator'
//import FlatListDemo from './src/comments/FlatListDemo'
//-----------------------------------------------------
import IndexPage from './src/smartclass/IndexPage'
import First from './src/tsdemo/first'
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
        <IndexPage/>
    );
  }
}
