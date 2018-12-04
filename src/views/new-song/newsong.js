import React, { Component } from 'react'
import http from "../../http";
import CustomTools from "../../components/config/CustomTools";

export default class NewSong extends Component {

	// comwill
	componentWillMount() {
		// request({
		// 	url:'/posttest',
		// 	method:'post',
		// }).then(function(res){
		// 	console.log(res)
		// })
		http.login('13538101303', 'aaa111', function (data) {
			console.log('data ' + data);
		}, function (error) {
			console.log('error ' + error);
		}, function (fail) {
			console.log('fail ' + fail);
		});
		// http.getHomeLists(function (data) {
		// 	console.log('data ' + data);
		// }, function (error) {
		// 	console.log('error ' + error);
		// }, function (fail) {
		// 	console.log('fail ' + fail);
		// });
		// this.props.history.push(`/login/login`)
	}

	render() {
		// let data = this.props.data;
		// // let {data} = this.props.data;
		// // let  banner = {};
		// // let data = {};
		// console.log('####### banner ' + JsonUtils.objToJson(data));
		return (
			<div>
				{/*<CustomeCarousel banner={banner}></CustomeCarousel>*/}
				{/*<SongList {...this.props} songList={data}/>*/}
			</div>
		)
	}
}

// export default getDataComponent('getHomeLists')(NewSong)