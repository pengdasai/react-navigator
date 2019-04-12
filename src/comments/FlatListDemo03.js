import React, {Component} from 'react';
import {FlatList, Text, View,Image,Dimensions,Button,Animated,StyleSheet} from 'react-native';
export default class FlatListDemo03 extends Component{

    constructor(){
        super();
        this.state={
            fadeAnim: new Animated.Value(0), //设置初始值
            list:[
                {
                    aid:'1',title:'新开普',thump:'http://img5.duitang.com/uploads/item/201512/18/20151218165511_AQW4B.jpeg'
                }
            ]
        }
    }

    doSomething = ({item})=>(
        <Animated.View style={styles.demo}>
            <Animated.Image source={{uri:item.thump}} style={{width:100,height:100,borderRadius:40,marginTop:10,opacity: this.state.fadeAnim}}/>
            <Animated.Text style={{marginLeft:20,fontSize:20,opacity: this.state.fadeAnim}}>{item.title}</Animated.Text>
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
                        ];
                        Animated.timing(
                            this.state.fadeAnim,//初始值
                            {toValue: 1}//结束值
                        ).start();//开始
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
