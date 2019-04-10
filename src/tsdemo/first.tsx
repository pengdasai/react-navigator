import * as React from 'react';
import {View,Text} from "react-native";

interface props {
    title:string
}

export default class first extends React.Component<props>{
    render(){
        return(
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:30}}>
                    Hello TS1
                </Text>
            </View>
        )
    }
}