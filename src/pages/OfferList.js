import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Offer.css'

const products = ["Dochodzenie roszczeń", "Informacja gospodarcza", "Weryfikacja osób i firm", "Usługi organizacyjno-prawne", "Oferta współpracy", "Firmy współpracujące"]

const OfferList = () => {

   const list = products.map(product => (
      <li key={product}>
         <Link to={`/offer/${product}`}>{product}</Link>
      </li>
   ))

   return (
      <nav className="offer">
         <ul>
            {list}
         </ul>
      </nav>
   );
}

export default OfferList;