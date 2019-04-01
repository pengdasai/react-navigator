//新闻页面的主页面
import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
//引入需要的页面
import TabScreen from './Tab'
import NewsPageScreen from './NewsPage'
const Index = createStackNavigator(
    {
        Tab:{
            screen:TabScreen,
            navigationOptions:{
                //去除上面的白框
                header:null
            },
        },
        NewsPage: NewsPageScreen,
    },
);

const AppContainer = createAppContainer(Index);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
