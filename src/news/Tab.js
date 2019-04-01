import React,{Component} from 'react';
import { Text, View,} from 'react-native';
//1. 导入文件
import { createAppContainer,createBottomTabNavigator } from 'react-navigation';
//导入home页面
import HomeScreen from './Home'

//2.创建一些页面
const ProfileScreen=()=>(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:50}}>我是用户主页面</Text>
    </View>
);

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
        screen:ProfileScreen,
        navigationOptions:{
            tabBarLabel:'我的',
        }
    },
});
export default createAppContainer(RootTabs);