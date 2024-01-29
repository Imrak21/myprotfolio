import React from 'react'
import contactme from "../Css/contactme.css"
export default function ContactMe() {
  return (
    <>
    <section id='contactsection'>
    <h2 className="text-centre text-white mt-3" id="contacthead">
          Contact Me
        </h2>
    <div className="container" id='form-container'>
        <form action="">
           <p><input type="text" placeholder='Enter your Name' id='form-input'/></p>
           <p><input type="text" placeholder='Enter your email' id='form-input' style={{"border-top-right-radius":"0px","border-top-left-radius": "0px"}}/></p>
           <textarea name="" id="form-text-area" cols="65" rows="7"></textarea>
        </form>
    </div>

    </section>
    </>
  )
}
