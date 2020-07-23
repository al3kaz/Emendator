import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Offer.css'

const products = [
   {
      name: "Dochodzenie roszczeń",
      text: '1Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, facere. Vel architecto autem enim natus? Tempore, debitis aliquid earum tenetur doloribus quisquam, similique rem quos animi, id consequatur ut facere.'
   },
   {
      name: "Informacja gospodarcza",
      text: '2Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, facere. Vel architecto autem enim natus? Tempore, debitis aliquid earum tenetur doloribus quisquam, similique rem quos animi, id consequatur ut facere.'
   },
   {
      name: "Weryfikacja osób i firm",
      text: '3Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, facere. Vel architecto autem enim natus? Tempore, debitis aliquid earum tenetur doloribus quisquam, similique rem quos animi, id consequatur ut facere.'
   },
   {
      name: "Usługi organizacyjno-prawne",
      text: '4Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, facere. Vel architecto autem enim natus? Tempore, debitis aliquid earum tenetur doloribus quisquam, similique rem quos animi, id consequatur ut facere.'
   },
   {
      name: "Oferta współpracy",
      text: '5Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, facere. Vel architecto autem enim natus? Tempore, debitis aliquid earum tenetur doloribus quisquam, similique rem quos animi, id consequatur ut facere.'
   },
   {
      name: "Firmy współpracujące",
      text: '6Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, facere. Vel architecto autem enim natus? Tempore, debitis aliquid earum tenetur doloribus quisquam, similique rem quos animi, id consequatur ut facere.'
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