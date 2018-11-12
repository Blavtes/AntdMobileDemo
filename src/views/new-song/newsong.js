import React, { Component } from 'react'
import { getDataComponent } from '../../components/getDataComponent'
import CustomeCarousel from './carousel'
import SongList from '../comm/songList'

class NewSong extends Component {



    // comwill
	componentWillMount() {

		// this.props.history.push(`/login/login`)
	}

	render() {
		let {banner} = this.props.data;
		let {data} = this.props.data;

		console.log('####### banner ' + banner);
		return (
			<div>
				<CustomeCarousel banner={banner}></CustomeCarousel>
				<SongList {...this.props} songList={data}/>
			</div>
		)
	}
}

export default getDataComponent('getNewSongs')(NewSong)