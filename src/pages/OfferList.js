import React from 'react';
import { NavLink } from 'react-router-dom'

const navList = [
   { name: "Dochodzenie Roszczeń", path: "/offer/InvestigationClaims" },
   { name: "Informacja Gospodarcza", path: "/offer/EconomicInformation" },
   { name: "Weryfikacja Osób i Firm", path: "/offer/verification" },
   { name: "Usługi Organizacyjno Prawne", path: "/offer/LegalServices" },
   { name: "Oferta Współpracy", path: "/offer/CooperationOffer" },
   { name: "Firmy Współpracujące", path: "/offer/CompaniesCooperat" },
]

const offerList = () => {

   const offerList = navList.map(item => (
      <li key={item.name}>
         <NavLink to={item.path} >
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