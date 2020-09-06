import React from 'react';
import ContactForm from '../components/ContactForm.js'

const Contact = () => {
   return (
      <>
         <h1 className="main__page__h1">Napisz do nas!</h1>
         <div className="main__page__contact">

            <ContactForm />
            <p> <strong> Kancelaria Emendator Sp. z o.o.</strong>
               <br /> Tomasz Kaźmierczak
             (+48) 664 730 462<br />
            emendator@wp.pl <br />
            tomkazmierczak@pro.onet.pl <br />
            ul. Lotosowa 4
            60-175 Poznań <br /> NIP: 673-17-28-021
            REGON: 331352100 <br />
Nr KRS: 0000123166</p>
         </div>
      </>
   );
}

export default Contact;