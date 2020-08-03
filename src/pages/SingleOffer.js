import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product'


const SingleOffer = (props) => {

   return (
      <>
         <Product id={props.match.params.id} />
         <Link to='/offer'>Powrót do ofery</Link>
      </>
   );
}

export default SingleOffer;