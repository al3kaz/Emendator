import React from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/Navigation.css'

const navList = [
   { name: "start", exact: true, path: "/" },
   { name: "oferta", path: "offer" },
   { name: "do pobrania", path: "download" },
   { name: "kontakt", path: "contact" },
]

const Navigation = () => {

   const menu = navList.map(item => (
      <li key={item.name}>
         <NavLink to={item.path} exact={item.exact ? item.exact : false}>
            {item.name}
         </NavLink>
      </li>
   ))

   return (
      <nav>
         <ul>
            {menu}
         </ul>
      </nav>
   );
}

export default Navigation;