import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'

import HeaderOption from './HeaderOption'
import logo from './assets/logo.png'
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationIcon from '@material-ui/icons/Notifications'
import { useDispatch } from 'react-redux'
import { auth } from '../../Firebase/firebase'
import { logout } from '../../features/userSlice'
function Header() {
  const dispatch = useDispatch()
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }
  return (
    <div className='header'>
      <div className="header_left">
        <img src={logo} alt="" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder='Search' />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationIcon} title='Notification' />
        <HeaderOption title='me'
          avatar={true} onClick={logoutOfApp}
        />
      </div>

    </div>
  )
}

export default Header
