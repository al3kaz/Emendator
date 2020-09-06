import React from 'react';
import { Route, Switch, } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import Contact from '../pages/Contact';
import OfferList from '../pages/OfferList';
import Downloads from '../pages/Downloads';
import ErrorPage from '../pages/ErrorPage';
import InvestigationClaims from '../components/offerListComponents/InvestigationClaims';
import EconomicInformation from '../components/offerListComponents/EconomicInformation';
import verification from '../components/offerListComponents/verification';
import LegalServices from '../components/offerListComponents/LegalServices';
import CooperationOffer from '../components/offerListComponents/CooperationOffer';
import CompaniesCooperat from '../components/offerListComponents/CompaniesCooperat';

const Page = () => {
   return (<>
      <Switch>
         <Route path="/" exact component={HomePage} />
         <Route path="/offer" exact component={OfferList} />
         <Route path="/download" exact component={Downloads} />
         <Route path="/contact" exact component={Contact} />
         <Route path="/offer/InvestigationClaims" exact component={InvestigationClaims} />
         <Route path="/offer/EconomicInformation" exact component={EconomicInformation} />
         <Route path="/offer/verification" exact component={verification} />
         <Route path="/offer/LegalServices" exact component={LegalServices} />
         <Route path="/offer/CooperationOffer" exact component={CooperationOffer} />
         <Route path="/offer/CompaniesCooperat" exact component={CompaniesCooperat} />
         <Route component={ErrorPage} />
      </Switch>
   </>
   );
}

export default Page;