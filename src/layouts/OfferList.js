import React from 'react';
import { NavLink } from 'react-router-dom'

const navList = [
   { name: "DochodzenieRoszczeń", path: "/offer/DochodzenieRoszczeń" },
   { name: "InformacjaGospodarcza", path: "/offer/InformacjaGospodarcza" },
   { name: "WeryfikacjaOsóbiFirm", path: "/offer/WeryfikacjaOsóbiFirm" },
   { name: "UsługiOrganizacyjnoPrawne", path: "/offer/UsługiOrganizacyjnoPrawne" },
   { name: "OfertaWspółpracy", path: "/offer/OfertaWspółpracy" },
   { name: "FirmyWspółpracujące", path: "/offer/FirmyWspółpracujące" },
]

const offerList = () => {

   const offerList = navList.map(item => (
      <li key={item.name}>
         <NavLink to={item.path}>
            {item.name}
         </NavLink>
      </li>
   ))

   return (
      <div className="main__page__offer">
         {offerList}
      </div>
   );
}

export default offerList;