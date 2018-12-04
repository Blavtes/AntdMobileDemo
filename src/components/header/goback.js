import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import PropTypes from "prop-types";

class GoBack extends Component {
	//属性声名
	static propTypes = {
		title: PropTypes.any,
	};
    // constructor()
  render() {
    return (
      <div>
        <NavBar
	        ref='navbar'
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => {
            this.props.history.go(-1);
          }}
        >{this.props.title}</NavBar>
      </div>
    )
  }
}

export default withRouter(GoBack);
