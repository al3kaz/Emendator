import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import Contact from '../pages/Contact';
import OfferList from './OfferList';
import Downloads from '../pages/Downloads';
import ErrorPage from '../pages/ErrorPage';
import DochodzenieRoszczeń from '../components/DochodzenieRoszczeń';
import InformacjaGospodarcza from '../components/InformacjaGospodarcza';
import WeryfikacjaOsóbiFirm from '../components/WeryfikacjaOsóbiFirm';
import UsługiOrganizacyjnoPrawne from '../components/UsługiOrganizacyjnoPrawne';
import OfertaWspółpracy from '../components/OfertaWspółpracy';
import FirmyWspółpracujące from '../components/FirmyWspółpracujące';

const Page = () => {
   return (<>
      <Switch>
         <Route path="/" exact component={HomePage} />
         <Route path="/offer" exact component={OfferList} />
         <Route path="/download" exact component={Downloads} />
         <Route path="/contact" exact component={Contact} />
         <Route path="/offer/DochodzenieRoszczeń" exact component={DochodzenieRoszczeń} />
         <Route path="/offer/InformacjaGospodarcza" exact component={InformacjaGospodarcza} />
         <Route path="/offer/WeryfikacjaOsóbiFirm" exact component={WeryfikacjaOsóbiFirm} />
         <Route path="/offer/UsługiOrganizacyjnoPrawne" exact component={UsługiOrganizacyjnoPrawne} />
         <Route path="/offer/OfertaWspółpracy" exact component={OfertaWspółpracy} />
         <Route path="/offer/FirmyWspółpracujące" exact component={FirmyWspółpracujące} />
         <Route component={ErrorPage} />
      </Switch>
   </>
   );
}

export default Page;