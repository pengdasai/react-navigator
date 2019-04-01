import React, {Component} from 'react';
import {Platform, FlatList, Text, View,Image,Dimensions} from 'react-native';

export default class FlatListDemo extends Component{

    componentWillMount(){
        fetch('')
            .then((data)=>{
                this/this.setState({
                    list:JSON.parse(x)
                })
            })
    }

    constructor(){
        super();
        this.state={
            list:[
                {
                    aid:'1',title:'第一篇',thump:'http://hbimg.b0.upaiyun.com/98cee8d1048e087a8fe2a5c15ea3531f72d32da7120a1-5Pst0B_fw658'
                },
                {
                    aid:'21',title:'第二篇',thump:'http://hbimg.b0.upaiyun.com/98cee8d1048e087a8fe2a5c15ea3531f72d32da7120a1-5Pst0B_fw658'
                },
                {
                    aid:'3',title:'第三篇',thump:'http://hbimg.b0.upaiyun.com/98cee8d1048e087a8fe2a5c15ea3531f72d32da7120a1-5Pst0B_fw658'
                },
                {
                    aid:'4',title:'第四篇',thump:'http://hbimg.b0.upaiyun.com/98cee8d1048e087a8fe2a5c15ea3531f72d32da7120a1-5Pst0B_fw658'
                },
                {
                    aid:'5',title:'第五篇',thump:'http://hbimg.b0.upaiyun.com/98cee8d1048e087a8fe2a5c15ea3531f72d32da7120a1-5Pst0B_fw658'
                },
                {
                    aid:'6',title:'第六篇',thump:'http://hbimg.b0.upaiyun.com/98cee8d1048e087a8fe2a5c15ea3531f72d32da7120a1-5Pst0B_fw658'
                }
            ]
        }
    }


    doSomething = ({item})=>(
      <View style={{height:200,width:'50%',alignItems:'center',marginTop:10}}>
          <Image source={{uri:item.thump}} style={{width:Dimensions.get('window').width/2*0.8,height:Dimensions.get('window').width/2*0.7*9/13}}/>
          <Text style={{fontSize:20,marginTop:15}}>{item.title}</Text>
      </View>
    );

    render(){
        return(
            <View>
                <FlatList
                    data={this.state.list}
                    renderItem={this.doSomething}
                    numColumns={2}
                    keyExtractor={(item)=>item.aid}
                />
            </View>
        )
    }
}