import React, { useState } from 'react';
import './App.scss';
import { NavBar } from './NavBar/NavBar'
import { Brand } from './Brand/Brand';
import { Jump } from './Jump/Jump';
import { Contacts } from './Contacts/Contacts';
import { ColorsChoice } from './ColorsChoice/ColorsChoice';
import { GeometricFormsHeader } from './GeometricFormsHeader/GeometricFormsHeader';
import bigFrog from './assets/images/BigFrog.png'

const Colors = {
  SHAMROCK: '#33CC99',
  CURIOUSBLUE: '#3399CC',
  NEONCARROT: '#FF9933',
}

export const App = () => {
  const [color, setColor] = useState(Colors.SHAMROCK);
  return (
    <div className="app">
      <header id="header" className="app-header">
        <NavBar/>
        <section className="colors-forms">
          <ColorsChoice colorChoosed={color} handleOnClickColorChoice={(color) =>  setColor(color)}/>
          <GeometricFormsHeader color={color}/>
        </section>
        <img className="big-frog-img" src={bigFrog} alt=""/>

      </header>
      <Brand color={color}/>
      <Jump color={color}/>
      <footer>
        <Contacts/>
      </footer>
    </div>
  );
}

export default App;
