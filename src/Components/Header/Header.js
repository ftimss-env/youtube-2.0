import React from 'react'
import Hamburger from './Hamburger/Hamburger'
import logo from '../../images/youtube-logo.svg'
import YouTubeIcon from '@material-ui/icons/YouTube';
import Search from './Search/Search'
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import './Header.css'


function Header() {
  return (
      <div className="header__info">
          <div className="header__left">
            <Hamburger />
            <YouTubeIcon />
          </div>

          <div className="header__center">
              <Search/>

          </div>

          <div className="header__right">
              <VideoCallOutlinedIcon />
              <NotificationsNoneOutlinedIcon />
              <AppsOutlinedIcon />
              <AccountCircleOutlinedIcon />
          </div>
      </div>
  )
}

export default Header