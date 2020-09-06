import React from 'react';
import { Link } from 'react-router-dom';

const EconomicInformation = () => {
   return (
      <div className="main__page__wrapper">
         <h1 className="main__page__title">
            Informacja gospodarcza
         </h1>


         <p className="main__page__text">
            Kancelaria działalność informacji gospodarczej realizuje na terenie całego kraju. Zapewniamy wysoką skuteczność i profesjonalizm oraz pełną dyskrecję.
            <br />
            Szczególnie cieszymy się z coraz większego zapotrzebowania na nasze usługi oraz z uznania dla profesjonalizmu naszych pracowników.
            <br />
            Zachęca to nas do dalszego doskonalenia tej oferty, tak aby spełniała oczekiwania Państwa.
            <br />
            Odnotowując bardzo dobre wyniki informacji gospodarczej oraz dochodzenia roszczeń, proponujemy naszym Klientom kompleksowe usługi z dziedziny badań rynku i konkurencji.
            <br />
            Informacja gospodarcza
            <br />
            Portfel usług przeznaczony dla chcących skutecznie prowadzić wymianę handlową, gdy "kontrakt za wszelka cenę" nie jest jedynym rozwiązaniem ale jednocześnie chcą mieć gwarancje bezpieczeństwa obrotu gospodarczego, znać ryzyko związane z konkretnymi operacjami i orientować się w możliwościach finansowych partnerów handlowych. Informacja gospodarcza to pełny finansowo - prawny obraz wskazanego kontrahenta.
         </p>
         <li className="main__page__li">wstępna eliminacja nierzetelnego kontrahenta</li>
         <li className="main__page__li">potwierdzenie wiarygodności i zaufania partnerów</li>
         <li className="main__page__li">minimalizacja ryzyka handlowego</li>
         <li className="main__page__li">ustalenie i wskazanie rzeczywistego majątku dłużnika</li>

         <h1 className="main__page__title">OFERUJEMY :</h1>

         <h3 className="main__page__h3">Podstawowe sprawdzenia dokumentacyjne firm.
         </h3>

         <p className="main__page__text">Są to czynności niezbędne do uzyskania informacji, umożliwiających rozpoznanie badanej firmy (dłużnika, kredytobiorcy) w zakresie formalno - prawnym jej działania, jak również przeszłości, przedmiotu działalności, kapitału założycielskiego, właścicieli (udziałowców), składu zarządu, posiadanych nieruchomości oraz dyscypliny płatniczej.
         <br />
         Przedstawiamy dane aktualne i wiarygodne, ponieważ konfrontujemy informacje dokumentacyjne z rzeczywistym stanem rzeczy. Załączamy dokumentację fotograficzną. Uzyskane w tym zakresie działań dane pozwalają na zdefiniowanie ogólnej oceny wiarygodności przedmiotowej firmy. Informacja o firmie sporządzana jest według ustalonego zakresu zleceniodawcy.</p>

         <h3 className="main__page__h3">Określenie wiarygodności handlowej (finansowej) firm.</h3>

         <p className="main__page__text">Informacje przedstawiające pogłębione ustalenia dotyczące wiarygodności handlowej (finansowej) firm - uzyskiwane z wykorzystaniem źródeł ogólnie dostępnych oraz przy pomocy firm detektywistycznych - umożliwiają nie tylko eliminowanie ryzyka, ale także opracowanie skutecznej taktyki rozmów z przyszłym partnerem handlowym, zapewniającej w wysokim stopniu osiągnięcie zamierzonego celu i uniknięcie potencjalnych zagrożeń.</p>

         <h3 className="main__page__h3">Ustalenia majątkowe oraz dowodowe dla sądu i komornika.</h3>

         <p className="main__page__text">Wykonywane ustalenia majątkowe, połączone z podstawowym rozpoznaniem firmy, dotyczą nie tylko stwierdzenia składników majątku, ale także, w razie potrzeby, majątku osobistego właścicieli, jak również uzyskania innych danych niezbędnych w procesie egzekwowania długów.
<br />
Działania w tym zakresie prowadzone są z wykorzystaniem źródeł ogólna dostępnych oraz przy pomocy usług firm detektywistycznych współpracujących z Kancelarią.</p>

         <h3 className="main__page__h3">Ustalenia dotyczące osób.</h3>

         <p className="main__page__text">Realizowane stosownie do zapotrzebowania Zleceniodawcy.
<br />
Niniejsza oferta ma charakter ogólny . Na życzenie Państwa gotowi jesteśmy udzielić wszelkich dodatkowych informacji i wyjaśnień lub przedstawić szczegółową ofertę uwzględniającą konkretne zapotrzebowanie Państwa firmy.</p>
         <p className="main__page__text">Opłaty uzależnione są od zakresu zlecenia co do miejsca, czasu i rodzaju zapotrzebowanej informacji.

</p>
         <p className="main__page__text"><strong>Opłaty:</strong> negocjowane dla każdego zlecenia.</p>
         <Link className="main__page__backBtn" to="./">cofnij</Link>
      </div>
   );
}

export default EconomicInformation;