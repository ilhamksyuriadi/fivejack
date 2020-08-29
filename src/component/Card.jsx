import React from 'react';
import './Card.scss';
import Heart from '../assets/logo/heart.png';
import Basket from '../assets/logo/basket.png';
import PerfectWorld from '../assets/image/perfect-world.jpg';

const Card = () =>{
    return (
        <div className="card-body">
            <img src={PerfectWorld} alt="game logo"/>
            <div className="description">
                <h1>Perfect World Mobile</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the 
                    printing and typesetting industry. Lorem 
                    Ipsum has been the industry's standard 
                    dummy text ever since the 1500s, when an 
                    unknown printer took a galley of type and 
                    scrambled it to make a type specimen book.
                </p>
                <div className="logo-wrapper">
                    <img src={Heart} alt="heart logo"/>
                    <img src={Basket} alt="basket logo"/>
                </div>
            </div>
        </div>
    )
}

export default Card;