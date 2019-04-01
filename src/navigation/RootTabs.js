'use strict';
import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    PixelRatio,
} from 'react-native';
//1. 导入文件
import { createAppContainer,createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';


//2.创建一些页面
const HomeScreen=()=>(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:50,color:'pink'}}>HomeScreen</Text>
        <Ionicons name={'yen'}/>
    </View>
);

const ProfileScreen=()=>(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:50,color:'blue'}}>ProfileScreen</Text>
    </View>
);

//3. 添加TabNavigator中
const RootTabs = createBottomTabNavigator({
    Home:{
        screen:HomeScreen,
        navigationOptions:{
            //4. 创建标签
            tabBarLabel:'MyHome',
            //5 .添加图标
            tabBarIcon:({tintColor,focused})=>(
                <Ionicons
                    name={focused?'ios-home' : 'md-home'}
                    size={26}
                    style={focused?{ color: tintColor }:{color:'#f00'}}
                >
                </Ionicons>
            ),
        },
    },
    Profile:{
        screen:ProfileScreen,
        navigationOptions:{
            tabBarLabel:'MyProfile',
            tabBarIcon:({tintColor,focused})=>(
                <Ionicons
                    name={'ios-aperture'}
                    size={26}
                    style={{color:tintColor}}
                >
                </Ionicons>
            ),
        }
    },
});


// ,{
//     tabBarOptions:{
//         showIcon:true
//     }
// }
//最后导出
export default createAppContainer(RootTabs);