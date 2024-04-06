import React from 'react'
import {useState} from 'react';
import '../styles/contactform.css';

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('Request a demo')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email,contact,company, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      contact:contact.value,
      company:company.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="container mt-5 p-4 form-container">
     <h2 className='contactform-heading'>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="contact">
            Contact Number
          </label>
          <input className="form-control" type="contact" id="contact" required />
        </div>
         

        <div className="mb-3">
          <label className="form-label" htmlFor="company">
            Company Name
          </label>
          <input className="form-control" type="company" id="company" required />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Tell us More
          </label>
          <textarea className="form-control" id="message" rows="5"  />
        </div>
        <div class="contactform-button"> 
        <button className="btn btn-primary" type="submit">
          {formStatus}
        </button>

        </div>
        
      </form>
    </div>
  )
}
export default ContactForm;