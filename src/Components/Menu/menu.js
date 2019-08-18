import React, { Component } from 'react';
import Logo from '../../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './menu.css';


class Menu extends Component {
    constructor() {
      super();
        this.burger = React.createRef();
        this.mouse = React.createRef();
        this.onClickHandler = this.onClickHandler.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
      }
  
      onClickHandler = () => {
        const node = this.burger.current;
        node.checked = false;
      }

      mouseMove = e =>{
        const node = this.mouse.current;
        node.style.left = e.clientX+"px";
        node.style.top = e.clientY+"px"; 
        
        node.onmouseover = () => {
          node.style.opacity = '.5';
          node.style.width = '50px';
          node.style.height = '50px';
          
        };
        node.onmouseout = () => {
          node.style.opacity = '.1';
          node.style.width = '70px';
          node.style.height = '70px';
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
              <a target="_blank" title="instagram.com/web__addict" href="https://www.instagram.com/web__addict/" rel="noopener noreferrer"><img className="menu__logo" src={Logo} alt="Logo"/></a>
              <div className="menu__nav">
                <input id="burger" ref={this.burger} type="checkbox"/>
                <label htmlFor="burger" className="menu__burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <div id="mouse" ref={this.mouse}></div>
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