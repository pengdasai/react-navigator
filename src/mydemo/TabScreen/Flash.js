import React from 'react';
import { View, Text, Image ,StyleSheet,Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Supported builtin module

export default class Flash extends React.Component{
    render(){
        return(
            <View style={styles.city}>
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
    }
});