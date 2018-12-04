import React, { Component } from 'react'

import { Icon, NavBar } from 'antd-mobile'
import { withRouter } from "react-router-dom"
import PropTypes from "prop-types"
import color from './Color'


class TopNavBar extends Component {

	constructor(props) {
		super(props);
		this.back = this.back.bind(this);
	}

	static propTypes = {
		title: PropTypes.any,
		hiddenBack:PropTypes.bool,
		rightTitle:PropTypes.string,
		rightClick:PropTypes.func,
		showRight:PropTypes.bool,
		leftClick:PropTypes.func,
		style:PropTypes.any,
	};

	static defaultProps = {
		rightClick: () => {},
	};

	back() {
		if (!this.props.hiddenBack) {
			if (this.props.leftClick) {
				this.props.leftClick();
			} else {
				this.props.history.go(-1);
			}
		}
	}

	rightIcon() {
		console.log("###### right " + this.props.showRight + ' title ' + this.props.rightTitle);
		return (this.props.rightTitle ? (<div> <div style={{marginRight: '16px'}}
			                                      onClick={()=>{this.props.rightClick()}}>{this.props.rightTitle}</div></div> ) : null );
	}

	leftIcon() {
		return (this.props.hiddenBack ? null : <Icon type="left" onClik={()=>{this.back()}}/>);
	}

	render() {
		let right = this.rightIcon();
		let left = this.leftIcon();
		return (
			<div style={[{position: 'fixed',width:'100%',height:'64px',backgroundColor:color.baseColor},this.props.style]}>
				<NavBar
					style={this.props.style}
					mode="light"
					leftContent={left}
					// icon={this.leftIcon()}
					// onLeftClick={()=>{this.back()}}
					rightContent={right}
				>
					<div style={{fontSize:18,color:color.white}}>{this.props.title}</div>
				</NavBar>
				{/*<Icon style={{position: 'fixed',marginLeft:'16px'}} type='left' onClick={()=>{this.props.leftClick()}}/>*/}
			</div>

		)

	}
}

export default withRouter(TopNavBar)
