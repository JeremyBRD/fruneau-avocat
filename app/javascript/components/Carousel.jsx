import React, { useState } from "react"

// SCSS
import '../../assets/stylesheets/components/_carousel.scss'

// Import Images
import SpritesPrestations from "../../assets/images/SpritesPrestations.png"
import Path from "../../assets/images/path.svg"
import CarouselArow from "../../assets/images/carousel-arow.svg"

const Carousel = () => {

  let sliderArr = [1, 2, 3, 4];

  const [slideWidth, setslideWidth] = useState(0)

  const moveToNextSlide = () => {
    slideWidth === 0 ? setslideWidth(-870 * (sliderArr.length - 1)) : setslideWidth(slideWidth + 870);
  };

  const moveToPreviousSlide = () => {
    setslideWidth(slideWidth - 870);
    slideWidth === -870 * (sliderArr.length - 1) ? setslideWidth(0) : setslideWidth(slideWidth - 870);
  };

  return (
    <React.Fragment>

      <div className="carousel-and-nav-container">
        <div className="carousel-container">

          <div className="carousel-element" style={{marginLeft: `${slideWidth}px`}} >
            <div className="carousel-presta-info">
              <h3>Droit des étrangers</h3>
              <ul>
                <li>Demande de titre de séjour auprès de la Préfecture</li>
                <li>Obtention de Visa</li>
                <li>Procédure de regroupement familial</li>
                <li>Demande de naturalisation</li>
                <li>Obligation de quitter le territoire</li>
                <li>Interdiction de retour sur le territoire</li>
              </ul>
              <a className='call-contact-form'>
                NOUS CONTACTER
                <img src={ CarouselArow } alt="Flèche vers la droite"/>
              </a>
            </div>
            <img src={ SpritesPrestations } id="globe-carousel" alt="Globe terrester"/>
          </div>

          <div className="carousel-element">
            <div className="carousel-presta-info">
              <h3>Droit de la famille</h3>
              <ul>
                <li>Divorce contentieux</li>
                <li>Divorce accepté</li>
                <li>Divorce par consentement mutuel</li>
              </ul>
              <a className='call-contact-form'>
                NOUS CONTACTER
                <img src={ CarouselArow } alt="Flèche vers la droite"/>
              </a>
            </div>
            <img src={ SpritesPrestations } id="trombones-carousel" alt="Trombones"/>
          </div>

          <div className="carousel-element">
            <div className="carousel-presta-info">
              <h3>Droit administratif</h3>
              <ul>
                <li>Recours contre des décisions administratives</li>
                <li>Recours administratif préalable obligatoire</li>
                <li>Saisine de la Commission d’accès aux documents administratifs</li>
                <li>Engagement de la responsabilité d’une personne publique</li>
                <li>Référé liberté</li>
                <li>Référé suspension</li>
              </ul>
              <a className='call-contact-form'>
                NOUS CONTACTER
                <img src={ CarouselArow } alt="Flèche vers la droite"/>
              </a>
            </div>
            <img src={ SpritesPrestations } id="conseil-etat-carousel" alt="Conseil d'État"/>
          </div>

          <div className="carousel-element">
            <div className="carousel-presta-info">
              <h3>Droit des personnes</h3>
              <ul>
                <li>Responsabilité civile</li>
                <li>Droit pénal</li>
                <li>Propriété intellectuelle</li>
                <li>Rédaction de contrat</li>
              </ul>
              <a className='call-contact-form'>
                NOUS CONTACTER
                <img src={ CarouselArow } alt="Flèche vers la droite"/>
              </a>
            </div>
            <img src={ SpritesPrestations } id="contract-carousel" alt="Contract"/>
          </div>

        </div>

        <div className="nav-carousel-btn">
          <img src={ Path } alt="Boutton précédent" id="previous" className="nav-btn" onClick={ moveToNextSlide } />
          <img src={ Path } alt="Boutton suivant" id="next" className="nav-btn" onClick={ moveToPreviousSlide } />
        </div>

      </div>

    </React.Fragment>
  );
}

export default Carousel
