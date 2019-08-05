import React from 'react';
import './home.css';
import MyPhoto from '../img/Me.jpg';


const Home = () =>
    <section className="home container" id="home">
        <div className="home__content">
            <img className="home__img" src={MyPhoto} alt="MyPhoto"/>
            <div className="home__text">
                <span className="home__hello">Hello</span>
                <p className="home__p">My name is Olga. I'm Front-end developer.</p>
            </div>
        </div>
    </section>

export {Home};