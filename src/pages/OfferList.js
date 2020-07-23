import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Offer.css'

const products = [
   {
      name: "Dochodzenie roszczeń",

   },
   {
      name: "Informacja gospodarcza",

   },
   {
      name: "Weryfikacja osób i firm",

   },
   {
      name: "Usługi organizacyjno-prawne",

   },
   {
      name: "Oferta współpracy",

   },
   {
      name: "Firmy współpracujące",

   },
]
const OfferList = () => {

   const list = products.map(product => (
      <li key={product.name}>
         <Link to={`/offer/${product.name}`}>{product.name}</Link>
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