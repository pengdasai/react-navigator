/**
 * 延迟一定时间后左右切换
 */
import React, {Component} from 'react';
import {
    Animated,
    Easing,
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';
var width = Dimensions.get('window').width;
export default class AnimationDemo07 extends Component{
    constructor(props){
        super(props);
        this.state={
            left3: new Animated.Value(0),
            right3: new Animated.Value(0),
        }
    }
    componentDidMount() {
        //串行执行
        Animated.sequence([
            Animated.decay(this.state.left3, {
                velocity: 1,// 起始速度，必填参数。
                deceleration:0.99//速度衰减比例，默认为0.997。
                //easing: Easing.linear // 缓动函数
            }),
            Animated.decay(this.state.right3, {
                velocity: 1,// 起始速度，必填参数。
                deceleration:0.99//速度衰减比例，默认为0.997。
                //easing: Easing.linear // 缓动函数
            })
        ]).start()//执行动画

    }
    render() {
        return (
            <Animated.View style={[styles.demo, {
                left: this.state.left3.interpolate({
                    inputRange:[0,1],
                    outputRange:[0, width - 100]
                }),
                right: this.state.right3.interpolate({
                    inputRange:[0,1],
                    outputRange:[0, width - 100]
                }),
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