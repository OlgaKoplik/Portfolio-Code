import React, { useState } from "react";

const Form=()=> {  
    const [inputs, setInputs] = useState({name: '', email: '', message: ''});

    const handleInputChange = (e) => {
        e.persist();
        setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}));
    }

    const sendMessage = (e) => {
        if (e) e.preventDefault();
        const message = inputs.message
        const messageEnter = message.replace(/\r\n|\r|\n/g,"%0D%0A");
        const request = "mailto:o.n.koplik@gmail.com?subject=Portfolio%20Email%20from%20"
            +inputs.name+"/"
            +inputs.email+"&body="
            +messageEnter;
        document.location = request;
    }
    return (   
        <form onSubmit={e=>sendMessage(e)} className="contact__form">
            <input value={inputs.name} onChange={e=>handleInputChange(e)} type="text" name="name" placeholder="name" title="Your name" maxLength="50" required/>
            <input value={inputs.email} onChange={e=>handleInputChange(e)} type="email" name="email" placeholder="email" title="Your email" maxLength="50" required/>
            <textarea value={inputs.message} onChange={e=>handleInputChange(e)} type="text" name="message" placeholder="message" title="Your message" maxLength="550" required/>
            <input type="submit" value="send message"/>
        </form> 
    )
}

export {Form};