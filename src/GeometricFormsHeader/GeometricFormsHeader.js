import React from 'react';
import './GeometricFormsHeader.scss';


export const GeometricFormsHeader= (color) => {

  return (
   <div className="geometric-forms">
      <div><div className="circle-one" style={{"borderColor":`${color.color}`}} /></div>
      <div className="triangle-container" style={{"borderColor":`${color.color}`}}><div className="triangle-one" style={{"borderColor":`${color.color}`}}/></div>
      <div className="rectangles"><div className="rectangle-one" style={{"borderColor":`${color.color}`}}/> <div className="rectangle-two" style={{"borderColor":`${color.color}`}}/></div>
      <div className="triangle-circle">
        <div className="triangle-circle-container" style={{"borderColor":`${color.color}`}}><div className="triangle-one" style={{"borderColor":`${color.color}`}}/></div>
        <div><div className="circle-two" style={{"borderColor":`${color.color}`}}/></div>
      </div>
   </div>
  )
}
