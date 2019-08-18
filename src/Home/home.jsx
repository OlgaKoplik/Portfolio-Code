import React from 'react';
import MyPhoto from '../img/Me.jpg';
import './home.css';


const Home = () =>
    <section className="home container" id="home">
        <div className="home__content">
            <img className="home__img" src={MyPhoto} alt="MyPhoto"/>
            <div className="home__text">
                <span className="home__hello">Hello</span>
                <h1 className="home__p">My name is Olga. I'm a&#160;Front&#8209;end&#160;developer.</h1>
            </div>
        </div>
    </section>

export {Home};