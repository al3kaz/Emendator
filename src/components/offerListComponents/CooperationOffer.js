import React from 'react';
import { Link } from 'react-router-dom';

const CooperationOffer = () => {
   return (
      <div className="main__page__wrapper">

         <h1 className="main__page__title">Oferta współpracy </h1>

         <p className="main__page__text">Kancelaria Emendator Sp. z o.o. ma zaszczyt przedstawić, przygotowaną z myślą o przedsiębiorcach, ofertę usług mających na celu wyeliminowanie strat wynikających z przeterminowanych lub/i nieuregulowanych zobowiązań nierzetelnych partnerów handlowych.
<br />
Kancelaria Emendator Sp. z o.o. to jedna z wiodących w Polsce firm doradztwa i pośrednictwa ekonomiczno-prawnego. Świadczy usługi na rzecz uczestników życia gospodarczego, koncentrując się na dochodzeniu roszczeń finansowych i obsłudze finansowo-prawnej podmiotów gospodarczych.
<br />
Podstawą naszych działań jest dbałość o Państwa interesy. Zobowiązuje nas to, do rzetelnego przestrzegania zasad prawa oraz etyki handlowej. Dochodzenie roszczeń finansowych to skomplikowany proces, w którym praktycznie każde zlecenie stanowi indywidualny przypadek, dlatego też w naszych działaniach bierzemy pod uwagę przyczyny, które spowodowały nie wywiązanie się Państwa partnera z zaciągniętych zobowiązań i na bazie opinii naszych ekspertów określamy możliwości realizacji Państwa zlecenia oraz wszelkie konsekwencje ekonomiczno-prawne, jakie poniesie dłużnik w sytuacji odmowy spłaty wierzytelności. Dzięki temu, już we wstępnej fazie negocjacji, możemy nakłonić go do spłaty zadłużenia. Pozwala to na relatywnie szybkie rozwiązanie problemu, oraz duże oszczędności finansowe związane z możliwością wyeliminowania kosztów sądowych i egzekucyjnych a to, że Państwa firmę przedstawiamy zawsze w najlepszym świetle, jako kontrahenta, który w sposób kulturalny ale stanowczy dba o swoje interesy, w dłuższym okresie pozwala na zdobycie szacunku dla Państwa firmy na rynku oraz zminimalizowania liczby należności przeterminowanych.
<br />
Innym sposobem na uchronienie Państwa przed skutkami problemów nierzetelnych kontrahentów jest podejmowanie działań mających na celu zbadanie konkretnego przedsięwzięcia pod względem jego bezpieczeństwa. Szczególnie w warunkach polskich, informacje dotyczące stanu majątkowego partnera, jego przeszłości gospodarczej, powiązań oraz jego pozycji na rynku, powinny stanowić ważny element w podejmowaniu decyzji o rozpoczęciu współpracy. Zdobycie takich informacji powinno jednak odbywać się w taki sposób, aby badana firma nie zorientowała się, że jest sprawdzana, dlatego jedynym sposobem na uzyskanie interesujących nas informacji jest powierzenie tego zadania specjalistom.
<br />
Zdając sobie sprawę z różnorodności sytuacji z jakimi stykacie się Państwo prowadząc działalność gospodarczą oferujemy szeroki zakres usług. Zostały one tak opracowane, by mogli Państwo przekazać zlecenie praktycznie na każdym jego etapie, zarówno wówczas, gdy uzyskali już Państwo nakaz zapłaty, jak i wówczas, gdy tylko wysłaliście Państwo wezwanie do zapłaty a nawet, gdy dopiero prowadzicie negocjacje z potencjalnym kontrahentem lub dłużnikiem. Również w sytuacjach kiedy sami Państwo macie problemy i jesteście przedmiotem dochodzenia roszczeń lub egzekucji komorniczej a uważacie, iż procedura prowadzona jest z naruszeniem prawa.
</p>
         <li>zlecenie dochodzenia roszczeń</li>
         <li>sprawdzanie wiarygodności kontrahenta</li>
         <li>informacja gospodarcza</li>
         <li>wspomaganie egzekucji komorniczej</li>
         <li>konsulting co do procedury egzekucji komorniczej w tym obrona przed nieprawnym działaniem komornika</li>
         <li>konsulting finansowy, prawny, organizacyjny</li>
         <li>pomoc zadłużonym – konsulting, projekty wszelkich pism</li>

         <p className="main__page__text">Polityka cenowa prowadzona przez naszą firmę zakłada generowanie zysku na podstawie wyników pracy, czyli na podstawie prowizji naliczanej od realnie odzyskanych kwot lub wartości odzyskiwanego majątku. Zakłada również ograniczenie wstępnych kosztów, które poniosą Państwo na wstępie realizacji zlecenia tak, by były na jak najniższym poziomie, gwarantując jednak pokrycie kosztów związanych z realizacją wszystkich niezbędnych procedur.
         <br />
         Dodatkowo firma nasza otwarta jest na negocjacje dotyczące wielkości prowizji oraz kwot bezzwrotnych z tytułu kosztów związanych z realizacją zleceń.</p>
         <Link className="main__page__backBtn" to="./">cofnij</Link>
      </div>
   );
}

export default CooperationOffer;