import React , { useRef,useState }  from 'react';
import'../css/Contact.css';
import emailjs from '@emailjs/browser';
import Loader from './Loader'


function Contact() {

    const [Loaders,setLoader]=useState(false)

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true)
console.log(form.current );
    emailjs.sendForm('service_2k89pli', 'template_zhrugyf', form.current, 'oPSvZRPNo2nVrPAQ-')
      .then((result) => {
        setLoader(false)
          alert("MESSAGE SENT");
          form.current.reset();
          
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <>
            <div>
                <h1>CONTACT</h1>
            </div>
            <div className="container">
                <h1>Contact Me</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="user-name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
{!Loaders?
                    <button type="submit">Send Message</button>
                    :
                    <Loader/>
}
                </form>
            </div>
        </>
    );
}

export default Contact;
