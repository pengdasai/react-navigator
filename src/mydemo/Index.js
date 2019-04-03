import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator ,createAppContainer} from 'react-navigation'; // 1.0.0-beta.14
import HomeScreen from './HomeScreen';// TabScreen-->HomeScreen
import DetailsScreen from './DetailScreen';// PageScreen-->DetailScreen

const Index = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header:null
        },
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: {
            header:null
        },
    },
});

const AppContainer = createAppContainer(Index);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}