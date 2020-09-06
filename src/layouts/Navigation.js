import React from 'react';
import { NavLink } from 'react-router-dom'

const navList = [
   { name: "start", exact: true, path: "/" },
   { name: "oferta", path: "/offer" },
   { name: "do pobrania", path: "/download" },
   { name: "kontakt", path: "/contact" },
]

const Navigation = () => {

   const menu = navList.map(item => (
      <li className="nav__ul__li" key={item.name}>
         <NavLink to={item.path} exact={item.exact ? item.exact : false}>
            {item.name}
         </NavLink>
      </li>
   ))

   return (
      <nav>
         <ul className="nav__ul">
            {menu}
         </ul>
      </nav>
   );
}

export default Navigation;