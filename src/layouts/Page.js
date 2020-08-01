import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Contact from '../pages/Contact'
import OfferList from '../pages/OfferList'
import Downloads from '../pages/Downloads'
import ErrorPage from '../pages/ErrorPage'
import SingleOffer from '../pages/SingleOffer';

const Page = () => {
   return (<>
      <Switch>
         <Route path="/" exact component={HomePage} />
         <Route path="/offer" exact component={OfferList} />
         <Route path="/offer/:id" exact component={SingleOffer} />
         <Route path="/download" exact component={Downloads} />
         <Route path="/contact" exact component={Contact} />
         <Route component={ErrorPage} />
      </Switch>
   </>
   );
}

export default Page;