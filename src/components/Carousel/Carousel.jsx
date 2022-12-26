import React, { Component } from "react";
import Slider from "react-slick";
import "../Carousel/Carousel.css"

export default class Responsive extends Component {
  render()
   {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      }
      
    return (
      <div className="slide-item">
        <h2> Новости </h2>
        <Slider {...settings}>
          <div className="slide">
            <img src="https://new.m-1global.com/upload//000/u3/b1/f9/6a3a12b7.jpg" alt="" width={300} />
          </div>
          <div className="slide">
          <img src="https://new.m-1global.com/upload//000/u3/5a/e9/70dbc7f5.jpg" alt="" width={300} />
          </div>
          <div className="slide">
          <img src="https://new.m-1global.com/upload//000/u3/1c/ac/1fe62b39.jpg" alt="" width={300} />
          </div>
          <div className="slide">
          <img src="https://new.m-1global.com/upload//000/u3/d2/c8/6024d9b3.jpg" alt="" width={300} />
          </div>
          <div className="slide">
          <img src="https://new.m-1global.com/upload//000/u3/00/f3/mma-series-10-m-1-online-wkg-azamat-zhumanazarov-protiv-abdul.jpg" alt="" width={300} />
          </div>
          <div className="slide">
          <img src="https://new.m-1global.com/upload//000/u3/52/3c/mma-series-10-m-1-online-wkg-magomed-magomedov-protiv-aslan.jpg" alt="" width={300} />
          </div>
          <div className="slide">
          <img src="https://new.m-1global.com/upload//000/u3/21/3d/m-1-online-predstavljaet-turnir-v-podderzhku-maksima-shugaleja-ph.jpg" alt="" width={300} />
          </div>
          <div className="slide">
          <img src="https://new.m-1global.com/upload//000/u3/e9/17/mma-series-10-m-1-online-wkg-vitalii-tverdohlebov-protiv-ga.jpg" alt="" width={300} />
          </div>
        </Slider>
      </div>
    );
  }
}