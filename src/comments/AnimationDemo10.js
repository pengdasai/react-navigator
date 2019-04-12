import React, {Component} from 'react';
import {
    Animated,
    View,
    StyleSheet,
    Text,
    TouchableOpacity, Button
} from 'react-native';
export default class AnimationDemo10 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnAnimVal:new Animated.Value(0), //初始值
        };
    }


    startAnim=()=>{
        //弹性动画
        Animated.spring(this.state.btnAnimVal,{
            toValue:30,//结束值
            friction:1,//摩擦力
            tension:70,//弹跳速度值
        }).start();
    };

    render(){
        return(
            <View>
                <TouchableOpacity onPress={this.startAnim}>
                    <Animated.View style={[styles.mainView,{
                        transform: [
                            {
                                translateX:this.state.btnAnimVal  //移动Y轴
                            },
                        ]
                    }]}>
                        <Text style={{fontSize:30}}>点我！</Text>
                    </Animated.View>
                </TouchableOpacity>
            </View>
        )
    }


}

var styles = StyleSheet.create({
    mainView:{
        width:100,
        height:100,
        backgroundColor:'pink',
        alignItems:'center',
        justifyContent:'center'
    }
});