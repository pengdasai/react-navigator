/**
 * X轴切换/渐变
 */
import React, {Component} from 'react';
import {
    Animated,
    Easing,
    View,
    StyleSheet,
    Text
} from 'react-native';
export default class AnimationDemo01 extends Component{
    constructor(props){
        super(props);
        this.state={
            fadeInOpacity: new Animated.Value(0)
        }
    }
    componentDidMount() {
        Animated.timing(this.state.fadeInOpacity, {
            toValue: 1, // 目标值
            duration: 2500, // 动画时间
            //easing: Easing.linear // 缓动函数
        }).start();
    }
    render() {
        return (
            <Animated.View style={[styles.demo, {
                transform:[
                    {
                        rotateX:this.state.fadeInOpacity.interpolate({
                            inputRange:[0,1],
                            outputRange:['0deg','360deg']
                        })
                    }
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