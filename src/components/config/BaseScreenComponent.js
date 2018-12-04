import React, { Component } from 'react';
import { Icon } from 'antd-mobile'

import color from "./Color";
import TopNavBar from './TopNavBar';

import './BaseScreencomponent.less'

export default class BaseScreenComponent extends Component {
	constructor(props) {
		super(props);
		this.renderComponent = this.renderComponent.bind(this);

		this.state = {

			//title
			isShowRightTxtLeft: false,//title右部左边文字按钮，是否显示
			isShowRightTxtRight: false,//title右部右边文字按钮，是否显示
			isShowRightImgLeft: false,//title右部左边图片按钮，是否显示
			isShowRightImgRight: false,//title右部左边图片按钮，是否显示
			isShowRightBtn: false,//title右部按钮，是否显示
			isShowLeftBtn: false,//title左部按钮，是否显示

			centerTxt: '',//中间title
			leftImg: '',//title左边的图片
			txtLeft: '确定',//title右部，左边文字按钮的文字内容
			txtRight: '',//title右部，右边文字按钮的文字内容
			imgLeft: '',//title右部，左边图片按钮的图片资源
			imgRight: '',//title右部，右边图片按钮的图片资源
			rightBtnTxt: '',//title右部，按钮的文字内容
			rightBtnBgColor: color.primary,//title右部，按钮的背景颜色
			rightBtnTxtColor: color.white,//title右部，按钮的文字颜色

			//pageLoad
			isLoad: true,//是否加载
		};

		this.onClickRightTxtLeft = this.onClickRightTxtLeft.bind(this);
		this.onClickRightTxtRight = this.onClickRightTxtRight.bind(this);
		this.onClickRightImgLeft = this.onClickRightImgLeft.bind(this);
		this.onClickRightImgRight = this.onClickRightImgRight.bind(this);
		this.onClickRightBtnRight = this.onClickRightBtnRight.bind(this);
		this.onClickLeftImg = this.onClickLeftImg.bind(this);
		this.initData = this.initData.bind(this);
	};

	/**
	 * 初始化title
	 */
	initTitle() {

	};

	/**
	 * 网络请求
	 */
	initData() {

	};

	componentDidMount() {
		// console.warn('base componentDidMount');
		this.initTitle();
		this.initData();
		this.setState({isLoad: false});
	};

	/**子类重写需调用 super.componentWillMount
	 *
	 */
	componentWillMount() {
		// this.receiveNotification();
		this.setTitleCenter(this.props[ 'title' ]);
		// console.warn('name ' + this.constructor.name);
		setTimeout(() => {
			this.hiddenTopNavBar();

		}, 500);
	}

	/**隐藏顶部nav 配合重写 renderComponent 方法实现
	 *
	 */
	hiddenTopNavBar() {
		//TODO android
		// RNVCManager.hiddenNavbar({title: {}, rootName: this.props['rootName']});

		// JSBridgeManager.hiddenTopNavBar({title: {}, rootName: this.props['rootName']});
	}

	/**子类调用 super.componentWillUnmount
	 *
	 */
	componentWillUnmount() {
		console.log('/// componentWillUnmount');
	}

	/**
	 * 显示title右部，左边按钮的文字
	 * @param rightTxtLeft
	 */
	setRightTxtLeftVisible = (rightTxtLeft) => {
		this.setState({
			isShowRightTxtLeft: true,
			txtLeft: rightTxtLeft
		});
	};

	/**
	 * 显示title右部，右边按钮的文字
	 * @param rightTxtRight
	 */
	setRightTxtRightVisible = (rightTxtRight) => {
		this.setState({
			isShowRightTxtRight: true,
			txtRight: rightTxtRight
		});
	};

	/**
	 * 显示title右部，左边按钮的图片
	 * @param rightImgLeft
	 */
	setRightImgLeftVisible = (rightImgLeft) => {
		this.setState({
			isShowRightImgLeft: true,
			imgLeft: rightImgLeft
		});
	};

	setShowBackBtn = (back) => {
		this.setState({
			isShowLeftBtn: !back,
		})
	}

	/**
	 * 显示title右部，右边按钮的图片
	 * @param rightImgRight
	 */
	setRightImgRightVisible = (rightImgRight) => {
		this.setState({
			isShowRightImgRight: true,
			imgRight: rightImgRight
		});
	};

	/**
	 * 设置title中间的内容
	 * @param centerContent
	 */
	setTitleCenter = (centerContent) => {
		this.setState({
			centerTxt: centerContent
		})
	};

	/**
	 * 显示title右部按钮
	 * @param rightBtnTxt
	 */
	setRightBtnVisible = (rightBtnTxt) => {
		this.setState({
			isShowRightBtn: true,
			rightBtnTxt: rightBtnTxt,
		});
	};

	/**
	 * 显示title左部，按钮的图片
	 * @param leftImg
	 */
	setLeftImgVisible = (leftImg) => {
		this.setState({
			leftImg: leftImg
		});
	};

	onClickRightTxtLeft() {
		// ToastAndroid.show('onClickRightTxtLeft', ToastAndroid.SHORT)
	};

	onClickRightTxtRight() {
		// ToastAndroid.show('onClickRightTxtRight', ToastAndroid.SHORT)
	};

	onClickRightImgLeft() {
		// ToastAndroid.show('onClickRightImgLeft', ToastAndroid.SHORT)
	};

	onClickRightImgRight() {
		// ToastAndroid.show('onClickRightImgRight', ToastAndroid.SHORT)
	};

	onClickRightBtnRight() {
		// ToastAndroid.show('onClickRightBtnRight', ToastAndroid.SHORT)
	};

	onClickLeftImg() {
		// Actions.pop();
	};

	renderRightButton() {
		console.log('txtLeft：', this.state.isShowRightTxtRight);
		return (
			<div className="view_right">
				{this.state.isShowRightTxtLeft ?
					<div className="title_right"
					     onClick={() => this.onClickRightTxtLeft()}>{this.state.txtLeft}</div>
					: null}

				{this.state.isShowRightTxtRight ?
					<div className="title_right"
					     onClick={() => this.onClickRightTxtRight()}>{this.state.txtRight}</div>
					: null}

				{this.state.isShowRightImgLeft ?
					<Icon className="img_right" source={this.state.imgLeft}
					      onClick={() => this.onClickRightImgLeft()}/>
					: null}

				{this.state.isShowRightImgRight ?
					<Icon className="img_right" source={this.state.imgRight}
					      onClick={() => this.onClickRightImgRight()}/>
					: null}

				{this.state.isShowRightBtn ?
					<div className='btn_right' style={{
						color: color.white, top: 5, textAlign: 'right',
						textAlignVertical: 'center'
					}} onClick={() => this.onClickRightBtnRight()}>
						{this.state.rightBtnTxt}</div>
					: null}
			</div>
		);
	};

	/**
	 * 显示load
	 */
	showLoad() {
		this.setState({
				isLoad: true
			}
		);
	};

	/**
	 * 隐藏load
	 */
	hideLoad() {
		this.setState({
				isLoad: false
			}
		);
	};

	/**
	 * 渲染title
	 * @returns {*}
	 */
	renderTitle = () => {
		return (
			<TopNavBar style={{
				position: 'fixed',
				flex: 1,
				opacity: 1,
				top:'0px',
				color: color.white,
				fontColor: color.white,
				backgroundColor: color.baseColor,
				height: '64px',
				width: '100%'
			}} title={this.state.centerTxt} hiddenBack={this.state.isShowLeftBtn}
			>
				{this.renderRightButton()}
			</TopNavBar>
		)
	};

	/**
	 * 全屏弹窗提示
	 *
	 * */
	tipsViewComponent() {

	}

	/**
	 * 渲染子组件
	 */
	renderComponent() {
	};

	render() {
		return (
			<div>
				{/*<div style={{flex: 1}}>*/}
					{this.renderTitle()}
				{/*</div>*/}
				<div style={{height: '100%', overflow: "scroll"}} >


					{this.state.isLoad ? <Icon type="loading" style={{
							alignItems: 'center', justifyContent: 'center'
						}}/> :
						this.renderComponent()
					}
					{this.tipsViewComponent()}
				</div>
			</div>
		)
	}
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: color.grayWhite,
// 	},
// 	indicator: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		backgroundColor: 'white',
// 	},
// 	title: {
// 		flexDirection: 'row',
// 		alignItems: 'center',
// 		height: 64,
// 		width: "100%",
// 		backgroundColor: color.baseColor,
//
// 		//以下是阴影属性：
// 		shadowOffset: {width: 0, height: 5},
// 		shadowOpacity: 1,
// 		shadowRadius: 15,
// 		shadowColor: color.whiteGray,
// 		//注意：这一句是可以让安卓拥有灰色阴影
// 		elevation: 5,
// 	},
// 	left_img: {
// 		width: 20,
// 		height: 20,
// 		resizeMode: 'center',
// 		marginLeft: 10,
// 	},
// 	txt: {
// 		flex: 1,
// 		textAlign: 'center',
// 		color: color.white,
// 		fontSize: 17,
// 	},
// 	title_right: {
// 		color: color.black,
// 		fontSize: 14,
// 		marginLeft: 10,
// 	},
// 	img_right: {
// 		width: 20,
// 		height: 20,
// 		resizeMode: 'center',
// 		marginLeft: 10,
// 	},
// 	btn_right: {
// 		width: 60,
// 		height: 30,
// 		color: color.white,
// 		// backgroundColor : color.primary,
// 		borderRadius: 5,
// 		right: 0,
// 		top: 30,
// 		position: 'absolute',
// 	},
// 	view_right: {
// 		flexDirection: 'row',
// 		marginRight: 18,
// 	}
// });