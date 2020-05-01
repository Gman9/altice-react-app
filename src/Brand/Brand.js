import React, { useState } from 'react';
import './Brand.scss';
import frogStyle from '../assets/images/Retângulo.png';

export const Brand = (color) => {
  const [showText, setShowText] = useState(true);
  const handleOnclick = () => {
    setShowText(!showText)
  }

  return (
    <section id="brand" className="brand">
      <div className="brand-rectangle">
        <div className="rectangle"/> <p>marca</p>
      </div>

       <div><h1 className="brand-title">SAPO</h1><div className="circle" style={{"borderColor":`${color.color}`}}/></div>

        <div className="brand-content">
          <div className="brand-content__img">
            <img src={frogStyle} alt=""/>
          </div>
          <div className="brand-content__text bottom-right">
            <p>Estamos consigo desde 1995, mas ainda mal começámos a tocar o futuro.</p>
            <p>Apostamos na credibilidade, na criatividade, na inovação, na tecnologia e na proximidade.</p>
            {showText && <p>Somos o SAPO, <span style={{"backgroundColor":`${color.color}`}} >vamos tornar a sua vida mais simples, mais informada, mais divertida, mais prática, aqui e em todo o mundo.</span>Queremos estar na sua vida.</p>}
          </div>
        </div>

        <div className="brand-toggle">
         <div className="point" onClick={handleOnclick}></div>
        </div>

        <div className="brand-links">
          <div className="brand-links__manifesto">
            <div className="brand-links__manifesto-abs">
              <a href="https://rd3.videos.sapo.pt/bRi3wOIOTyf2cWDtNkpj?jwsource=cl">
                <div className="manifesto">
                  <span>Manifesto</span>
                </div>
              </a>
            </div>
          </div>
          <div className="brand-links__salto">
            <a href="https://rd3.videos.sapo.pt/niJFYO47fFYMVA638E6a?jwsource=cl">
              <div className="salto">
                <span>O SAPO deu o salto</span>
              </div>
            </a>
          </div>
        </div>
    </section>
  )
}
