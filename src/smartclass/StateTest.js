import * as React from 'react';
import {View, Text, Dimensions, Image, Button, Alert} from "react-native";

export default class StateTest extends React.Component{
    constructor(prop){
        super(prop);
        this.state={
            mode:'main'
        }
    }

    render(){
        var page = '';
        if (this.state.mode == 'main'){
            page = (<Text>main</Text>)
        }else {
            page = (<Text>exam</Text>)
        }
        //const page = this.state.mode==='main'?(<Text>main</Text>):(<Text>exam</Text>);
        return(
            <View>
                {page}
                <Button title={'切换模式'} onPress={()=>{
                    this.setState({
                        mode:'exam'
                    })
                }}></Button>
            </View>
        )
    }
}