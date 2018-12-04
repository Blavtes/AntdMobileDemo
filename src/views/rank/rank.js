import React, { Component } from 'react'
import { getDataComponent } from '../../components/getDataComponent'
import TopNavBar from '../../components/config/TopNavBar'
import color from '../../components/config/Color'
import BScroll from 'better-scroll'
import { List } from 'antd-mobile';
const Item = List.Item;

class Rank extends Component {

	constructor(props) {
		super(props);
		this.state = {
			arr: []
		};
		this.warper = React.createRef();
	}

	componentDidMount() {
		let arr = [];
		for (var i = 0; i < 100; i++) {
			arr.push(i);
		}

		this.setState({
			arr
		})
		// this.scroll = new BScroll(this.warper.current,{
		//   click: true,
		//   scrollY: true
		// })
	}

	componentDidUpdate(prevProps, prevState) {
		// this.scroll.refresh();
	}

	render() {
		console.log(this.props.data.data);
		let arr = this.props.data.data;
		return (
			<div >
				{/*<div style={{position: 'fixed'}}>txt</div>*/}
				<TopNavBar style={{position: 'fixed',width:"100%",top:'0px',height:'64px',backgroundColor:color.baseColor,fontSize:10,fontColor:color.white}} title={'歌手1'} hiddenBack={true}/>


				<div style={{position: 'fixed',bottom:'60px',top:'64px', overflow: "scroll"}} >
					{
						arr.map(item => {
                            console.log('id ' + item.rankid);
							return (<div>
									<p key={item.rankid}>{item.rankname}</p>
									<img
										style={{width:'375px'}}
										src={item.imgurl.replace('{size}', 400)}
										alt="a"/>
								</div>
							)
						})
					}
				</div>
			</div>
		)
	}
}

export default getDataComponent('getRankList')(Rank)