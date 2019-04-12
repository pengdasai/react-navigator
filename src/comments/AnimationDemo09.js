import React, {Component} from 'react';
import {
    Animated,
    Easing,
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
export default class AnimationDemo09 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animVal:new Animated.Value(0), //初始值
            btnAnimVal:new Animated.Value(0), //初始值
        };
    }

    startAnim = ()=>{
        Animated.parallel([   //同时执行的组合动画
            Animated.timing(this.state.animVal,  //时间渐变动画，控制Text
                {
                    toValue:1,     //结束值
                    duration:1000,   //持续时间
                }),
            Animated.spring(this.state.btnAnimVal, {  //弹性动画，控制按钮
                toValue:100,  //结束值
                friction:1,   //摩擦力，默认7，越小摩擦力越小
                tension:100,  //弹跳的速度值, 默认40
            }),
        ]).start();
    };

    render() {
        return (
            <View style={styles.container}>
                {/*绑定到属性*/}
                <Animated.Text style={{
                    opacity:this.state.animVal,    //淡入淡出 0 -> 1
                    transform: [
                        {
                            scale:this.state.animVal,   //缩放 0 -> 1
                        },
                        {
                            translateY:this.state.animVal.interpolate({   //移动y轴
                                inputRange:[0,1],      //插值器接受输入区间  0 -> 1
                                outputRange:[0,-100],  //插值器将输入区间映射到输出区间，y轴由 0 -> -100(手机坐标轴反向，即向上移动)
                            }),
                        },
                        {
                            rotateY:this.state.animVal.interpolate({
                                inputRange:[0,1],      //插值器接受输入区间  0 -> 1
                                outputRange:['0deg','360deg'],
                            }),
                        }
                    ]
                }}>
                    测试动画
                </Animated.Text>
                <TouchableOpacity onPress={this.startAnim}>
                    <Animated.View style={[styles.button,{
                        transform: [
                            {
                                translateY:this.state.btnAnimVal  //移动Y轴
                            },
                        ]
                    }]}>
                        <Text>Start Animation</Text>
                    </Animated.View>
                </TouchableOpacity>
            </View>
        );
    }
}

var styles = StyleSheet.create({
   button:{
       width:100,
       height:100
   }
});