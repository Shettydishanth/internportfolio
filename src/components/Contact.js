import React from 'react';
import'../css/Contact.css';

function Contact() {
    return (
        <>
            <div>
                <h1>CONTACT ME</h1>
            </div>
            <div className="container">
                <h1>Contact Me</h1>
                <form action="#" method="post">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </>
    );
}

export default Contact;
