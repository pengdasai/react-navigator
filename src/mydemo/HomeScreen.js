import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator,createAppContainer } from 'react-navigation'; // 1.0.0-beta.14
import Ionicons from 'react-native-vector-icons/Ionicons'; // Supported builtin module
import Main from './Tab/Main';
import Order from './Tab/Order';
import MyCenter from './Tab/MyCenter';

const HomeScreen = createBottomTabNavigator({
    Home: {
        screen: Main,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-home' : 'ios-home'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
    Order: {
        screen: Order,
        navigationOptions: {
            tabBarLabel: 'Order',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-list' : 'ios-list'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
    MyCenter: {
        screen: MyCenter,
        navigationOptions: {
            tabBarLabel: 'MyCenter',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-person' : 'ios-person'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
},{
    tabBarOptions:{
        showIcon:true,
    }
});

const AppContainer = createAppContainer(HomeScreen);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}