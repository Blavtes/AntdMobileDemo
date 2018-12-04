import NewSong from '../views/new-song/newsong'
import Rank from '../views/rank/rank'
import Plist from '../views/plist/plist'
import Singer from '../views/singer/singer'
import SingerList from '../views/singer/singerList/singerList'
import SingerInfo from '../views/singer/singerInfo/singerInfo'
import PlistInfo from '../views/plist/plistInfo'
import Login from '../login/login'
// 导航区域的配置
export let navConfig = [
  {
    path: '/',
    title: '首页',
    component: NewSong,
    info:{
      order:0
    }
  },
  {
    path: '/rank',
    title: '理财',
    component: Rank,
    info: {
      order: 1
    }
  },
  {
    path: '/plist',
    title: '账户',
    component: Plist,
    info: {
      order: 1
    }
  },
  {
    path: '/singer',
    title: '更多',
    component: Singer,
    info: {
      order: 2
    }
  },
]
export let two = [
  {
    path: '/singer/list/:id',
      search:'/singer/list',
    title: '歌手',
    component: SingerList
  },
  {
    path: '/singer/info/:id',
	  search:'/singer/info',
    title: '歌手信息',
    component: SingerInfo
  },
  {
    path: '/plist/list/:id',
      search:'/plist/list',
    title: '歌单信息',
    component: PlistInfo
  }
]

export let login = [

	{
		path: '/login/login',
		title:'test login',
		component: Login
	}
]

export default [...navConfig, ...two, ...login]