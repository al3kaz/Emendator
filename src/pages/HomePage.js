import React from 'react';
import Article from '../components/Article'

const articles = [
   {
      id: 1,
      text: "Kancelaria Emendator Sp. z o.o. to jedna z wiodących w Polsce firm doradztwa i pośrednictwa ekonomiczno-prawnego. Świadczy usługi na rzecz uczestników życia gospodarczego, koncentrując się na dochodzeniu roszczeń finansowych i obsłudze finansowo-prawnej podmiotów gospodarczych."
   },
   {
      id: 2,
      text: "Podstawą naszych działań jest dbałość o Państwa interesy. Zobowiązuje nas to, do rzetelnego przestrzegania zasad prawa oraz etyki handlowej. Dochodzenie roszczeń finansowych to skomplikowany proces, w którym praktycznie każde zlecenie stanowi indywidualny przypadek, dlatego też w naszych działaniach bierzemy pod uwagę przyczyny, które spowodowały nie wywiązanie się Państwa partnera z zaciągniętych zobowiązań i na bazie opinii naszych ekspertów określamy możliwości realizacji Państwa zlecenia oraz wszelkie konsekwencje ekonomiczno-prawne, jakie poniesie dłużnik w sytuacji odmowy spłaty wierzytelności."
   },
   {
      id: 3,
      text: " Innym sposobem na uchronienie Państwa przed skutkami problemów nierzetelnych kontrahentów jest podejmowanie działań mających na celu zbadanie konkretnego przedsięwzięcia pod względem jego bezpieczeństwa."
   },
   {
      id: 4,
      text: "Zdając sobie sprawę z różnorodności sytuacji z jakimi stykacie się Państwo prowadząc działalność gospodarczą oferujemy szeroki zakres usług. Zostały one tak opracowane, by mogli Państwo przekazać zlecenie praktycznie na każdym jego etapie, zarówno wówczas, gdy uzyskali już Państwo nakaz zapłaty, jak i wówczas, gdy tylko wysłaliście Państwo wezwanie do zapłaty a nawet, gdy dopiero prowadzicie negocjacje z potencjalnym kontrahentem lub dłużnikiem."
   },

]

const HomePage = () => {

   const artList = articles.map(article => (<Article key={article.id} text={article.text} />))
   return (
      <div>
         {artList}
      </div>);
}

export default HomePage;