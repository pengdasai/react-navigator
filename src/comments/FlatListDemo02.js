/**
 * 旋转、渐变
 */
import React, {Component} from 'react';
import {FlatList, Text, View,Image,Dimensions,Button,Animated,StyleSheet,Easing} from 'react-native';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default class FlatListDemo02 extends Component{

    constructor(){
        super();
        this.state={
            fadeInOpacity: new Animated.Value(0),
            rotation: new Animated.Value(0),
            fontSize: new Animated.Value(0),
            list:[
                {
                    aid:'1',title:'新开普',thump:'http://img5.duitang.com/uploads/item/201512/18/20151218165511_AQW4B.jpeg'
                }
            ]
        }
    }

    doSomething = ({item})=>(
      <Animated.View style={[styles.demo, {
          //动画开始的时候，整个视图是透明的
          //opacity: this.state.fadeInOpacity,
          transform: [{
              rotateX: this.state.rotation.interpolate({//插值函数，实现了数值大小，单位的映射转换
                  inputRange: [0,1],
                  outputRange: ['0deg', '360deg']
              })
          }]
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
                <View style={{width:100,alignItems:'center',marginTop:30}} >
                    <Button title={'add'} onPress={this.add=()=>{
                        //Alert.alert('add data!')
                        var data = [
                            {
                                aid:'3',title:'新开普',thump:'http://img5.duitang.com/uploads/item/201512/18/20151218165511_AQW4B.jpeg'
                            },
                            {
                                aid:'2',title:'新开普',thump:'http://img5.duitang.com/uploads/item/201512/18/20151218165511_AQW4B.jpeg'
                            }
                        ];
                        var timing = Animated.timing;
                        Animated.parallel(['fadeInOpacity', 'rotation', 'fontSize'].map(property => {
                            return timing(this.state[property], {
                                toValue: 1,
                                duration: 1000,
                                easing: Easing.linear
                            });
                        })).start();
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
    }

});
