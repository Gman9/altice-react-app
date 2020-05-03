import React, { useState } from 'react';
import './ColorsChoice.scss';

const Colors = {
  SHAMROCK: '#33CC99',
  CURIOUSBLUE: '#3399CC',
  NEONCARROT: '#FF9933',
}

export const ColorsChoice= (handleColors) => {
  const [firstSquareColor, setFirstSquareColor] = useState(Colors.CURIOUSBLUE);
  const [thirdSquareColor, setThirdSquareColor] = useState(Colors.NEONCARROT);

  const handleOncClickFirstSquare = () =>  {
    const tempColor = handleColors.colorChoosed;
    handleColors.handleOnClickColorChoice(firstSquareColor)
    setFirstSquareColor(tempColor)
  }

  const handleOncClickThirdSquare = () =>  {
    const tempColor = handleColors.colorChoosed;
    handleColors.handleOnClickColorChoice(thirdSquareColor)
    setThirdSquareColor(tempColor)
  }

  return(
    <div className="colors-choice">
      <div className="square" style={{"backgroundColor":`${firstSquareColor}`}} onClick={handleOncClickFirstSquare}/>
      <div className="square-frame" style={{"borderColor":`${handleColors.colorChoosed}`}} >
        <div className="square" style={{"backgroundColor":`${handleColors.colorChoosed}`}}/>
      </div>
      <div className="square" style={{"backgroundColor":`${thirdSquareColor}`}} onClick={handleOncClickThirdSquare}/>
    </div>
    )
  }
