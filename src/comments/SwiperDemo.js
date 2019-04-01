import React, { Component } from 'react'
import {
    View,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native'
import Swiper from 'react-native-swiper';
const { width, height } = Dimensions.get('window');//获取手机的宽和高
export default class SwiperDemo extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={{height:200,width}}>
                    <Swiper style={styles.wrapper}
                            showsButtons={false}//为false时不显示控制按钮
                            paginationStyle={{//小圆点位置
                                bottom: 10
                            }}
                            loop={true}//如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
                            autoplay={true}//自动轮播
                            autoplayTimeout={2}//每隔2秒切换
                    >

                        <Image style={styles.image} source={require('../../assets/images/a.jpg')}/>
                        <Image style={styles.image} source={require('../../assets/images/a.jpg')}/>
                        <Image style={styles.image} source={require('../../assets/images/a.jpg')}/>
                    </Swiper>
                </View>
            </View>
        )
    }
}


const styles =StyleSheet.create( {
    wrapper: {

    },
    container: {
        flex: 1,//必写
    },
    image: {
        // width,//等于width:width
        // height,
    }
});

