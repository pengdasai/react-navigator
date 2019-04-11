/**
 * 延迟一定时间后左右切换
 */
import React, {Component} from 'react';
import {
    Animated,
    Easing,
    View,
    StyleSheet,
    Text
} from 'react-native';
export default class AnimationDemo05 extends Component{
    constructor(props){
        super(props);
        this.state={
            left5: new Animated.Value(0),
        }
    }
    componentDidMount() {
        Animated.sequence([
            // 500 ms后执行
            Animated.delay(500),
            Animated.timing(this.state.left5, {
                toValue: 100,// 起始速度，必填参数。
                duration: 3000
            }),

        ]).start()
    }
    render() {
        return (
            <Animated.View style={[styles.demo, {
                left:this.state.left5,
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