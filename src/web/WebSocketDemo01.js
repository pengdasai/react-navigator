import React, {Component} from 'react';
import { View, StyleSheet, Text ,Alert} from 'react-native';

export default class webSocketDemo01 extends Component{
    constructor(props){
        super(props);
        const ws = new WebSocket('https://www.baidu.com/');
        ws.onopen=()=>{
            ws.send('open...')
        };
        ws.onmessage=(e)=>{
            Alert.alert('接收的消息：'+e.data)
        };
        ws.onerror=(e)=>{
            Alert.alert('err:'+e.data)
        };
        ws.onclose=(e)=>{
            Alert.alert(e)
        }

    };

    render(){
        return(
            <View>
                <Text>test</Text>
            </View>
        )
    }

}