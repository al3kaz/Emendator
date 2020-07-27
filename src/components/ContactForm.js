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
                  <input onChange={this.emailHandle} value={this.state.emailValue} placeholder="email *" type="email" />
               </div>
               <div>
                  <textarea onChange={this.problemHandle} value={this.state.problemValue} placeholder="opisz swój problem *" id="problem" cols="30" rows="10"></textarea>
               </div>
               <button>Wyslij</button>
            </ form>
            <Prompt
               when={this.state.isEmpty}
               message="Czy na pewno chcesz przerwać wysyłanie wiadomości?" />
         </>
      );
   }
}

export default ContactForm;
