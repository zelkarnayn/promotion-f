import React from 'react';
// import Responsive from './HomePage/Carousel/Carousel';
import Chemp from './HomePage/chemp/Chemp';
import Gallery from './HomePage/gallery/gallery';
import Life from './HomePage/main/life/Life';
import Main from './HomePage/main/Main';
// import Merch from './HomePage/merch/Merch';
import Points from './HomePage/points/Points';
import Carousel from "./Carousel/Carousel"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
    return (
        <div>
            <Main/>
            <Carousel/>
            <Chemp/>
            {/* <Responsive/> */}
            {/* <Merch/> */}
            <Life/>
            <Points/>
            <Gallery/>
        </div>
    );
};

export default HomePage;