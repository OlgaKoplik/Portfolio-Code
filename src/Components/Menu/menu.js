import React, { Component } from 'react';
import './menu.css';
import Logo from '../../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

class Menu extends Component {
    constructor() {
      super();
        this.onClickHandler = this.onClickHandler.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
      }
      onClickHandler() {
        document.getElementById("burger").checked = false;
      }
      mouseMove = e =>{
        const mouse = document.getElementById("mouse");
        const text = document.getElementById("burger");
        mouse.style.left = e.clientX+"px";
        mouse.style.top = e.clientY+"px"; 
        text.onmouseover = function() {
          mouse.style.opacity = '0.2';
        };
      }
      render() {
        const menulist = this.props && this.props.menu.map((item => 
        <li key={item.name}>
          <a href={item.url}>
            {item.name}
          </a>
        </li>));
        const socialItems = this.props && this.props.social.map((item => 
          <li key={item.name}>
            <a target={item.target} title={item.title} href={item.href} rel={item.rel}>
              <FontAwesomeIcon className="menu__icon" icon={item.icon} />
            </a>
          </li>));
        return (
            <nav className="menu" onMouseMove={this.mouseMove}>
              <div>
                <a href="#home"><img className="menu__logo" src={Logo} alt="Logo"/></a>
              </div>
              <div className="menu__nav">
                <input id="burger" type="checkbox" />
                <label htmlFor="burger" className="menu__burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <div id="mouse"></div>
                <ul className="menu__list" onClick={this.onClickHandler}>
                    {menulist}
                  </ul>
                <ul className="social__list">
                  {socialItems}
                </ul>
                <div className="bg">   
                </div>
              </div>
          </nav>
          );
    }
}
  
Menu.propTypes = {
  menulist: PropTypes.arrayOf(PropTypes.object),
  socialItems: PropTypes.arrayOf(PropTypes.object)
};

export default Menu;