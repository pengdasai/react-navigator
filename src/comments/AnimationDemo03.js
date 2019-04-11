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
export default class AnimationDemo03 extends Component{
    constructor(props){
        super(props);
        this.state={
            anim: [1,2,3].map(() => new Animated.Value(0)) // 初始化3个值
        }
    }
    componentDidMount() {
        var timing = Animated.timing;
        Animated.sequence([
                Animated.stagger(200, this.state.anim.map(left => {
                    return timing(left, {
                        toValue: 1,
                    });
                }).concat(
                    this.state.anim.map(left => {
                        return timing(left, {
                            toValue: 0,
                        });
                    })
                )), // 三个view滚到右边再还原，每个动作间隔200ms
                Animated.delay(400), // 延迟400ms，配合sequence使用
                timing(this.state.anim[0], {
                    toValue: 1
                }),
                timing(this.state.anim[1], {
                    toValue: -1
                }),
                timing(this.state.anim[2], {
                    toValue: 0.5
                }),
                Animated.delay(400),
                Animated.parallel(this.state.anim.map((anim) => timing(anim, {
                    toValue: 0
                }))) // 同时回到原位置
            ]
        ).start();
    }
    render() {
        var views = this.state.anim.map(function(value, i) {
            return (
                <Animated.View
                    key={i}
                    style={[styles.demo, styles['demo' + i], {
                        left: value.interpolate({
                            inputRange: [0,1],
                            outputRange: [0,200]
                        })
                    }]}>
                    <Text style={styles.text}>我是第{i + 1}个View</Text>
                </Animated.View>
            );
        });
        return(
            <View style={styles.container}>
                <Text>----动画演示----</Text>
                {views}
            </View>
        )
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