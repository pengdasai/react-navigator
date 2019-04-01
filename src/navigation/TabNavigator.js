import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons'
class HomeScreen extends React.Component{
    render(){
        return(
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{fontSize:20}}>welcome come to Home!</Text>
                </View>
            )

    }
}

class SettingsScreen extends React.Component{
    render(){
        return(
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{fontSize:20}}>welcome come to Settings!</Text>
                </View>
            )

    }
}

const TabNavigator = createBottomTabNavigator({
    Home:HomeScreen,
    Settings:SettingsScreen
});

export default createAppContainer(TabNavigator)