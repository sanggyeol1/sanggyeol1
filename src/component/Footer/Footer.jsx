import React from 'react'
import './Footer.style.css'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
  return (
    <div className='footer-box'>
      <div>
        <div className='footer-icon-box'>
          <a href="https://github.com/sanggyeol1">
            <FontAwesomeIcon className='footer-icon' icon={faGithub} />
          </a>
          <a href="https://www.instagram.com/sanggyeolhan/">
            <FontAwesomeIcon className='footer-icon' icon={faInstagram} />
          </a>
        </div>
        <div><strong>© 2024. Han Sang Gyeol. All rights reserved.</strong></div>
      </div>
    </div>
  )
}

export default Footer