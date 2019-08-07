import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronUp as faChevronUpSolid } from '@fortawesome/free-solid-svg-icons';
  
library.add(
    faChevronUpSolid
);
const Footer = () =>
    <footer className="footer container" id="footer">
        <div>Olga Koplik 2019</div>
        <div className="goBack"><a href="#home"><FontAwesomeIcon className="footer__icon" icon={['fas', 'chevron-up']}/>Go Back </a></div>
    </footer>

export {Footer};