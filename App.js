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
// import FlatListDemo from './src/comments/FlatListDemo'
// import FlatListDemo02 from './src/comments/FlatListDemo02'
// import FlatListDemo03 from './src/comments/FlatListDemo03'
// import FlatListDemo04 from './src/comments/FlatListDemo04'
// import FlatListDemo05 from './src/comments/FlatListDemo05'
// import AnimationDemo01 from './src/comments/AnimationDemo01'
// import AnimationDemo02 from './src/comments/AnimationDemo02'
// import AnimationDemo03 from './src/comments/AnimationDemo03'
// import AnimationDemo04 from './src/comments/AnimationDemo04'
// import AnimationDemo05 from './src/comments/AnimationDemo05'
// import AnimationDemo06 from './src/comments/AnimationDemo06'
// import AnimationDemo07 from './src/comments/AnimationDemo07'
// import AnimationDemo08 from './src/comments/AnimationDemo08'
// import AnimationDemo09 from './src/comments/AnimationDemo09'
// import AnimationDemo10 from './src/comments/AnimationDemo10'
//-----------------------------------------------------
import IndexPage from './src/smartclass/IndexPage'
import WebSocketDemo01 from './src/web/WebSocketDemo01'
import StateTest from './src/smartclass/StateTest'
//import First from './src/tsdemo/first'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<Props> {
  render() {
    return (
        <StateTest/>
    );
  }
}
