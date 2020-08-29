import React from 'react';
import './Carousel.scss';
import Dot from '../assets/logo/dot.png';
import DotSelected from '../assets/logo/dot-selected.png';

const Carousel = () => {
    return (
        <div className="carousel-layout">
            <div className="content">
                <div className="description">
                    <div className="description-content">
                        <h1>Mobile Legend</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the 
                            printing and typesetting industry. Lorem 
                            Ipsum has been the industry's standard dummy.
                        </p>
                    </div>
                </div>
            </div>
            <div className="dot">
                <img src={Dot} alt="dot" />
                <img src={DotSelected} alt="dot selected" />
                <img src={Dot} alt="dot" />
            </div>
        </div>
    )
}

export default Carousel