'use strict';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Animated, View, PanResponder,Text, Easing} from 'react-native';
import moment from 'moment';
import  color from './Color';
import CustomTools from "./CustomTools";

export default class CustomFirstButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timestamp: 0
        };
        this.opacityAnimated = new Animated.Value(0);
        this.panResponder = PanResponder.create({
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onStartShouldSetResponder: (e) => true,
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: (e, gesture) => {
            },
            onPanResponderGrant: (evt, gestureState) => {
                CustomTools.log('this.props.status ' + this.props.status);
                if (this.props.status !== '0') {
                    return;
                }
                this._setOpacity(1);
                this.setState({
                    timeStamp: moment()
                });
                this.long_press_timeout = setTimeout(() => {
                    this.props.onLongPress();
                }, 1000);
                this.props.onPress();
            },
            onPanResponderStart: (e, gestureState) => {
            },
            onPanResponderEnd: (e, gestureState) => {
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (e, gesture) => {
                let diff = moment().diff(moment(this.state.timestamp));
                if (diff < 1000) {
                    this.props.onPress();
                }
                clearTimeout(this.long_press_timeout);
                this._setOpacity(0);
                // this.props.releaseBtn(gesture);
            }
        });
    }

    static propTypes = {
        onLongPress: PropTypes.func,
        onPressOut: PropTypes.func,
        onPress: PropTypes.func,
        style: PropTypes.any,
        image: PropTypes.any,
        titleTextStyle:PropTypes.any,
        title:PropTypes.string,
        status:PropTypes.any,
        normalColor: PropTypes.any,
        nonActivatedColor: PropTypes.any,
        notAvailableColor: PropTypes.any,
    };

    _setOpacity(value) {
        if (this.props.status !== '0') {
            return;
        }
        Animated.timing(
            this.opacityAnimated,
            {
                toValue: value,
                duration: 80,
            }
        ).start();
    }

    render() {
        let longPressHandler = this.props.onLongPress,
            pressHandler = this.props.onPress,
            image = this.props.image,
            opacity = this.opacityAnimated.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0.9]
            });
        let backColor = this.props.normalColor;
        if (this.props.status === '1') {
            backColor = this.props.nonActivatedColor;
        } else if (this.props.status === '2') {
            backColor = this.props.notAvailableColor;
        }
        return (

            <View style={{alignItems:'center',justifyContent:'center'}}>
                <Animated.View
                    {...this.panResponder.panHandlers}
                    style={[styles.mainBtn, this.props.style, {opacity: opacity,backgroundColor:backColor}]}>
                    {image}
                    <Text style={[styles.titleText,this.props.titleTextStyle,{alignItems:'stretch'}]}>{this.props.title}</Text>

                </Animated.View>
            </View>
        )
    }
}


const styles = {
    mainBtn: {
        // width: 55,
        // height: 55,
        backgroundColor: '#0bc',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
    },
    titleText : {

    }
};

CustomFirstButton.defaultProps = {
    onPressOut: () => {
        console.log('onPressOut is not defined');
    },
    onLongPress: () => {
        console.log('onLongPress is not defined');
    },
    onPress: () => {
        console.log('onPress is not defined');
    },
    style: {},
    image: null,
    titleTextStyle: styles.titleText,
    // 0 默认
    // 1 未激活
    // 2 不可用
    status: '0',
    normalColor: color.orange,
    nonActivatedColor: color.orangeNotActive,
    notAvailableColor: color.whiteAlpha,
};

