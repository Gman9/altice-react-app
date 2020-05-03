import React from 'react';
import './Contacts.scss';
import contacts from '../assets/images/Retângulo 1.png'


export const Contacts= () => (
  <div className="contacts">
    <div className="contacts__container">
      <a href="https://www.facebook.com/sapo/">
        <img className="contacts__img" src={contacts} alt=""/>
      </a>
    </div>
  </div>
)
