import React, { Component } from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

class Contact extends Component {
    render(){
        const socialItems = this.props && this.props.social.map((item => 
            <li key={item.name}>
                <a target={item.target} title={item.title} href={item.href} rel={item.rel}>
                    <FontAwesomeIcon className="contact__icon" icon={item.icon} />
                    {item.name}
                </a>
            </li>));
        return (
        <section className="contact container" id="contact">
            <h2>Get in touch!</h2>
            <p>Do you fancy saying hello to me or you want to get start your project?<br/> <span>Fell free to contact me.</span></p>
            <div className="contact__block">
                <ul className="contact__list">
                    {socialItems}
                </ul>
                <form className="contact__form">
                    <input type="text" placeholder="name" required/>
                    <input type="email" placeholder="email" required/>
                    <textarea type="text" placeholder="message" required/>
                    <input type="submit" value="send message"/>
                </form>
            </div>
        </section>
        )
    }
}

Contact.propTypes = {
    socialItems: PropTypes.arrayOf(PropTypes.object)
};

export default Contact;