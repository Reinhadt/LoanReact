import React, {Component} from 'react'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import Item from './CarouselItem'

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.checkActive = this.checkActive.bind(this);
      }

      //PARA EL CONTADOR DE SLIDER (1/2 2/2 ETC):
      //Inicializo un state local con el active = 1 y el total  = this.props.elements.length
      //cada vez que uso slick.next o prev le sumo o le resto 1
      //si esa cantidad es mayor o igual al length regreso

      state = {
          activo: 1
      }

      checkActive(oper){
          console.log(oper)
          if(this.state.activo >= this.props.elements.length){
              this.setState({ activo: 1 })
          }else if(oper == "pos"){
              this.setState({ activo:  this.state.activo + 1 })
          }else if(oper == "neg"){
              if(this.state.activo == 1){
                this.setState({ activo: this.props.elements.length })
              }else{
                this.setState({ activo: this.state.activo - 1 })
              }
        }
      }

      next() {
        this.checkActive("pos")
        this.slider.slickNext();
      }
      previous() {
        this.checkActive("neg")
        this.slider.slickPrev();
      }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className="carouselCont">
                <Slider ref={c => (this.slider = c)} {...settings} >
                    { this.props.elements.map( (el, index) => {
                        return <Item data={el} key={index} />
                    })}    
                </Slider>
                <div className="botonera">
                    <div className="activo">
                       {this.state.activo}/{this.props.elements.length}
                    </div>
                    
                    <button className="buttonSlider" onClick={this.previous}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button className="buttonSlider" onClick={this.next}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        );
    }
    
}

export default Carousel;