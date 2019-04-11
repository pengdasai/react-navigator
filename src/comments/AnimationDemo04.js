/**
 * 左右切换
 */
import React, {Component} from 'react';
import {
    Animated,
    Easing,
    View,
    StyleSheet,
    Text
} from 'react-native';
export default class AnimationDemo04 extends Component{
    constructor(props){
        super(props);
        this.state={
            decayLeft4: new Animated.Value(0)
        }
    }
    componentDidMount() {
        Animated.decay(this.state.decayLeft4, {
            velocity: 1,// 起始速度，必填参数。
            deceleration:0.99//速度衰减比例，默认为0.997。
            //easing: Easing.linear // 缓动函数
        }).start();
    }
    render() {
        return (
            <Animated.View style={[styles.demo, {
                left:this.state.decayLeft4,
            }]}>
                <Text style={styles.text}>悄悄的，我出现了</Text>
            </Animated.View>
        );
    }
}

var styles = StyleSheet.create({
    demo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 30
    }
});