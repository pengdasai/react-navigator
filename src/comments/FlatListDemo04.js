/**
 * 弹出的例子
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform,
    Image,
    Animated,
    Easing,
} from 'react-native';
export default class FlatListDemo04 extends Component {

    constructor(props) {
        super(props);
        this.state = {//设置初值
            currentAlpha: 1.0,//标志位，记录当前value
            fadeAnim: new Animated.Value(1.0)
        };
    }
    startAnimation(){
        this.state.currentAlpha = this.state.currentAlpha == 1.0?0.0:1.0;
        Animated.timing(
            this.state.fadeAnim,
            {toValue: this.state.currentAlpha}
        ).start();
    }
    render() {
        return (
            <View style={styles.container}>
                <Animated.Text style={{opacity: this.state.fadeAnim, //透明度动画
                    transform: [//transform动画
                        {
                            translateY: this.state.fadeAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [60, 0] //线性插值，0对应60，0.6对应30，1对应0
                            }),
                        },
                        {
                            scale:this.state.fadeAnim
                        },
                    ],
                }}>
                    <Text style={{fontSize:30}}>Welcome to React Native!</Text>
                </Animated.Text>
                <TouchableOpacity onPress = {()=> this.startAnimation()} style={styles.button}>
                    <Text style={{textAlign:'center',fontSize:20}}>Press</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        backgroundColor:'pink',
        width:80,
        height:48,
        borderRadius:20,
        marginTop:50,
        alignItems:'center',
        justifyContent:'center'
    }
});