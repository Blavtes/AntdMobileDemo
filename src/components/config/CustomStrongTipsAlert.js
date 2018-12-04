import React, {Component} from 'react';
import {Platform, Text, TouchableOpacity, TouchableNativeFeedback,Image,Button, Dimensions, View, StyleSheet} from "react-native";
import color from "./Color";
import PropTypes from "prop-types";
let {height, width} = Dimensions.get('window');
import  CustomButton from './CustomButton';
import CustomTools from '../Custom/CustomTools';

export default class CustomStrongTipsAlert extends Component {
    //属性声名
    static propTypes = {
        onCloseClick: PropTypes.func,
        title:PropTypes.any,
        onConfirmClick: PropTypes.func,
        content:PropTypes.any,

        confirmTitle: PropTypes.any,
        contentStyle: PropTypes.any,

    };
    //默认属性
    static defaultProps = {

        onConfirmClick: () => {

        },
        title:'',
        onCloseClick: () => {

        },
        content:false,
        confirmTitle: true,
    };


    render(){

        const Touch = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
        let aheight =  200;
        let topHeight = (height - 200 ) / 2;
        return (

            <View style={{left:0,right:0,height:height,backgroundColor:color.whiteAlpha,position: 'absolute'}} >
                <Touch style={{left:0,right:0,height:height,backgroundColor:color.whiteAlpha,position: 'absolute'}}
                       onPress={this.props.onCloseClick}
                >
                </Touch>

                <View style={{left:20,height:aheight,width:width-40,top:topHeight,backgroundColor: color.white,borderRadius:4}}>
                    <View style={{height:40,width:width-40,top:0,justifyContent:'space-evenly'}}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <Touch style={styles.close}
                               onPress={this.props.onCloseClick}
                        >
                            <Image style={styles.close} source={{uri:'Common_LoginClose_Normal_icon'}}/>

                        </Touch>

                    </View>
                    <View style={{backgroundColor:color.grayWhite,width:width-40,height:1}}/>

                    {/*<View style={{height:160,left:20,width:width-40,top:0,justifyContent:'center',alignItems:'center'}}>*/}
                        <Text style={[{height:100,width:width-80,left:20,top:10,fontSize:16,lineHeight:20,color:color.black,textAlign:'left',textAlignVertical:'center',alignItems:'stretch'},this.props.contentStyle]}>{this.props.content}</Text>
                    {/*</View>*/}

                    <CustomButton style={styles.bottom}  onLongPress={()=>{console.log('sssss')}} onPress={this.props.onConfirmClick} title={'确定'} titleTextStyle={{fontSize:16,color:color.white}}>
                    </CustomButton>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({

    close: {
        backgroundColor: color.white,
        position: 'absolute',
        right: 5,
        height: 30,
        width: 30,
        top:0,
        // justifyContent:'flex-end',

    },
    title: {
        color: color.black,
        width: width - 40,
        textAlign:'center',
        fontSize: 16,
        top:0,
    },
    bottom: {
        backgroundColor: color.baseColor,
        left: 0,
        height: 40,
        width: width-80,

    }

});