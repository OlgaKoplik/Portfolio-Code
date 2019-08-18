import React from 'react';
import Codepen from "react-codepen-embed";
import Golf from '../img/golf.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './portfolio.css';

library.add(
    fab 
);

const works = [
    { name: 'Price List', frame: 'Codepen', class: 'firs', hash: 'QPZxOL', tech: 'HTML, CSS, ReactJS', descr: 'Price List'},
    { name: 'Comment Block', frame: 'Codepen', class: 'second', hash: 'VJodVQ', tech: 'HTML, CSS, ReactJS', descr: 'Comment Block'},
    { name: 'Hover Animation', frame: 'Codepen', class: 'third', hash: 'wLmXGa', tech: 'HTML, CSS', descr: 'Hover Animation'},
    { name: 'Profile Card', frame: 'Codepen', class: 'fourth', hash: 'ZdyKGY', tech: 'HTML, CSS, ReactJS', descr: 'Profile Card with image upload'},
    { name: 'Golf Club', frame: 'iframe', class: 'fifth', src: 'https://olgakoplik.github.io/', imgSrc: Golf, tech: 'HTML5, SASS, AngularJS',descr: 'Golf Club with Registration form'},
];

const skills = [
    { name: 'html', title: 'html', icon: ['fab', 'html5']},
    { name: 'css', title: 'css', icon: ['fab', 'css3-alt']},
    { name: 'js', title: 'js', icon: ['fab', 'js']},
    { name: 'react', title: 'react', icon: ['fab', 'react']},
    { name: 'adobe', title: 'adobe', icon: ['fab', 'adobe']}, 
];

const Portfolio = () =>
    <section className="portfolio container" id="portfolio">
        <div className="portfolio__works">
        <h2>My latest Works</h2>
        <ul className="portfolio__list--work">
            {works.map(((item, key) =>
                <li key={key++} className={"portfolio__item "+item.class+"--work"}>
                    {(item.frame === 'Codepen')?(
                        <article>
                            <Codepen hash={item.hash} user="OlgaKoplik"/>
                            <span>{item.tech}</span>
                            <h3>{item.descr}</h3>
                        </article>
                    ):(
                        <article>
                            <iframe src={item.src} title={item.name}>{item.name}</iframe>
                            <img src={item.imgSrc} alt={item.name}/>
                            <span>{item.tech}</span>
                            <a target="_blank" title={item.src} href={item.src} rel="noopener noreferrer">Go to project</a>
                            <h3>{item.descr}</h3>
                        </article>
                    )}
                </li>    
            ))}
        </ul>
        </div>
        <div className="portfolio__descr">
            <h2 className="portfolio__header">Technology Stack</h2>
            <ul className="portfolio__list--tools">
                {skills.map((item => 
                    <li key={item.name} className={item.name}>
                        <FontAwesomeIcon title={item.title} className="menu__icon" icon={item.icon} />
                    </li>
                ))}
            </ul>
        </div>
    </section>

export {Portfolio};