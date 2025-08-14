import React from 'react';
import "./Footer.css";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer () {
  return (
    <div className='outer_footer_container'>
      <div className='footer_container'>

        <div className='column one'>
          <div className='media_icons'>
          <ul>
            <li><FacebookIcon /></li>
            <li><InstagramIcon /></li>
            <li><YouTubeIcon /></li>
            
          </ul>

        </div>
          <ul>
            <li>Audio description</li>
            <li>Investor Relation</li>
            <li>Legal Notice</li>
            <li><input name="Search" placeholder='Service Code'/></li>
            <li>&copy;2025</li>
            
            
          </ul>
        </div>

        <div className='column two'>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferance</li>
          
          </ul>
        </div>

        <div className='column three'>
          <ul>
            <li>Gift Card</li>
            <li>Term of Use</li>
            <li>Corporate information</li>
          
          </ul>
        </div>

        <div className='column four'>
          <ul>
            <li>Media Center</li>
            <li>privacy</li>
            <li>Contact Us</li>
          
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Footer