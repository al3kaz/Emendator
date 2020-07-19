import React from 'react';
import { Switch, Route } from 'react-router-dom'
import '../styles/Header.css';

import book1 from '../images/book1.jpg';
import book2 from '../images/book2.jpg';
import hammer from '../images/hammer.jpg';
import law from '../images/law.jpg';

const Header = () => {
   return (
      <>
         <Switch>
            <Route path='/' exact render={() => (
               <img src={law} alt="law" />
            )} />

            <Route path='/offer' render={() => (
               <img src={book1} alt="ksiazki" />
            )} />

            <Route path='/contact' render={() => (
               <img src={book2} alt="ksiazki" />
            )} />

            <Route path='/download' render={() => (
               <img src={hammer} alt="młot" />
            )} />

            <Route render={() => (
               <img src={law} alt="taka strona nie istnieje" />
            )} />
         </Switch>
      </>);
}

export default Header;