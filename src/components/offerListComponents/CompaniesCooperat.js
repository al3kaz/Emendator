import React from 'react';
import { Link } from 'react-router-dom';

const CompaniesCooperat = () => {
   return (
      <div className="main__page__wrapper">

         <h1 className="main__page__title">Firmy współpracując</h1>

         <p><strong>Wolcar Intrnational</strong> Krystyn Wolter
         <br />
         ul. Langiewicza 57, 05-050 Izabelin</p>
         <a href="tel:+48602359366">+48 602 359 366</a>


         <p><strong>Kancelaria ARS</strong> Artur Suchożeberski
         <br />
         ul. Sienkiewicza 12, 08-110 Siedlce</p>
         <a href="tel:+48256334133">+48 25 633 4133</a>


         <p><strong>Aliant Wywiadownia Gospodarcza</strong>
            <br />
         ul. Konopackich 22B, 87-100 Toruń</p>
         <a href="tel:+48665690000">+48 665 690 000</a>
         <br />
         <a href="http://aliantcompany.pl/">aliantcompany.pl</a>


         <p><strong>JARAN </strong> Biuro Detektywistyczne
         <br />
        ul. Poznańska 24 lok. 21, 00-685 Warszawa</p>
         <a href="tel:+48226221408">+48 (22) 6221408</a>
         <br />
         <a href="tel:+48669981964">+48 669 981 964</a>


         <p><strong>KANCELARIA RADCY PRAWNEGO</strong> Bartosz Siekacz
         <br />
         ul. Zwierzyniecka 3, 60-813 Poznań</p>
         <a href="tel:+48664315297">+48 664 315 297</a>


         <p><strong>KANCELARIA RADCY PRAWNEGO</strong> Jacek Gąsior
         <br />
         ul. Łucka 18 lok. 300, 00-845 Warszawa</p>
         <a href="tel:+48609180580">+48 609 180 580</a>


         <p><strong>KANCELARIA RADCÓW PRAWNYCH</strong> Lech Obara i Współpracownicy
         <br />
         ul. Partyzantów 68/5, 11-041 Olsztyn</p>
         <a href="tel:+48895235947">+48 89 523 59 47</a>
         <Link className="main__page__backBtn" to="./">cofnij</Link>
      </div>
   );
}

export default CompaniesCooperat;