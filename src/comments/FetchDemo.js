/**
 *左右晃动
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Alert} from 'react-native';

export default class FetchDemo extends Component{
    constructor(props){
        super(props)
    }

    foo(){
        //Alert.alert('点你咋地！！')
        fetch('https://www.baidu.com/',{
            method:'post',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({

            })
        })
            .then((response)=>response.json)
            .then((JsonData)=>{
                Alert.alert('post is OK!')
                console.log(JSON.stringify(JsonData))
            })
            .catch((error)=>{
                Alert.alert('post is error!')
            })
    }

    render() {
        return (
            <View>
                <Text  style={{fontSize:20}} onPress={this.foo}> 点我发送请求！</Text>
            </View>
        );
    }
}