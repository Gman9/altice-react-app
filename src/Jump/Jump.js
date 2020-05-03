import React, { useState } from 'react';
import './Jump.scss';
import negFrog from '../assets/images/neg_sapo.png'
import posFrog from '../assets/images/pos_sapo.png'

const Colors = {
  SHAMROCK: '#33CC99',
  CURIOUSBLUE: '#3399CC',
  NEONCARROT: '#FF9933',
}

export const Jump= (color) => {
  const [saltos, setSaltos] = useState('0');
  const [msg, setMsg] = useState('');

  const solution = (x) => {
    let X = +document.getElementById('x').value;
    let Y = +document.getElementById('y').value;
    let D = +document.getElementById('d').value;

    if (X === 0 || Y === 0 || D === 0 ) {
      setMsg('Todos os campos são obrigatórios')
    } else if (color.color === Colors.SHAMROCK && X !==3 ) {
        setMsg('Cor verde X=3')
        return;
      }
      else if (color.color === Colors.CURIOUSBLUE && X > 7 ) {
        setMsg('Cor azul X<=7')
        return;
      }
      else if ( X > Y ) {
        setMsg('X tem que ser menor ou igual a Y')
        return;
      }
      else{
        let saltos = (X+Y)/D
        saltos = parseInt(saltos);
        setSaltos(saltos)
        setMsg('')
      }
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
                    {console.log( color.color === Colors.SHAMROCK)}
                    <label>X</label>
                    <input id="x" type="number" min={0} max={1000000000}/>
                  </div>
                  <div className="form__cordinates__coordinate">
                    <label>Y</label>
                    <input id="y" type="number" min={0} max={1000000000} />
                  </div>
                  <div className="form__cordinates__coordinate">
                    <label>D</label>
                    <input id="d" type="number" min={0} max={1000000000}/>
                  </div>
                  <div className="jump__msg">{msg}</div>
                  <div className="form_button" onClick={solution}><span>Dá o salto</span> </div>
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
