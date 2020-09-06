import React from 'react';
import { Switch, Route } from 'react-router-dom'

import hammer from '../images/hammer_640.jpg';
import hammer_1280 from '../images/hammer_1280.jpg';
import justice from '../images/justice_640.jpg';
import justice_1280 from '../images/justice_1280.jpg';
import justice2 from '../images/justice2_640.jpg';
import justice2_1280 from '../images/justice2_1280.jpg';
import lawyers from '../images/lawyers_640.jpg';
import lawyers_1280 from '../images/lawyers_1280.jpg';
import logo from '../images/logo_Emendator.png';


const foto = (name, name1280, alt) => {
   if (window.innerWidth < 800) {
      return <img className="header__img" src={name} alt={alt} />
   } else {
      return <img className="header__img" src={name1280} alt={alt} />
   }
}


const Header = () => {

   return (
      <>
         <Switch>
            <Route path='/' exact render={() => (
               <img className="header__logo" src={logo} alt="law" />
            )} />

            <Route path='/offer' render={() => (
               foto(justice, justice_1280, 'książka')
            )} />

            <Route path='/contact' render={() => (
               foto(justice2, justice2_1280, 'książka2')
            )} />

            <Route path='/download' render={() => (
               foto(lawyers, lawyers_1280, 'law')
            )} />

            <Route render={() => (
               foto(hammer, hammer_1280, 'taka stronia nie istnieje')
            )} />
         </Switch>
      </>);
}

export default Header;