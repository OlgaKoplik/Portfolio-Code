import React, { Component } from 'react';
import './App.css';
import {Loading} from './Components/Loading/loading';
import Menu from './Components/Menu/menu';
import {Home} from './Home/home';
import {Portfolio} from './Portfolio/portfolio';
import Contact from './Contact/contact';
import {Footer} from './Footer/footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as faEnvelopeRegular } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';

library.add(
    fab,
    faEnvelopeRegular
);

const menu = [
  { name: 'Home', url: '#home' },
  { name: 'Portfolio', url: '#portfolio' },
  { name: 'Contact', url: '#contact' }, 
];
const social = [
  { name: 'o.n.koplik@gmail.com', target: '_self', title: 'send Email', href: 'mailto:o.n.koplik@gmail.com?subject=The%20email%20from%20Portfolio', icon: ['far', 'envelope'], rel:"noopener noreferrer"},
  { name: 'linkedin.com/in/olga-koplik', target: '_blank', title: 'linkedIn/olga-koplik', href: 'https://www.linkedin.com/in/olga-koplik-2b9a38115/', icon: ['fab', 'linkedin-in'], rel:"noopener noreferrer"},
  { name: 'instagram.com/web__addict', target: '_blank', title: 'instagram/web__addict', href: 'https://www.instagram.com/web__addict/', icon: ['fab', 'instagram'], rel:"noopener noreferrer"},
  { name: 'codepen.io/OlgaKoplik', target: '_blank', title: 'codepen.io/OlgaKoplik', href: 'https://www.codepen.io/OlgaKoplik/', icon: ['fab', 'codepen'], rel:"noopener noreferrer"},
  { name: 'github.com/OlgaKoplik', target: '_blank', title: 'github.com/OlgaKoplik', href: 'https://github.com/OlgaKoplik/', icon: ['fab', 'github'], rel:"noopener noreferrer"}, 
];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
    }
  }
  componentDidMount(){
    this.isLoading = setTimeout(()=>{this.setState({isLoading: false})}, 2500); 
  }
  componentWillUnmount(){
    clearTimeout(this.isLoading);
  }

  render() {
    return (
      this.state.isLoading ? (<Loading/>)
      :(<div className="app">
          <Menu social={social} menu={menu} className="menu"/>
          <Home/>
          <Portfolio/>
          <Contact social={social}/>
          <Footer/>
        </div>
          
        )
    );
  }
}

App.propTypes = {
  isLoading: PropTypes.bool
};

export default App;
