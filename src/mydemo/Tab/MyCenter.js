import React from 'react';
import { View, Text, Button ,StyleSheet,Dimensions,Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Supported builtin module
export default class MyCenter extends React.Component{
    render(){
        return(
            <View style={{backgroundColor:'white'}}>
                {/*顶部*/}
                <View style={styles.top}>
                    <Image source={require('../../../assets/images/newcapec.jpg')} style={styles.topbg}/>
                </View>
                <View style={styles.in}>
                    <View style={styles.left}>
                        <Image source={require('../../../assets/images/lock.png')} style={styles.userpic}/>
                        <View style={styles.leftiin}>
                            <Text style={{color:'gray',fontSize:20}}>立即登录</Text>
                            <Text style={{color:'gray',fontSize:20}}>立即注册</Text>
                        </View>

                    </View>
                    <View style={styles.right}>
                        <Text style={{color:'gray',fontSize:20}}>立即充值>></Text>
                    </View>
                </View>
                {/*钱包*/}
                <View style={styles.wallet}>
                    <View style={styles.wleft}>
                        <Ionicons
                            name={'ios-home'}
                            size={30}
                        />
                        <Text style={{fontSize:20,marginLeft:10}}>我的钱包</Text>
                    </View>
                    <Text style={{fontSize:20,marginRight: 20,color:'#0EE2FB'}}>开发票</Text>
                </View>
                {/*四个信息*/}
                <View style={styles.account}>
                    <View style={styles.accounttitle}>
                        <Text style={{fontSize:20,color:'rgba(0,0,0,0.7)',textAlign: 'center'}}>0张</Text>
                        <Text>优惠券</Text>
                    </View>
                    <View style={styles.accounttitle}>
                        <Text style={{fontSize:20,color:'rgba(0,0,0,0.7)',textAlign: 'center'}}>￥0.00</Text>
                        <Text>余额</Text>
                    </View>
                    <View style={styles.accounttitle}>
                        <Text style={{fontSize:20,color:'rgba(0,0,0,0.7)',textAlign: 'center'}}>0张</Text>
                        <Text>银行卡</Text>
                    </View>
                    <View style={styles.accounttitle}>
                        <Text style={{fontSize:20,color:'rgba(0,0,0,0.7)',textAlign: 'center'}}>0</Text>
                        <Text>积分</Text>
                    </View>
                    <View style={styles.accounttitle}>
                        <Text style={{fontSize:20,color:'rgba(0,0,0,0.7)',textAlign: 'center'}}>0张</Text>
                        <Text>优惠券</Text>
                    </View>
                </View>
                {/*其他*/}
                <View style={styles.others}>
                    <View style={styles.othersitem}>
                        <Ionicons
                            name={'ios-home'}
                            size={30}
                        />
                        <View>
                            <Text></Text>
                            <Text> > </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const width = Dimensions.get('window').width;

let styles = StyleSheet.create({
    top:{
        width:'100%',
        height:width/3,
        //borderWidth:1,
        //borderColor:'blue',
        position:'relative'
    },
    topbg:{
        width:'100%',
        height:width/3,
        opacity:0.2
    },
    in:{
        width:'100%',
        height:width/3,
        //backgroundColor: 'pink',
        position: 'absolute',
        left:0,
        top:0,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    left: {
        width:'30%',
        height:width/3/2,
        marginLeft:20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftin:{
        flexDirection:'row',
    },
    right:{
        width:'30%',
        height:width/3/3,
        //backgroundColor:'gray',
    },
    userpic:{
        width:width/7,
        height:width/7,
        borderRadius:width/14,
        marginRight: 15
    },
    wallet:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        height:50,
        borderTopWidth:2,
        borderTopColor:'rgba(0,0,0,0.30)'
    },
    wleft:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft: 10,
    },
    account:{
        height:60,
        width:'100%',
        flexDirection:'row',
        borderTopWidth: 2,
        borderTopColor: 'rgba(0,0,0,0.30)',
        alignItems:'center'
    },
    accounttitle:{
        width:'25%',
        flexDirection:'column',
        alignItems:'center'
    },
    others:{
        boderBottomWidth:8,
        borderBottomColor:'#F3F7FA',
    },
    othersitem:{
        width:'100%',
        height:40,
        flexDirection:'row',
        alignItems:'center'
    }
});