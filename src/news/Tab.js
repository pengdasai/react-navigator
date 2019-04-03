import React,{Component} from 'react';
import { Text, View,} from 'react-native';
//1. 导入文件
import { createAppContainer,createBottomTabNavigator } from 'react-navigation';
//导入home页面
import HomeScreen from './Home'
import My from './My'

//3. 添加TabNavigator中
const RootTabs = createBottomTabNavigator({
    Home:{
        screen:HomeScreen,
        navigationOptions:{
            //4. 创建标签
            tabBarLabel:'首页',
        },
    },
    Profile:{
        screen:My,
        //getScreen:()=>require('My').default,
        navigationOptions:{
            tabBarLabel:'我的',
        }
    },
});
export default createAppContainer(RootTabs);