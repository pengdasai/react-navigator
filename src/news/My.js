import React,{Component} from 'react';
import {Text,View,Alert,AsyncStorage} from 'react-native';
//1. 导入文件
import { createAppContainer,createBottomTabNavigator } from 'react-navigation';

export default class NewsPage extends Component{

    componentDidMount(){
        AsyncStorage.getItem('name').then((error,data)=>{
          Alert.alert(data)
        })
    }

    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:50}}>我是用户主页面</Text>
            </View>
        )
    }
}