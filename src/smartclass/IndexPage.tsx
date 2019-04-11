import * as React from 'react';
import {View,Text,Dimensions,Image} from "react-native";
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default class IndexPage extends React.Component{

    constructor(props:string){
        super(props);
        this.state={
            msg:''
        }
    }

    render(){
        return(
            <View style={{
                alignItems:'center',
            }}>
                {/*最上面*/}
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    backgroundColor:'pink',
                    height:height*0.15,
                    width:width,
                    borderBottomWidth:6,
                    borderBottomColor:'#F3F7FA'
                }}>
                    <Text style={{fontSize:20,marginLeft:10,marginTop:10}}>2105教室</Text>
                    <View style={{
                        marginRight:20,
                        marginTop:10,
                        alignItems:'center'
                    }}>
                        <Text style={{fontSize:20}}>11:43:46</Text>
                        <Text>2019年4月10日 星期三</Text>
                    </View>
                </View>
                {/*中间*/}
                <View style={{
                    height:height*0.5,
                    width:width,
                    backgroundColor:'#D1D1D1',
                    flexDirection:'row',
                    justifyContent:'space-between'
                }}>
                    {/*中间左边*/}
                    <View style={{
                        width:width*0.65,
                        borderRightWidth:6,
                        borderRightColor:'#F3F7FA',
                        justifyContent:'space-between'
                    }}>
                        {/*上面*/}
                        <View
                            style={{
                                height:height*0.5*0.7,
                                backgroundColor:'rgb(224,118,66)',
                                borderBottomWidth:6,
                                borderBottomColor:'#F3F7FA',
                                flexDirection:'row',
                                justifyContent:'space-between'
                            }}>
                            {/*中间左边上面左面*/}
                            <View style={{
                                width:width*0.65*0.6,
                                backgroundColor:'rgb(224,118,66)',
                                // borderRightWidth:6,
                                // borderRightColor:'#F3F7FA',
                            }}>
                                <View style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
                                    <Image source={require('../../assets/images/draw.png')} style={{height:30,width:30}}/>
                                    <Text style={{fontSize:20,marginLeft:10}}>社会学概论</Text>
                                </View>
                                <View style={{marginLeft:10,marginTop:10,flexDirection:'row'}}>
                                    <Text style={{marginRight:70,fontSize:20}}>课节  1-2节</Text>
                                    <Text style={{fontSize:20}}>时间  8:00-8:45</Text>
                                </View>
                                <Text style={{marginLeft:10,marginTop:10,fontSize:20}}>教师  彭赛赛</Text>
                                <Text style={{marginLeft:10,marginTop:10,fontSize:20}}>班级  网络工程1502</Text>
                            </View>
                            <View>
                                <View style={{flexDirection:'row',marginTop:15,alignItems:'center',marginRight:15}}>
                                    <Image source={require('../../assets/images/lock.png')} style={{height:80,width:80,borderRadius:40}}/>
                                    <View>
                                        <Text>
                                            考勤时间
                                        </Text>
                                        <Text>2019年4月10日</Text>
                                        <Text>2019年4月10日</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/*下面*/}
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row',marginBottom:25,marginLeft:10}}>
                                <Text style={{fontSize:18}}>应到人数:50      </Text>
                                <Text style={{fontSize:18}}>实到人数:45      </Text>
                                <Text style={{fontSize:18}}>出勤率:90%       </Text>
                            </View>
                            <Text style={{marginBottom:25,marginRight:10,fontSize:18}}>查看缺勤名单>>></Text>
                        </View>
                    </View>
                    {/*中间右边*/}
                    <View>
                        <View style={{flexDirection:'row',alignItems:'center',marginRight:150}}>
                            <Image source={require('../../assets/images/print.png')} style={{width:40,height:40,marginRight:10}}/>
                            <Text style={{fontSize:15}}>待进行课程</Text>
                        </View>
                        <Text>
                            此处是时间轴...待开发
                        </Text>
                    </View>
                </View>
                {/*最下面*/}
                <View style={{
                    backgroundColor:'#8DEEEE',
                    width:width,
                    height:height*0.35,
                    borderTopWidth:6,
                    borderTopColor:'#F3F7FA',
                    flexDirection:'row'
                }}>
                    <View style={{
                        width:width*0.27,
                        borderRightWidth:6,
                        borderRightColor:'#F3F7FA',

                    }}>
                        <Image source={require('../../assets/images/newcapec.jpg')} style={{
                            height:height*0.35*0.4,
                            width:width*0.263
                        }}/>
                        <Text>
                            2019年1月6日，新开普与蚂蚁金服全资子公司上海云鑫创业投资有限公司正式达成战略合作，
                            上海云鑫成为新开普第二大股东。
                        </Text>
                    </View>
                    <View style={{
                        width:width*0.27,
                        borderRightWidth:6,
                        borderRightColor:'#F3F7FA',

                    }}>
                        <Image source={require('../../assets/images/newcapec.jpg')} style={{
                            height:height*0.35*0.4,
                            width:width*0.263
                        }}/>
                        <Text>
                            2019年1月6日，新开普与蚂蚁金服全资子公司上海云鑫创业投资有限公司正式达成战略合作，
                            上海云鑫成为新开普第二大股东。
                        </Text>
                    </View>
                    <View style={{
                        width:width*0.27,
                        borderRightWidth:6,
                        borderRightColor:'#F3F7FA',

                    }}>
                        <Image source={require('../../assets/images/newcapec.jpg')} style={{
                            height:height*0.35*0.4,
                            width:width*0.263
                        }}/>
                        <Text>
                            2019年1月6日，新开普与蚂蚁金服全资子公司上海云鑫创业投资有限公司正式达成战略合作，
                            上海云鑫成为新开普第二大股东。
                        </Text>
                    </View>
                    <View style={{
                        width:width*0.49,
                    }}>
                        <Text style={{fontSize:20,marginTop:55,marginLeft:20}}>
                            查看更多>>>
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}