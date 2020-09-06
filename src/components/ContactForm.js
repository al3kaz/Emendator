import React, { Component } from 'react';
import { Prompt } from "react-router-dom";



class ContactForm extends Component {
   state = {
      firstNameValue: "",
      sureNameValue: "",
      problemValue: "",
      emailValue: "",
      isEmpty: false
   }

   firstNameHandle = (e) => {
      let value = e.target.value
      this.setState({
         firstNameValue: value,
         isEmpty: true
      })
   }

   sureNameHandle = (e) => {
      let value = e.target.value
      this.setState({
         sureNameValue: value,
         isEmpty: true
      })
   }

   emailHandle = (e) => {
      let value = e.target.value
      this.setState({
         emailValue: value,
         isEmpty: true
      })
   }

   problemHandle = (e) => {
      let value = e.target.value
      this.setState({
         problemValue: value,
         isEmpty: true
      })
   }
   handleSubmit = (e) => {
      e.preventDefault()
      this.setState({
         firstNameValue: "",
         sureNameValue: "",
         problemValue: "",
         emailValue: "",
         isEmpty: false
      })
   }

   handleBtn = () => {
      const data = {
         service_id: 'aleksander',
         template_id: 'emendator',
         user_id: 'user_O7dE1tncyoFDbFY6ecSJU',
         template_params: {
            first_name: this.state.firstNameValue,
            sure_name: this.state.sureNameValue,
            email: this.state.emailValue,
            problem: this.state.problemValue,
         }
      };

      fetch('https://api.emailjs.com/api/v1.0/email/send', {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
            'Content-Type': 'application/json',
         },
      })
         .then((httpResponse) => {
            if (httpResponse.ok) {
               console.log('Your mail is sent!');
            } else {
               return httpResponse.text()
                  .then(text => Promise.reject(text));
            }
         })
         .catch((error) => {
            console.log('Oops... ' + error);
         });
   }

   render() {


      return (
         <>
            <form onSubmit={this.handleSubmit}>
               <div>
                  <input onChange={this.firstNameHandle} value={this.state.firstNameValue} placeholder="imie" id="firstName" type="text" />
               </div>
               <div>
                  <input onChange={this.sureNameHandle} value={this.state.sureNameValue} placeholder="nazwisko" type="text" id="sureName" />
               </div>
               <div>
                  <input onChange={this.emailHandle} value={this.state.emailValue} placeholder="email *" type="email" required />
               </div>
               <div>
                  <textarea onChange={this.problemHandle} value={this.state.problemValue} required placeholder="opisz swój problem *" id="problem" cols="30" rows="10"></textarea>
               </div>
               <button className="btn btn-dark" onClick={this.handleBtn}>Wyslij</button>
            </ form>
            <Prompt
               when={this.state.isEmpty}
               message="Czy na pewno chcesz przerwać wysyłanie wiadomości?" />
         </>
      );
   }
}

export default ContactForm;
