import React, { useState } from 'react';
import './NavBar.scss';

import logo from '../assets/images/logo.png'

export const data = ['Lorem','Ipsum','Dolore']
export const sections = ['header','brand','jump']
export const NavBar= () => {
  const [activeItem, setActiveItem] = useState('Lorem');
  const handleOncClick = (activeName) =>  setActiveItem(activeName)

  return (
    <nav className="nav-bar">
      <img className="nav-bar__logo" src={logo} alt="sapo"/>
      <ul id="nav-var-list" className="nav-bar__ul">
        {data.map((text, idx) =>
          <li key={`id-${text}`}>
            <a href={`#${sections[idx]}`}
              className={activeItem === text ? 'active' : ''}
              onClick={() => handleOncClick(text)}
            >
              {text}
            </a>
          </li>
          )
        }
      </ul>
    </nav>
  )
}
