import React from 'react';
import './portfolio.css';
import Codepen from "react-codepen-embed";
import Golf from '../img/golf.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(
    fab 
);
const Portfolio = () =>
    <section className="portfolio container" id="portfolio">
        <div className="portfolio__works">
            <h2>My latest Works</h2>
            <ul className="portfolio__list--work">
                <li className="portfolio__item firs--work">
                    <Codepen hash="QPZxOL" user="OlgaKoplik"/>
                    <span>HTML, CSS, ReactJS</span>
                    <h3>Price List</h3>
                </li>
                <li className="portfolio__item second--work">
                    <Codepen hash="VJodVQ" user="OlgaKoplik"/>
                    <span>HTML, CSS, ReactJS</span>
                    <h3>Comment Block</h3>
                </li>
                <li className="portfolio__item third--work">
                    <Codepen hash="wLmXGa" user="OlgaKoplik"/>
                    <span>HTML, CSS</span>
                    <h3>Hover Animation</h3>
                </li>
                <li className="portfolio__item fourth--work">
                    <Codepen hash="ZdyKGY" user="OlgaKoplik"/>
                    <span>HTML, CSS, ReactJS</span>
                    <h3>Profile Card with image upload</h3>
                </li>
                <li className="portfolio__item fifth--work">
                    <iframe src="https://olgakoplik.github.io/" title="Golf Club"></iframe>
                    <img src={Golf} alt="GolfClub"/>
                    <span>HTML5, SASS, AngularJS</span>
                    <a target="_blank" title="olgakoplik.github.io" href="https://olgakoplik.github.io/" rel="noopener noreferrer">Go to project</a>
                    <h3>Golf Club with Registration form</h3>
                </li>
            </ul>
        </div>
        <div className="portfolio__descr">
            <h2 className="portfolio__header">Stack of Technology</h2>
            <ul className="portfolio__list--tools">
                <li className="html"><FontAwesomeIcon icon={['fab', 'html5']} /></li>
                <li className="css"><FontAwesomeIcon icon={['fab', 'css3-alt']} /></li>
                <li className="js"><FontAwesomeIcon icon={['fab', 'js']} /></li>
                <li className="react"><FontAwesomeIcon icon={['fab', 'react']} /></li>
                <li className="adobe"><FontAwesomeIcon icon={['fab', 'adobe']} /></li>
            </ul>
        </div>
    </section>

export {Portfolio};