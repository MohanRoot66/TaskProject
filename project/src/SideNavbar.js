import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function SideNavbar() {
  return (
    <nav>
        <ul className='navbar'>
            <li>
                <div>
                <img src='../Images/images.jpeg' height={50} width={50} style={{borderRadius:'70%'}} alt='company logo'/>
                </div>
            </li>
           
         <li className='item2'>
    Marven McKinney
    <span className='name'>Fund Manager</span>
  </li>

            
            <li>
          <a href="https://twitter.com/your-twitter-handle" style={{marginLeft:115}} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        </ul>
    </nav>
  )
}
