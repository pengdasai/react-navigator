import React from "react";
import {Button, Text, View} from "react-native";

export default class OrderHome extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{fontSize:20}}>您还未登录！</Text>
                <Button
                    title="去登录..."
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}