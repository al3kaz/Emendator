import React from 'react';

const products = [
   {
      name: "Dochodzenie roszczeń",
      text: `Aktualnie dochodzenie roszczeń finansowych jest tą usługą z naszego pakietu , na którą na rynku usług finansowych jest największe zapotrzebowanie.
      Największy wysiłek kierujemy na rzetelność w ocenie wstępnie zleconej nam sprawy. W tym oceniamy stopień trudności, przedstawiamy plan naszego postępowania oraz wstępnie prognozujemy możliwy efekt końcowy.`

   },
   {
      name: "Informacja gospodarcza",
      text: `Kancelaria działalność informacji gospodarczej realizuje na terenie całego kraju. Zapewniamy wysoką skuteczność i profesjonalizm oraz pełną dyskrecję.

      Szczególnie cieszymy się z coraz większego zapotrzebowania na nasze usługi oraz z uznania dla profesjonalizmu naszych pracowników.
      
      Zachęca to nas do dalszego doskonalenia tej oferty, tak aby spełniała oczekiwania Państwa.
      
      Odnotowując bardzo dobre wyniki informacji gospodarczej oraz dochodzenia roszczeń, proponujemy naszym Klientom kompleksowe usługi z dziedziny badań rynku i konkurencji.
      
      Informacja gospodarcza
      
      Portfel usług przeznaczony dla chcących skutecznie prowadzić wymianę handlową, gdy "kontrakt za wszelka cenę" nie jest jedynym rozwiązaniem ale jednocześnie chcą mieć gwarancje bezpieczeństwa obrotu gospodarczego, znać ryzyko związane z konkretnymi operacjami i orientować się w możliwościach finansowych partnerów handlowych. Informacja gospodarcza to pełny finansowo - prawny obraz wskazanego kontrahenta.
      
      wstępna eliminacja nierzetelnego kontrahenta
      potwierdzenie wiarygodności i zaufania partnerów
      minimalizacja ryzyka handlowego
      ustalenie i wskazanie rzeczywistego majątku dłużnika
      
      OFERUJEMY :
      
      Podstawowe sprawdzenia dokumentacyjne firm.
      
      Są to czynności niezbędne do uzyskania informacji, umożliwiających rozpoznanie badanej firmy (dłużnika, kredytobiorcy) w zakresie formalno - prawnym jej działania, jak również przeszłości, przedmiotu działalności, kapitału założycielskiego, właścicieli (udziałowców), składu zarządu, posiadanych nieruchomości oraz dyscypliny płatniczej.
      
      Przedstawiamy dane aktualne i wiarygodne, ponieważ konfrontujemy informacje dokumentacyjne z rzeczywistym stanem rzeczy. Załączamy dokumentację fotograficzną. Uzyskane w tym zakresie działań dane pozwalają na zdefiniowanie ogólnej oceny wiarygodności przedmiotowej firmy. Informacja o firmie sporządzana jest według ustalonego zakresu zleceniodawcy.
      
      Określenie wiarygodności handlowej (finansowej) firm.
      
      Informacje przedstawiające pogłębione ustalenia dotyczące wiarygodności handlowej (finansowej) firm - uzyskiwane z wykorzystaniem źródeł ogólnie dostępnych oraz przy pomocy firm detektywistycznych - umożliwiają nie tylko eliminowanie ryzyka, ale także opracowanie skutecznej taktyki rozmów z przyszłym partnerem handlowym, zapewniającej w wysokim stopniu osiągnięcie zamierzonego celu i uniknięcie potencjalnych zagrożeń.
      
      Ustalenia majątkowe oraz dowodowe dla sądu i komornika.
      
      Wykonywane ustalenia majątkowe, połączone z podstawowym rozpoznaniem firmy, dotyczą nie tylko stwierdzenia składników majątku, ale także, w razie potrzeby, majątku osobistego właścicieli, jak również uzyskania innych danych niezbędnych w procesie egzekwowania długów.
      
      Działania w tym zakresie prowadzone są z wykorzystaniem źródeł ogólna dostępnych oraz przy pomocy usług firm detektywistycznych współpracujących z Kancelarią.
      
      Ustalenia dotyczące osób.
      
      Realizowane stosownie do zapotrzebowania Zleceniodawcy.
      
      Niniejsza oferta ma charakter ogólny . Na życzenie Państwa gotowi jesteśmy udzielić wszelkich dodatkowych informacji i wyjaśnień lub przedstawić szczegółową ofertę uwzględniającą konkretne zapotrzebowanie Państwa firmy.
      
      
      Opłaty uzależnione są od zakresu zlecenia co do miejsca, czasu i rodzaju zapotrzebowanej informacji.
      
      
      Opłaty: negocjowane dla każdego zlecenia.`
   },
   {
      name: "Weryfikacja osób i firm",
      text: '3Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, facere. Vel architecto autem enim natus? Tempore, debitis aliquid earum tenetur doloribus quisquam, similique rem quos animi, id consequatur ut facere.'
   },
   {
      name: "Usługi organizacyjno-prawne",
      text: '4Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, facere. Vel architecto autem enim natus? Tempore, debitis aliquid earum tenetur doloribus quisquam, similique rem quos animi, id consequatur ut facere.'
   },
   {
      name: "Oferta współpracy",
      text: '5Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, facere. Vel architecto autem enim natus? Tempore, debitis aliquid earum tenetur doloribus quisquam, similique rem quos animi, id consequatur ut facere.'
   },
   {
      name: "Firmy współpracujące",
      text: '6Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, facere. Vel architecto autem enim natus? Tempore, debitis aliquid earum tenetur doloribus quisquam, similique rem quos animi, id consequatur ut facere.'
   },
]

const Product = (props) => {

   const list = products.filter(product => {
      return product.name === props.id
   })

   const productText = list.map(text => text.text)

   return (
      <div>
         <h1>
            {props.id}
         </h1>
         <p className="offerText">
            {productText}
         </p>
      </div>
   );
}

export default Product;