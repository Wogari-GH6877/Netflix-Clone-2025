import React from 'react';
import './header.css';
import netflex_logo from '../../assets/images/Logo.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header(){
  return (
    <div className='outer_header_container'>
      <div className='header_container'>
        <div className='header_left'>
          <ul>
            <li><img src={netflex_logo} alt="netflex_logo" width="100"/></li>
            
            <li>Home</li>
            <li>TvShow</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browser By language</li>
            
          </ul>
        </div>
        <div className='header_right'>
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li>
          </ul>

        </div>

      </div>

    </div>
  )
}

export default Header