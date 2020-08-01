import React from 'react';
import { Switch, Route } from 'react-router-dom'
import '../styles/Header.css';

import hammer from '../images/hammer_640.jpg';
import justice from '../images/justice_640.jpg';
import justice2 from '../images/justice2_640.jpg';
import lawyers from '../images/lawyers_640.jpg';
import logo from '../images/logo_Emendator.png';

const Header = () => {
   return (
      <>
         <Switch>
            <Route path='/' exact render={() => (
               <img src={logo} alt="law" />
            )} />

            <Route path='/offer' render={() => (
               <img src={justice} alt="ksiazki" />
            )} />

            <Route path='/contact' render={() => (
               <img src={justice2} alt="ksiazki" />
            )} />

            <Route path='/download' render={() => (
               <img src={lawyers} alt="młot" />
            )} />

            <Route render={() => (
               <img src={hammer} alt="taka strona nie istnieje" />
            )} />
         </Switch>
      </>);
}

export default Header;