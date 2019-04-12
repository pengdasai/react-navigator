/**
 * X轴切换，渐变
 */
import React, {Component} from 'react';
import {
    Animated,
    Easing,
    View,
    StyleSheet,
    Text
} from 'react-native';
export default class AnimationDemo02 extends Component{
    constructor(props){
        super(props);
        this.state={
            fadeInOpacity: new Animated.Value(0),
            rotation: new Animated.Value(0),
            fontSize: new Animated.Value(0)
        }
    }
    componentDidMount() {
        var timing = Animated.timing;
        Animated.parallel(['fadeInOpacity', 'rotation', 'fontSize'].map(property => {
            return timing(this.state[property], {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear
            });
        })).start();
    }
    render() {
        return (
            <Animated.View style={[styles.demo, {
                opacity: this.state.fadeInOpacity,
                transform: [{
                    rotateX: this.state.rotation.interpolate({//插值函数，实现了数值大小，单位的映射转换
                        inputRange: [0,1],
                        outputRange: ['0deg', '360deg']
                    })
                }]
            }]}>
                <Animated.Text style={{
                fontSize: this.state.fontSize.interpolate({
                    inputRange: [0,1],
                    outputRange: [12,26]
                })
            }}>我出现了💨
                </Animated.Text>
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