import React, { Component } from 'react'
import { getDataComponent } from '../../components/getDataComponent'
import { List } from 'antd-mobile';
import './singer.css'
import { withRouter } from 'react-router-dom'
import TopNavBar from '../../components/config/TopNavBar'
import BaseScreenComponent from '../../components/config/BaseScreenComponent'

const Item = List.Item;

class Singer extends BaseScreenComponent {
	componentWillMount() {
		super.componentWillMount();
		this.setTitleCenter('歌手');
	}
	renderComponent() {
		let {data} = this.props.data;
		return (
			<div>
				{/*<TopNavBar title={'歌手'} hiddenBack={true}/>*/}

				<div style={{position: 'fixed',top:'60px',bottom:'64px',width:'100%', overflow: "scroll"}}>
					<div >
						{
							data.map((item) => {
								return (
									<Item style={{height:'100px'}}
										key={item.classid}
									      arrow="horizontal" onClick={() => {
										console.log('aaa ' + item.classid);
										this.props.history.push(`/singer/list/${item.classid}`)
									}}>
										{item.classname}
									</Item>
								)
							})
						}

					</div>
					<div>
						{
							data.map((item) => {
								return (
									<Item key={item.classid}
									      arrow="horizontal" onClick={() => {
										console.log('aaa ' + item.classid);
										this.props.history.push(`/singer/list/${item.classid}`)
									}}>
										{item.classname}
									</Item>
								)
							})
						}

					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(getDataComponent('getSingers')(Singer)); 