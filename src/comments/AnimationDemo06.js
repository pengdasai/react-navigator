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
export default class AnimationDemo06 extends Component{
    constructor(props){
        super(props);
        this.state={
            left3: new Animated.Value(0),
            right3: new Animated.Value(0),
            rotation3: new Animated.Value(0),
            scale3: new Animated.Value(0.5),
        }
    }
    componentDidMount() {
        //串行执行
        Animated.sequence([
            // 并行执行（滚动，同时旋转）
            Animated.parallel([
                Animated.timing(this.state.left3, {
                    toValue: 1,
                    duration: 3000,
                }),
                Animated.timing(this.state.rotation3, {
                    toValue: 1,
                    duration: 1000,
                }),
            ]),
            // 滚动、旋转结束  执行缩放
            Animated.timing(this.state.scale3, {
                toValue: 1,
                duration: 500,
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
                transform:[
                    {rotateZ: this.state.rotation3.interpolate({
                            inputRange:[0,1],
                            outputRange:['0deg','360deg']})
                    },
                    {rotateX: this.state.rotation3.interpolate({
                            inputRange:[0,1],
                            outputRange:['0deg','360deg']})
                    },
                    {scale: this.state.scale3}
                ]
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