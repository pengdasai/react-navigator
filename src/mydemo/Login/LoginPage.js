import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View,TextInput,Image,Alert} from 'react-native';

export default class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state={
            sendCodeBtn:'发送验证码',
            username:'',
            pressState:1,
            password:''
        }
    }

    sendCode(){
        //Alert.alert('send code！')
        //接收用户的手机号
        if (this.state.pressState!=1){
            return;
        }else {
            fetch('url',{
                method:'POST',
                body:JSON.stringify({
                    tel:this.state.username
                })
            }).then(data=>{

            });
        }

        let time = 10;
        //设置定时器
        let timer = setInterval(()=>{
            this.setState({
              sendCodeBtn:time+'喵~'
            });
            if (time==0){
                this.setState({
                    sendCodeBtn:'发送验证码'
                });
                clearInterval(timer)
            }
            time--;
        },1000)
    }

    render(){
        return(
            <View style={styles.LoginView}>
                <Image source={require('../../../assets/images/lock.png')} style={styles.Touxiang}/>
                {/*<Text>{this.state.username}</Text>*/}
                <TextInput
                    placeholder = '请输入账号'
                    style={styles.Text}
                    onChangeText={(data)=>{
                        this.setState({
                            username:data
                        })
                    }}
                />
                <TextInput
                    placeholder = '请输入密码'
                    password={true}
                    style={styles.Text}
                    onChangeText={(data)=>{
                        this.setState({
                            password:data
                        })
                    }}
                />
                    <View style={styles.LoginStyle}>
                        <Text
                            style={styles.LoginText}
                            onPress={(data)=>{
                                // Alert.alert('登录了！')
                                //格式化数据
                                let formData = new FormData();
                                formData.append(this.state.username);
                                formData.append(this.state.password);
                                fetch('url',{
                                    method:'POST',
                                    body:JSON.stringify({
                                        formData
                                    })
                                }).then(data=>{
                                    var data_re = JSON.parse(data._bodyInit);
                                    if (data_re!=1){
                                        alert('login fail!')
                                    } else{
                                        alert('login success~')
                                    }
                                });
                            }}
                        >登录</Text>
                    </View>
                <View style={styles.settingStyle}>
                    <Text
                        style={{fontSize:20}}
                        onPress={this.sendCode.bind(this)}
                    >{this.state.sendCodeBtn}</Text>
                    <Text style={{fontSize:20}}>新用户</Text>
                </View>
                <View style={styles.Other}>
                    <Text>其他方式登录:</Text>
                    <Image source={require('../../../assets/images/draw.png')} style={styles.image}></Image>
                </View>
            </View>
        )
    }
}

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    LoginView:{
        flex:1,
        backgroundColor:'#dddddd',
        width:width,
        height:height,
        alignItems:'center',
    },
    Touxiang:{
        width:80,
        height:80,
        borderRadius:40,
        borderWidth:2,
        borderColor:'white',
        marginTop:20,
        marginBottom:20
    },
    Text:{
        height:50,
        width:width-80,
        backgroundColor: 'white',
        borderRadius:40,
        marginBottom: 2,
        textAlign: 'center'
    },
    image:{
        width: 30,
        height: 30,
        borderRadius:40,
        marginLeft: 15
    },
    Other:{
        flexDirection: 'row',
        alignItems:'center',
        position:'absolute',
        bottom:10,
        marginLeft:50
    },
    LoginStyle:{
        width:100,
        height:50,
        backgroundColor:'#A4d3EE',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop:5
    },
    LoginText:{
        //height:50
        fontSize:20
    },
    settingStyle:{
        flexDirection:'row',
        justifyContent: 'space-between',
        width:400,
        marginTop: 5
    }
});