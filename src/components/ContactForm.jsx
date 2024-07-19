import React from 'react'

const ContactForm = () => {
  return (
    <>
        <div class="page_heading">
        <h1>Contact Us</h1>
    </div>
    <main>
        <section class="contact-info">
            <div>
                <h4>Call us</h4>
                <p>0348-0231009</p>
            </div>
            <div>
                <h4>Email</h4>
                <p>info@electriceyetechnology.com</p>
            </div>
            <div>
                <h4>Location</h4>
                <p>ElectricEye Pvt Ltd NASTP</p>
            </div>
        </section>
        <section class="contact-form">
            <h2>GET IN TOUCH</h2>
            <form id="contact-form" action="https://formspree.io/f/mqazkwlz"
             method="post">
                <div>
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter Your Name" required/>
                </div>
                <div>
                    <label for="father-name">Father Name</label>
                    <input type="text" id="father-name" name="fatherName" placeholder="Enter Your Father Name" required/>
                </div>
                <div>
                    <label for="email">E-mail</label>
                    <input type="email" id="email" name="email" placeholder="Enter Your Email" required/>
                </div>
                <div>
                    <label for="cnic">CNIC</label>
                    <input type="text" id="cnic" name="cnic" placeholder="XXXXX-XXXXXXX-X" required/>
                </div>
                <div>
                    <label for="phone">Phone Number</label>
                    <input type="text" id="phone" name="phone" placeholder="Enter Your Phone No" required/>
                </div>
                <div>
                    <label for="address">Address</label>
                    <input type="text" id="address" name="address" placeholder="Enter Your Address" required/>
                </div>
                <div>
                    <label for="message">Message</label>
                    <textarea id="message" name="message" placeholder="Enter Your Message" required></textarea>
                </div>
                <button type="submit">SUBMIT</button>
            </form>
        </section>
    </main>
    </>
  )
}

export default ContactForm