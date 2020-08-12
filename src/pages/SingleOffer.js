import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product'


const SingleOffer = (props) => {

   return (
      <div className="offerWrapper">
         <Product id={props.match.params.id} />
         <Link className="backBtn" to='/offer'>Powrót do ofery</Link>
      </div>
   );
}

export default SingleOffer;