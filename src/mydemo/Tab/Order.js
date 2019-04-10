import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginPage from '../Login/LoginPage'
import OrderHome from '../Order/OrderHome'

const Order = createStackNavigator(
    {
        Home: {
            screen:OrderHome,
            navigationOptions:{
                //去除上面的白框
                header:null
            },
        },
        Details: LoginPage,
    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(Order);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
