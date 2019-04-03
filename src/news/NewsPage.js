import React,{Component} from 'react';
import {Text,View,Alert} from 'react-native';
//1. 导入文件
import { createAppContainer,createBottomTabNavigator } from 'react-navigation';

export default class NewsPage extends Component{

    // constructor(){
    //     super();
    //     this.state={
    //         title:'',
    //         content:''
    //     }
    // }

    // componentWillMount(){
    //     let aid = this.props.navigation.state.params.aid
    //     fetch('url')
    //         .then(x=>{
    //             this.setState({
    //                 title:JSON.parse(x).title,
    //                 content:JSON.parse(x).content
    //             })
    //         })
    // }

    render(){
        //Alert.alert(this.props.navigation.state.params.aid);
        return(
            <View>
                <Text style={{fontSize:30}}>
                    Hello！
                    {this.props.navigation.getParam('aid','404')}
                </Text>
            </View>
        )
    }
}