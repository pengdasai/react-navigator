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
                            size={22}
                            style={[styles.othericon,styles.icon1]}
                        />
                        <View style={{flexDirection:'row',alignItems:'center',width:'90%',justifyContent:'space-between',marginRight:10,}}>
                            <Text style={{fontSize:18,color:'rgba(0,0,0,0.3)'}}>我的地址</Text>
                            <Text style={{fontSize:18,color:'rgba(0,0,0,0.3)'}}> >>> </Text>
                        </View>
                    </View>

                    <View style={styles.othersitem}>
                        <Ionicons
                            name={'ios-home'}
                            size={22}
                            style={[styles.othericon,styles.icon2]}
                        />
                        <View style={{flexDirection:'row',alignItems:'center',width:'90%',justifyContent:'space-between',marginRight:10}}>
                            <Text style={{fontSize:18,color:'rgba(0,0,0,0.3)'}}>推荐有奖</Text>
                            <Text style={{fontSize:18,color:'rgba(0,0,0,0.3)'}}> >>> </Text>
                        </View>
                    </View>

                    <View style={styles.othersitem}>
                        <Ionicons
                            name={'ios-home'}
                            size={22}
                            style={[styles.othericon,styles.icon3]}
                        />
                        <View style={{flexDirection:'row',alignItems:'center',width:'90%',justifyContent:'space-between',marginRight:10}}>
                            <Text style={{fontSize:18,color:'rgba(0,0,0,0.3)'}}>积分商城</Text>
                            <Text style={{fontSize:18,color:'rgba(0,0,0,0.3)'}}> >>> </Text>
                        </View>
                    </View>

                    <View style={styles.othersitem}>
                        <Ionicons
                            name={'ios-home'}
                            size={22}
                            style={[styles.othericon,styles.icon4]}
                        />
                        <View style={{flexDirection:'row',alignItems:'center',width:'90%',justifyContent:'space-between',marginRight:10}}>
                            <Text style={{fontSize:18,color:'rgba(0,0,0,0.3)'}}>快速配送</Text>
                            <Text style={{fontSize:18,color:'rgba(0,0,0,0.3)'}}> >>> </Text>
                        </View>
                    </View>
                </View>

                {/*意见反馈和更多*/}
                <View style={styles.others}>
                    <View style={styles.othersitem}>
                        <Ionicons
                            name={'ios-home'}
                            size={22}
                            style={[styles.othericon,styles.icon6]}
                        />
                        <View style={{flexDirection:'row',alignItems:'center',width:'90%',justifyContent:'space-between',marginRight:10,}}>
                            <Text style={{fontSize:18,color:'rgba(0,0,0,0.3)'}}>意见反馈</Text>
                            <Text style={{fontSize:18,color:'rgba(0,0,0,0.3)'}}> >>> </Text>
                        </View>
                    </View>

                    <View style={styles.othersitem}>
                        <Ionicons
                            name={'ios-home'}
                            size={22}
                            style={[styles.othericon,styles.icon7]}
                        />
                        <View style={{flexDirection:'row',alignItems:'center',width:'90%',justifyContent:'space-between',marginRight:10,}}>
                            <Text style={{fontSize:18,color:'rgba(0,0,0,0.3)'}}>更多</Text>
                            <Text style={{fontSize:18,color:'rgba(0,0,0,0.3)'}}> >>> </Text>
                        </View>
                    </View>
                </View>
                {/*客服*/}
                <View style={styles.service}>
                    <Ionicons
                        name={'ios-home'}
                        size={30}
                        style={[styles.othericon,styles.icon7]}
                    />
                    <Text style={{paddingLeft:10,}}>联系我...</Text>
                </View>
                {/*填充*/}
                <View style={styles.service}>
                    <Ionicons
                        name={'ios-home'}
                        size={30}
                        style={[styles.othericon,styles.icon7]}
                    />
                    <Text style={{paddingLeft:10,}}>版权所有@newcapec</Text>
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
        // borderTopWidth:6,
        // borderTopColor:'rgba(0,0,0,0.10)'
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
        borderTopWidth: 8,
        borderTopColor: '#F3F7FA',
        alignItems:'center'
    },
    accounttitle:{
        width:'25%',
        flexDirection:'column',
        alignItems:'center'
    },
    others:{
        borderBottomWidth:8,
        borderBottomColor:'#F3F7FA',
    },
    othersitem:{
        width:'100%',
        height:60,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)',
    },
    othericon:{
        marginLeft:10,
    },
    icon1:{
        color:'#32caea'
    },
    icon2:{
        color:'#ff9384'
    },
    icon3:{
        color:'#47d862'
    },
    icon4:{
        color:'#32caea'
    },
    icon5:{
        color:'#65a6ff'
    },
    icon6:{
        color:'#32adca'
    },
    icon7:{
        color:'#98adca'
    },
    service:{
        height:60,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:8,
        borderBottomColor:'#F3F7FA',
    }
});