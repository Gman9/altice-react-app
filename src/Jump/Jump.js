import React, { useState } from 'react';
import './Jump.scss';
import negFrog from '../assets/images/neg_sapo.png'
import posFrog from '../assets/images/pos_sapo.png'


export const Jump= (color) => {
  const [saltos, setSaltos] = useState(0);

  const handleOnJump= (x) => {
    let X = +document.getElementById('x').value;
    let Y = +document.getElementById('y').value;
    let D = +document.getElementById('d').value;

      console.log(X,Y,D)
    setSaltos(X)
  }

  return (
    <section id="jump" className="jump">
       <div className="jump-rectangle">
        <div className="rectangle"/> <p>O SAPO</p>
      </div>

        <h1 className="jump-title">Deu {saltos} Saltos</h1>

        <div className="jump__content">

          <div className="form">
            <div className="form__cordinates">
              <form name="coordinates">
                <section>
                  <div className="form__cordinates__coordinate">
                    <label>X</label>
                    <input id="x" type="number" min={0}/>
                  </div>
                  <div className="form__cordinates__coordinate">
                    <label>Y</label>
                    <input id="y" type="number" min={0}/>
                  </div>
                  <div className="form__cordinates__coordinate">
                    <label>D</label>
                    <input id="d" type="number" min={0}/>
                  </div>
                  <div className="form_button" onClick={handleOnJump}><span>Dá o salto</span> </div>
                </section>
              </form>
            </div>
          </div>

          {saltos === 0 ?
          <>
            <div className="jump__frog"><img src={negFrog} alt=""/></div>
            <div className="jump__cross"> <div className="cross" style={{"borderColor":`${color.color}`}}/> </div>
          </>
          :
          <>
            <div className="jump__cross"> <div className="cross" style={{"borderColor":`${color.color}`}}/> </div>
            <div className="jump__frog"><img src={posFrog} alt=""/></div>
          </>
          }
        </div>
    </section>

  )
}
