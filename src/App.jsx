import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Events from "./components/Events";
import Careers from "./components/Careers";
import Blog from "./components/Blog";
import ContactForm from "./components/ContactForm";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Products from "./components/Products";

const Con = () => {
  return (
    <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="flex justify-center items-center flex-col py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold">Get in touch</h1>
          <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Fake address, 9999 City</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>123456789</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>contact@business.com</span>
            </p>
          </div>
        </div>
        <section className="contact-form">
          <form
            id="contact-form"
            action="https://formspree.io/f/mqazkwlz"
            method="post"
          >
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="father-name">Father Name</label>
              <input
                type="text"
                id="father-name"
                name="fatherName"
                placeholder="Enter Your Father Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="cnic">CNIC</label>
              <input
                type="text"
                id="cnic"
                name="cnic"
                placeholder="XXXXX-XXXXXXX-X"
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter Your Phone No"
                required
              />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter Your Address"
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter Your Message"
                required
              ></textarea>
            </div>
            <button type="submit">SUBMIT</button>
          </form>
        </section>
      </div>
    </section>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/electric-eye/" element={<Home />} />
          <Route path="/electric-eye/about" element={<About />} />
          <Route path="/electric-eye/services" element={<Services />} />
          <Route path="/electric-eye/events" element={<Events />} />
          <Route path="/electric-eye/careers" element={<Careers />} />
          <Route path="/electric-eye/contact" element={<Con />} />
          <Route path="/electric-eye/products" element={<Products />} />
          <Route path="/electric-eye/blog" element={<Blog />} />
          <Route path="/electric-eye/signup" element={<SignUp />} />
          <Route path="/electric-eye/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
