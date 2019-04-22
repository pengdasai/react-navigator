/**
 * 左右晃动
 */
import React, {Component} from 'react';
import {FlatList, Text, View,Image,Dimensions,Button,Animated,StyleSheet} from 'react-native';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default class FlatListDemo extends Component{

    constructor(){
        super();
        this.state={
            btnAnimVal:new Animated.Value(0), //初始值
            list:[]
        }
    }

    doSomething = ({item})=>(
        <Animated.View style={[styles.demo, {
            transform: [
                {
                    translateX:this.state.btnAnimVal  //移动X轴
                },
            ]
        }]}>
            <Image source={{uri:item.thump}} style={{width:100,height:100,borderRadius:40,marginTop:10}}/>
            <Text style={{marginLeft:20,fontSize:20}}>{item.title}</Text>
        </Animated.View>
    );

    render(){
        return(
            <View style={{alignItems:'center'}}>
                <FlatList
                    data={this.state.list}
                    renderItem={this.doSomething}
                    numColumns={1}
                    keyExtractor={(item)=>item.aid}
                />
                <View style={{width:200,alignItems:'center',marginTop:30}} >
                    <Button title={'add'} onPress={this.add=()=>{
                        //Alert.alert('add data!')
                        var data = [
                            {
                                aid:'3',title:'新开普',thump:'http://img5.duitang.com/uploads/item/201512/18/20151218165511_AQW4B.jpeg'
                            },
                        ];
                        Animated.spring(this.state.btnAnimVal,{
                            // bounciness:8,
                            // speed:12,
                            toValue:20,//结束值
                            friction:2,//摩擦力
                            tension:50,//弹跳速度值
                        }).start();
                        this.setState({
                            list:data
                        })
                    }}/>
                </View>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    demo:{
        flexDirection:'row',
        alignItems:'center',
        width:300
    }

});
