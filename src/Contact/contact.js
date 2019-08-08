import React, { Component} from 'react';
import {Form} from './form';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email:  '',
            message: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.state.name;
        const email = this.state.email;
        const message = this.state.message;
        document.location = "mailto:o.n.koplik@gmail.com?subject=Portfolio%20Email%20from%20"+name+"/"+email+"&body="+message;
    }
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
                <Form/>
            </div>
        </section>
        )
    }
}

Contact.propTypes = {
    socialItems: PropTypes.arrayOf(PropTypes.object)
};

export default Contact;