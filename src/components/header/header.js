import React, { Component } from 'react'
import TopNav from './topNav'
import Tabbar from '../Tabbar/tabbar'
import GoBack from './goback'
import './header.css'
import {withRouter} from 'react-router-dom'
import { navConfig ,two} from '../../router/config'

class Header extends Component {
  render() {

    // 如果访问的地址在配置文件中，就出现nav
    let item = !!navConfig.find(item => this.props.location.pathname === item.path);

	  !!navConfig.find((item)=> {
		  console.log('#head local pathName->' + this.props.location.pathname + ' item.path ' + item.path);

	  })
	  console.log('#####head local pathName->' + this.props.location.pathname + ' item.path ' + item.path + ' title ' + item.title);
	  let title = '';
	  if (!item)  {
	    // let a  = !!two.find(item => {this.props.location.pathname.contains(item.path)});
		  let self = this;
	    two.forEach(function(v,i,a) {
		    console.log('#####forEach local pathName->' + self.props.location.pathname + ' item.path ' +  v.search + ' title ' + v.title);
		    let path = self.props.location.pathname;

		    if (path.includes(v.search)) {
			    title = v.title;
			    console.log('#####forEach local pathName-> title ' + title);


		    }
	    })

	  }

	  return (
      <div className="header">
        {/*<TopNav/>*/}
        {/* 地址栏中出现配置中任意一个路径，就出现导航 */}
        {
          // item ? <tabbar  /> : <GoBack title={title} />
	        item ? <Tabbar  />: null
        }
        
        
      </div>
    )
  }
}

export default withRouter(Header)
