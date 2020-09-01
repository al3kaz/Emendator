import React from 'react';
import { Link } from 'react-router-dom';

const WeryfikacjaOsóbiFirm = () => {
   return (
      <div className="main__page__wrapper">
         <h1 className="main__page__title">Weryfikacja osób i firm</h1>
         <p>Aktualnie na rynku usług finansowych a także w relacji sprzedający kupujący przy dobrze rozumianej konkurencyjności rynku a tym samym pozyskiwaniu klientów zachodzi potrzeba pilnej i rzetelnej informacji o kredytobiorcy, lub innym kontrahencie.
<br />
Kancelaria Emendator Sp. z o.o. znając wagę "ryzyka handlowego" w aktualnych uwarunkowaniach gospodarczych w krótkich terminach realizacyjnych dostarczy Państwu informacji pozwalających na ograniczenie do niezbędnego minimum lub wyeliminowanie w ogóle ryzyka zawarcia umowy tzw. "nie trafionej" a tym samym ustrzeżenie się strat w prowadzonej działalności.
<br />
W pakiecie tych usług oferujemy Państwu zarówno weryfikację wiarygodności klienta - kredytobiorcy, kontrahenta, itp. jak i też dokumentów przez niego przedkładanych niezbędnych do zawarcia umowy.
<br />
Powyższe realizujemy poprzez:</p>
         <strong>w zakresie weryfikacji osób fizycznych:</strong>
         <li>sprawdzenie wiarygodności dokumentów tożsamości klienta,
</li>
         <li>wiarygodności miejsca zamieszkania,
</li>
         <li>wiarygodności miejsca zatrudnienia,
</li>
         <li>informacji o zatrudnieniu - stałe, na czas określony, w jakim stanie jest realizacja umowy o pracę.
</li>
         <strong>w zakresie podmiotów gospodarczych:

</strong>
         <li>weryfikacja wiarygodności osób reprezentujących podmiot,
</li>
         <li>weryfikacja wiarygodności podmiotu w zakresie przedstawionej i rzeczywistej działalności co do miejsca, rodzaju i zakresu działalności,
</li>
         <li>inne wskazane przez zleceniodawcę.
</li>
         <p><strong>Czas realizacji: </strong>do 30 roboczodni.</p>
         <p><strong>Opłaty: </strong>negocjowane dla każdego zlecenia.</p>
         <Link className="main__page__backBtn" to="./">cofnij</Link>
      </div>
   );
}

export default WeryfikacjaOsóbiFirm;