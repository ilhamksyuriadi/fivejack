import React from 'react';
import './Main.scss'
import Navbar from '../component/Navbar';
import Carousel from '../component/Carousel';
import SliderNav from '../component/SliderNav';
import Cards from '../component/Cards';

const Main = () => {
    return (
        <div className="page-layout">
            <div className="main-layout">
                <Navbar></Navbar>
                <Carousel></Carousel>
                <SliderNav></SliderNav>
                <Cards></Cards>
            </div>
        </div>
    )
}

export default Main