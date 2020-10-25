import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'

function Header() {
  const [inputSearch, setInputSearch] = useState('')

  return (
    <div className='header'>
      <div className='header_left'>
        <MenuIcon />
        <Link to='/'>
          <img
            className='header_logo'
            src='https://www.tcisd.org/uploaded/Departments/Communications_Public_Information/2000px-YouTube_Logo_2017.svg.png'
          />
        </Link>
      </div>
      <div className='header_input'>
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder='Search'
          type='text'
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className='header_searchButton' />
        </Link>
      </div>
      <div className='header_icons'>
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar
          className='header_avatar'
          src='https://image.flaticon.com/icons/png/512/25/25231.png'
        />
      </div>
    </div>
  )
}

export default Header
