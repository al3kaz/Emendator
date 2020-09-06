import React from 'react';
import { Link } from 'react-router-dom';

const LegalServices = () => {
   return (
      <div className="main__page__wrapper">

         <h1 className="main__page__title">Usługi organizacyjno-prawne</h1>

         <p className="main__page__text">Oferujemy Państwu usługi w zakresie:</p>

         <li className="main__page__li">Doradztwa przy podejmowaniu decyzji o rozpoczęciu działalności gospodarczej,
</li>
         <li className="main__page__li">Opracowania projektów aktów założycielskich włącznie z przygotowaniem dokumentów rejestracyjnych do Urzędów oraz Sądu,
</li>
         <li className="main__page__li">Opracowania projektów dokumentacji organizacyjno-prawnej dla firmy,
</li>
         <li className="main__page__li">Kierowania działalnością podmiotu gospodarczego w oparciu o kontrakt menedżerski lub umowę usługi.
</li>
         <li className="main__page__li">Zarządzania firmą, realizacji kontraktów handlowych lub nadzór nad wybranym produktem
</li>
         <li className="main__page__li">Prawnego dochodzenia roszczeń finansowych, informacji gospodarczej, wspomagania egzekucji komorniczej, sprawdzanie wiarygodności kontrahenta,
</li>
         <li className="main__page__li">Doradztwo w zakresie prowadzenia działalności gospodarczej i zarządzania.
</li>
         <li className="main__page__li">Doradztwo i konsulting w zakresie egzekucji komorniczej.
</li>
         <li className="main__page__li">Pisanie projektów pozwów i wniosków o egzekucje komorniczą, korespondencji z wierzycielem /dłużnikiem, doniesieniem do Prokuratury o możliwości popełnienie przestępstwa.
</li>
         <li className="main__page__li">Sporządzanie projektów umów i kontraktów handlowych.
</li>
         <li className="main__page__li">Konsulting - pomoc zadłużonym
</li>
         <Link className="main__page__backBtn" to="./">cofnij</Link>
      </div>
   );
}

export default LegalServices;