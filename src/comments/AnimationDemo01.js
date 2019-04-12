/**
 * 渐变
 */
import React, {Component} from 'react';
import {
    Animated,
    Easing,
    View,
    StyleSheet,
    Text
} from 'react-native';
export default class AnimationDemo01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0), //设置初始值
        };
    }
    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,//初始值
            {toValue: 1}//结束值
        ).start();//开始
    }
    render() {
        return (
            <View style={styles.container}>
                <Animated.Text style={{fontSize:30,opacity: this.state.fadeAnim}}>
                    Welcome to React Native!
                </Animated.Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container:{
        alignItems:'center'
    }
});