import React from 'react';
import { View, Text ,Image,Alert,Dimensions,TouchableOpacity,FlatList,} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
var newsData = require('../../assets/data/news.json')
const { width, height } = Dimensions.get('window');//获取手机的宽和高
export default class Home extends React.Component{
    goDetail(){
        //Alert.alert('去新闻详情页面！')
        this.props.navigation.navigate('NewsPage',{aid:3})
    }

    showData = ({item})=>(
        <TouchableOpacity onPress={this.goDetail.bind(this)} style={{alignItems:'center',marginTop:20,height:200,width:'50%'}}>
            <Image source={{uri:item.thump}} style={{height:Dimensions.get('window').width/2*0.7*9/13,width:Dimensions.get('window').width/2*0.8}}/>
            <Text style={{fontSize:30,marginTop:20}}>{item.title}</Text>
        </TouchableOpacity>
    );

    render(){
        return(
            <View>
                    <FlatList
                        data={[
                            {'aid':1,title:'第一个',thump:'http://hbimg.b0.upaiyun.com/98cee8d1048e087a8fe2a5c15ea3531f72d32da7120a1-5Pst0B_fw658'},
                            {'aid':2,title:'第二个',thump:'http://hbimg.b0.upaiyun.com/98cee8d1048e087a8fe2a5c15ea3531f72d32da7120a1-5Pst0B_fw658'},
                            {'aid':3,title:'第三个',thump:'http://hbimg.b0.upaiyun.com/98cee8d1048e087a8fe2a5c15ea3531f72d32da7120a1-5Pst0B_fw658'},
                            {'aid':4,title:'第四个',thump:'http://hbimg.b0.upaiyun.com/98cee8d1048e087a8fe2a5c15ea3531f72d32da7120a1-5Pst0B_fw658'},
                        ]}
                        renderItem={this.showData}
                        keyExtractor={(item)=>item.aid}
                        numColumns={2}/>
            </View>
        )
    }
}