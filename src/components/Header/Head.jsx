import layerMiddleImage from "../../../public/layer-middle.png"
import layerBaseImage from "../../../public/layer-base.png"
import layerFrontImage from "../../../public/layer-front.png"
import dungeonImage from "../../../public/biblia.jpg"
import { useEffect } from 'react';



function Heads() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      let scrollY = window.scrollY;
      document.documentElement.style.setProperty('--scrollTop', `${scrollY}px`)
    })
  }, []);
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <header className='header-main'>
            <div className="layers">
              <div className="layer-head">
                <div className="caption">Bem vindo a </div>
                <div className="title">Igreja de Nova Vida</div>
              </div>
              <div className="img-layer layer-base"></div>
              <div className="img-layer layer-mid" ></div>
              <div className="img-layer layer-front" ></div>
            </div>
            <div className='header-top'></div>
          </header>
          <article className="article-main">
            <div className="m-article-content">
              <h2 className="m-header">Palavra do dia:</h2>
              <p className="m-paragraph">"Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar".
                Josué 1:9
              </p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Heads
