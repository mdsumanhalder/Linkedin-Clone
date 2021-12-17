
import React from 'react'
import { Avatar } from '@material-ui/core'
import bgImage from './assets/bg.jpeg'
import './Sidebar.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
function Sidebar() {
  const user = useSelector(selectUser)
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  )
  return (
    <div className='sidebar'>
      <div className="sidebar_top">
        <img src={bgImage} alt="" />
        <Avatar className='sidebar_avatar' src={user.photoUrl}>{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed your profile</p>
          <p className="sidebar_statNumber">115</p>
        </div>
        <div className="sidebar_stat">
          <p>Connections</p>
          <p className="sidebar_statNumber">473</p>
          {/* <div>Grow your network</div> */}
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem('ReactJS')}
        {recentItem('Design')}
        {recentItem('Software')}
        {recentItem('Developer')}
        {recentItem('Reduc JS')}
      </div>
    </div>
  )
}

export default Sidebar
