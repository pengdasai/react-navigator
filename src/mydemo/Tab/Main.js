import React from 'react';
import { View, Text, Image ,StyleSheet,Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Supported builtin module
//import Flash from '../TabScreen/Flash'

export default class Main extends React.Component{
    render(){
        return(
            <View>
                <View style={styles.flash}>
                    {/*轮播图*/}
                    <Image source={require('../../../assets/images/newcapec.jpg')} style={styles.flashPic}/>
                    <View style={styles.city}>
                        <Text style={{marginRight:5}}>城市</Text>
                        <Ionicons
                            name={'ios-home'}
                            size={15}
                        />
                    </View>
                </View>
                <Text style={styles.clean}>------点餐台------</Text>
                {/*四个图片*/}
                <View style={styles.cleanList}>
                        <View style={[styles.cleanItem,styles.one]}>
                            <Text style={styles.cleanTitle}>大米</Text>
                            <Image source={require('../../../assets/images/大米.png')} style={styles.cleanImage}/>
                        </View>
                        <View style={[styles.cleanItem,styles.two]}>
                            <Text style={styles.cleanTitle}>面食</Text>
                            <Image source={require('../../../assets/images/面条.png')} style={styles.cleanImage}/>
                        </View>
                        <View style={[styles.cleanItem,styles.three]}>
                            <Text style={styles.cleanTitle}>汉堡</Text>
                            <Image source={require('../../../assets/images/汉堡.png')} style={styles.cleanImage}/>
                        </View>
                        <View  style={[styles.cleanItem,styles.four]}>
                            <Text style={styles.cleanTitle}>奶茶</Text>
                            <Image source={require('../../../assets/images/奶茶.png')} style={styles.cleanImage}/>
                        </View>
                </View>
                {/*ICONS*/}
                <View style={styles.icons}>
                    <View style={styles.iconitem}>
                        <View style={styles.icon}>
                            <Ionicons
                                name={'ios-home'}
                                size={50}
                            />
                        </View>
                        <Text style={styles.iocntitle}>服务介绍</Text>
                    </View>
                    <View style={styles.iconitem}>
                        <View style={styles.icon}>
                            <Ionicons
                                name={'ios-home'}
                                size={50}
                            />
                        </View>
                        <Text style={styles.iocntitle}>服务介绍</Text>
                    </View>
                    <View style={styles.iconitem}>
                        <View style={styles.icon}>
                            <Ionicons
                                name={'ios-home'}
                                size={50}
                            />
                        </View>
                        <Text style={styles.iocntitle}>服务介绍</Text>
                    </View>
                    <View style={styles.iconitem}>
                        <View style={styles.icon}>
                            <Ionicons
                                name={'ios-home'}
                                size={50}
                            />
                        </View>
                        <Text style={styles.iocntitle}>服务介绍</Text>
                    </View>
                    <View style={styles.iconitem}>
                        <View style={styles.icon}>
                            <Ionicons
                                name={'ios-home'}
                                size={50}
                            />
                        </View>
                        <Text style={styles.iocntitle}>服务介绍</Text>
                    </View>
                </View>
                {/*轮播图*/}
                <View stytle={styles.flashBottom}>
                    <Image source={require('../../../assets/images/newcapec.jpg')} style={styles.bg}/>
                    <View>

                    </View>
                </View>
            </View>
        )
    }
}

const width = Dimensions.get('window').width;

let styles = StyleSheet.create({
    flash:{
        width:width,
        height:width*512/1024,
        //backgroundColor:'pink'
    },
    flashPic:{
        width:width,
        height:width*512/1024,
    },
    city:{
        position:'absolute',
        backgroundColor:'pink',
        width:'16%',
        height:25,
        left:'42%',
        top:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:13,
        flexDirection:'row'
    },
    clean:{
        textAlign: 'center',
        fontSize:20,
        color:'gray',
        marginTop:15
    },
    //四个列表
    cleanList:{
        flexDirection: 'row',
        marginBottom: 15,
        borderBottomWidth:10,
        borderBottomColor:'#F3F7FA'
    },
    //每个图片
    cleanImage:{
        width:'70%',
        height:Dimensions.get('window').width/4*0.65,
    },
    cleanItem:{
        width:'25%',
        alignItems: 'center',
        borderWidth:1,
        borderColor:'#F3F6FD',
        borderLeftWidth:0,
        paddingTop:10,
        paddingBottom:10
    },
    cleanTitle:{
        width:'100%',
        fontSize: 15,
        textAlign: 'center',
        marginBottom:10,
    },
    // one:{
    //
    // }
    icons:{
        flexDirection:'row',
        marginBottom:20
    },
    icon:{
        width:'60%',
        height:width/5*0.6,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10,
    },
    iconitem:{
        width:'20%',
        alignItems:'center',
        borderRadius:10,
        paddingBottom: 5,
        paddingTop: 5
    },
    icontitle:{
        fontSize:15,
        marginTop:5
    },
    flashBottom:{
        width:'100%',
        height:width/3*1.3,
        // borderColor:'blue',
        // borderWidth:2
    },
    bg:{
        width:'100%',
        height:width/3*1.3,
        resizeMode: 'cover'
    }

});