import React from 'react';
import { View, Text, Button } from 'react-native';

export default class Order extends React.Component{
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{fontSize:30}}>订单</Text>
            </View>
        )
    }
}