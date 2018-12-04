import React, { Component } from 'react'
import TopNavBar from '../components/config/TopNavBar';
import CustomTools from "../components/config/CustomTools";


export default class login extends Component {

    componentWillMount() {


	    // var data = "{\"list\":[{\"finishTime\":\"2018-11-21 17:59:07.007\",\"lastPageId\":\"com.xxx.app.ui.fragments.RecommendFragment\",\"pageId\":\"com.xxx.app.ui.activities.MainActivity\",\"sessionId\":\"f61131fc903246f88af9a441eac0eea8\",\"startTime\":\"2018-11-21 17:59:07.007\",\"userId\":\"113730\"},{\"finishTime\":\"2018-11-21 17:59:07.007\",\"lastPageId\":\"com.xxx.app.ui.activities.MainActivity\",\"pageId\":\"com.xxx.app.ui.fragments.RecommendFragment\",\"sessionId\":\"f61131fc903246f88af9a441eac0eea8\",\"startTime\":\"2018-11-21 17:59:07.007\",\"userId\":\"113730\"}],\"total\":2,\"type\":0}";
	    //
	    //
	    //
	    // console.log(CustomTools.cryptoEncrypted(data));
	    //
	    //
	    // var encryptedBase64Str = "Ur81iOKPtqYw/iroz9XRBnf7awGh38yJtmrl64LVG7sfRCnm4bsBPzXG0oHDIvYTD5wpgs9lAfKm2nVPo0ruX1RTIeDLWLG+4FjmPoCNd7Kr2/CPLerOV+paNsFK4h3+oznW+rhbdNpqLoyAaLsogfsxu6iUSeRH25ubCf19obOf6G/sNwTdfjyQBuEQVuPiuee6/KhscXjBXmUIWdrngenpymcj/i0xpmgpP7wrAqciuauxyPdq5pt8cdXKgsvId/HzRJ9N0RhfssuT4lHxalXHwK0A4Xp9reOvhNzTBRLUGWZm8AHd6wILYTlbOodAilibmZgLIxI+eMxNbLg6V9fEoQ2/YYEmhZAZPuai4/VFcALrKPvnfy4etzBU0eAwMO09QKmbfLA7RGnqNC/MzrpSnmByD/5p48vPKM3aBUCiZ35BdAX7jSaJaOmyqUu5OLz1f08xvMMT4CnutCGJt1fbbfEC+HeMRNbL+yKNemjpk/Ni6jIFDTo00wIZbPNDoG1er4hzFdNneRSMPZ0cCGH3OCD/++OtsenfLWxv1twlbsDjb4EalqupTJFSC0T/14PSC5fk1zl0+Et5V9Akk8WbhPGNAyWlS0ZS/CJ2qoLKv4tigjAPI3DfAn1+4MPOUVRcfQvlTNE4LYPn+1xvNZO8JvG08p4dqYmJpsnm+JkmfX4f/c/Y4T8XwI0ls02ej1+60iPyuMOHMlpM55ZeAw==";
	    //
	    // console.log(CustomTools.cryptoDecrypted(encryptedBase64Str));

    }

	render() {
		// let {info,data} = this.props.data;
		console.log('####### login');
		return (
			<div>
				<TopNavBar hiddenBack={true} rightTitle={'完成'} rightClick={() => {
					this.props.history.go(-1)
				}}></TopNavBar>
				PlistInfosassss
			</div>
		)
	}
}

// export default getDataComponent('getSingerInfo',function(props){
//   return {
//     singerid: props.match.params.id
//   }
// })(login);