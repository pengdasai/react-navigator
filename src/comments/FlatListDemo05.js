import React, {Component} from 'react';
import {FlatList, Text, View, Image, Button, Animated, StyleSheet} from 'react-native';
export default class FlatListDemo03 extends Component{

    constructor(){
        super();
        this.state={
            currentAlpha: 1.0,//标志位，记录当前value
            fadeAnim: new Animated.Value(1.0),//初始透明度
            list:[
                // {
                //     aid:'1',title:'新开普',thump:'http://img5.duitang.com/uploads/item/201512/18/20151218165511_AQW4B.jpeg'
                // },
            ]
        }
    }

    doSomething = ({item})=>(
        <Animated.View style={[styles.demo, {
            //动画开始的时候，整个视图是透明的
            opacity: this.state.fadeAnim,
            transform: [//transform动画
                {
                    translateY: this.state.fadeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [60, 0] //线性插值，0对应60，0.6对应30，1对应0
                    }),
                },
                {
                    scale:this.state.fadeAnim
                },
            ],
        }]}>
            <Image source={{uri:item.thump}} style={{width:80,height:80,borderRadius:40,marginTop:10}}/>
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
                        const data = [
                            {
                                aid:'3',title:'新开普',thump:'http://img5.duitang.com/uploads/item/201512/18/20151218165511_AQW4B.jpeg'
                            },
                            // {
                            //     aid:'4',title:'新开普',thump:'http://img5.duitang.com/uploads/item/201512/18/20151218165511_AQW4B.jpeg'
                            // }
                        ];
                        this.state.currentAlpha = this.state.currentAlpha == 1.0?0.0:1.0;
                        Animated.timing(
                            this.state.fadeAnim,
                            {
                                toValue: this.state.currentAlpha
                            }
                        ).start();
                        this.setState({
                            list:data
                        });
                    }}/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    demo:{
        flexDirection:'row',
        alignItems:'center',
    }
});
