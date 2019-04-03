import React from 'react';
import { View, Text, Button } from 'react-native';

export default class DetailScreen extends React.Component{
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{fontSize:30}}>Home Screen</Text>
            </View>
        )
    }
}