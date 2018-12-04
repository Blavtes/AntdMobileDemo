import React, {Component} from "react";
import PropTypes from "prop-types";
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    TouchableNativeFeedback,
    TouchableOpacity,
    Platform,
    Text,
    TextInput,
    Animated
} from 'react-native';
import color from "./Color";

const {width, height} = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        backgroundColor: color.grayWhite,
        height: 60,
    },
    mainTipsStyle: {
        width: width,
        height: 60,
        // top: -10,
        backgroundColor: color.white,
        flexDirection: 'row',
        alignItems: 'center'

    },

    titleStyle: {
        left: 20,
        color: color.black,
        fontSize: 16
    },
    inputStyle: {
        left: 20,
        width: 240,
        height: 50,
        fontSize: 16,
        color:color.black,
    },
});

export default class CustomWarringTextInputView extends Component {
    //属性声名
    static propTypes = {
        inputEvent: PropTypes.func,//输入事件
        endInputEvent: PropTypes.func,//结束输入事件 失去焦点
        title: PropTypes.string.isRequired,
        icon: PropTypes.element,
        extra: PropTypes.any,
        extraTextStyle: PropTypes.any,
        titleTextStyle: PropTypes.any,
        cellStyle: PropTypes.any,
        underLine: PropTypes.number,
        cellHeight: PropTypes.number,
        rightIcon: PropTypes.element,
        showArrow: PropTypes.bool,
        enableClick: PropTypes.bool,

        tipsTitle: PropTypes.string,//
        tipsTitleStyle: PropTypes.any,
        inputStyle: PropTypes.any,
        focus: PropTypes.bool,
        placeholder: PropTypes.any,//placeholder 信息
        defaultInput: PropTypes.any,
        isShowTips: PropTypes.bool,//是否显示提示
        showMsg: PropTypes.any,//提示信息
        keyBoardType: PropTypes.any,
        triangleImageLeft:PropTypes.any,//三角形偏移
        triangleTextLeft:PropTypes.any,//警告提示 偏移
        //键盘类型
        //{ Cross-platform
        // 'default',
        // 'email-address',
        // 'numeric',
        // 'phone-pad',
        // // iOS-only
        // 'ascii-capable',
        // 'numbers-and-punctuation',
        // 'url',
        // 'number-pad',
        // 'name-phone-pad',
        // 'decimal-pad',
        // 'twitter',
        // 'web-search',
        // // Android-only
        // 'visible-password',}
        textAlign: PropTypes.any,
        maxLength:PropTypes.any,
        borderStyle: PropTypes.any,

    };

    //默认属性
    static defaultProps = {
        underLine: 0,
        cellStyle: null,
        extra: null,
        extraTextStyle: styles.titleText,
        titleTextStyle: styles.titleText,
        title: '投资金额（元）',
        icon: null,
        inputEvent: (text) => {
        },
        endInputEvent: (text) => {

        },
        textAlign:'left',
        tipsTitle: '',
        cellHeight: 60,
        showArrow: true,
        enableClick: true,
        focus: false,
        placeholder: '',
        defaultInput: '',
        isShowTips: false,
        keyBoardType: 'default',
        maxLength:100,
        triangleImageLeft:40,
        triangleTextLeft:20,
    };

    //构造函数
    constructor(props) {
        super(props);
        this.state = { //状态机变量声明
            height: new Animated.Value(60),
            opacity: new Animated.Value(0),
        }
    }

    tipsView() {
        let time = 300;

        if (!this.props.isShowTips) {

            Animated.sequence([
                Animated.timing(this.state.height, {
                    toValue: this.props.cellHeight,
                    duration: time,
                }),
                Animated.timing(this.state.opacity, {
                    toValue: 0,
                    duration: time,
                })
            ]).start();
            return (null);
        }
        Animated.sequence([
            Animated.timing(this.state.height, {
                toValue: this.props.cellHeight + 30,
                duration: time,
            }),

            Animated.timing(this.state.opacity, {
                toValue: 1,
                duration: time,
            })
        ]).start();

        return (
            <Animated.View style={{backgroundColor: color.grayWhite, height: 30}}>
                <Animated.Text style={{
                    left: this.props.triangleTextLeft,
                    width: width - 40,
                    top: 5,
                    // numberOfLines: 2,
                    backgroundColor: color.grayWhite,
                    height: 40,
                    color: color.warring,
                    textAlign: this.props.textAlign,
                    opacity: this.state.opacity,
                }}>
                    {this.props.showMsg}
                </Animated.Text>
                <Animated.Image style={{top:-10,left:this.props.triangleImageLeft,position:'absolute',opacity:this.state.opacity,width:10,height:10}} source={{uri:'tips_warring.png'}}/>
            </Animated.View>

        );
    }

    render() {

        return (
            <Animated.View style={[styles.container, {height: this.state.height}]}>
                <View style={[styles.mainTipsStyle,{height:this.props.cellHeight},this.props.borderStyle]}>
                    <Text style={[styles.titleStyle, this.props.titleTextStyle]}>{this.props.title}</Text>
                    <TextInput
                        style={[styles.inputStyle]}
                        placeholder={this.props.placeholder}
                        keyboardType={this.props.keyBoardType}
                        maxLength={this.props.maxLength}
                        onChangeText={(text) => {
                            this.props.inputEvent(text)
                        }}
                        onEndEditing={(text) => {
                            this.props.endInputEvent(text)
                        }}
                        autoFocus={this.props.focus}>{this.props.defaultInput}</TextInput>
                </View>
                {this.tipsView()}
            </Animated.View>
        );
    }
}