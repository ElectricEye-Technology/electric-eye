import React, { useState, useEffect, useRef } from "react";
import anime from "animejs";
import SVG from "./SVG";

const FormContact = () => {
  return (
    <form
      id="contact-form"
      action="https://formspree.io/f/mqazkwlz"
      method="post"
    >
      <div className="inp h-12 relative flex rounded-xl">
        <input
          type="text"
          className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-[#4070f4] focus:shadow-md"
          required
          id="name"
          name="name"
        />
        <label
          htmlFor="name"
          className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150"
        >
          Name
        </label>
      </div>
      <div className="inp h-12 relative flex rounded-xl">
        <input
          type="text"
          className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-[#4070f4] focus:shadow-md"
          required
          id="father-name"
          name="fatherName"
        />
        <label
          htmlFor="father-name"
          className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150"
        >
          Father Name
        </label>
      </div>
      <div className="inp h-12 relative flex rounded-xl">
        <input
          type="email"
          id="email"
          name="email"
          required
          className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-[#4070f4] focus:shadow-md"
        />
        <label
          className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150"
          htmlFor="email"
        >
          E-mail
        </label>
      </div>
      <div className="inp h-12 relative flex rounded-xl">
        <input
          className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-[#4070f4] focus:shadow-md"
          type="text"
          id="cnic"
          name="cnic"
          required
        />
        <label
          className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150"
          htmlFor="cnic"
        >
          CNIC
        </label>
      </div>
      <div className="inp h-12 relative flex rounded-xl">
        <input
          className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-[#4070f4] focus:shadow-md"
          type="text"
          id="phone"
          name="phone"
          required
        />
        <label
          className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150"
          htmlFor="phone"
        >
          Phone Number
        </label>
      </div>
      <div className="inp h-12 relative flex rounded-xl">
        <input
          className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-[#4070f4] focus:shadow-md"
          type="text"
          id="address"
          name="address"
          required
        />
        <label
          className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150"
          htmlFor="address"
        >
          Address
        </label>
      </div>
      <div className="inp mb-5 relative flex rounded-xl ">
        <textarea
          placeholder="We would love to hear from you"
          className="w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-[#4070f4] focus:shadow-md h-48"
          id="message"
          name="message"
        ></textarea>
      </div>
    </form>
  );
};

const Form = () => {
  const [isSending, setIsSending] = useState(false);
  const [anim, setAnim] = useState(false);

  const validateForm = (toggle) => {
    if (!anim && !isSending) {
      toggle
        ? anime({
            targets: ["#rectwrap rect"],
            strokeDashoffset: [anime.setDashoffset, 0],
            opacity: [
              {
                value: 1,
                duration: 50,
              },
            ],
            easing: "easeOutQuad",
            duration: 650,
          })
        : anime({
            targets: ["#rectwrap rect"],
            strokeDashoffset: [0, anime.setDashoffset],
            easing: "easeOutQuad",
            duration: 700,
          });
    }
  };


  const timeline = () => {
    const moo = () => {
      setAnim(false);
    };
  
    let tl = anime.timeline({
      easing: "easeInOutSine",
      changeComplete: function () {
        moo();
      },
    });
  
    tl.add({
      targets: ".inp",
      translateX: "100%",
      opacity: [1, 0],
      easing: "easeInOutSine",
      duration: 350,
      delay: (el, i) => 150 * i,
    })
      .add({
        targets: "#submit .button-text",
        translateX: "-100%",
        opacity: [1, 0],
        easing: "easeInOutSine",
        duration: 350,
      })
      .add({
        targets: "#submit",
        backgroundColor: "transparent",
        duration: 0,
        easing: "easeInOutSine",
      })
      .add({
        targets: ["#rectwrap rect"],
        opacity: 1,
        easing: "easeOutQuad",
        duration: 100,
      })
      .add({
        targets: ".siz",
        translateX: "-20px",
        duration: 250,
      })
      .add({
        targets: ".siz",
        translateX: "1000px",
        easing: "easeInQuad",
        duration: 500,
      })
      .add({
        targets: ".siz",
        opacity: [1, 0],
        duration: 200,
      });
  };
  
  const reverseAnim = () => {
    const moo = () => {
      setAnim(false);
    };
  
    setIsSending(false);
    setAnim(true);
  
    let tl = anime.timeline({
      easing: "easeInOutSine",
      changeComplete: function () {
        moo();
      },
    });
  
    tl.add({
      targets: ".inp",
      translateX: "0%",
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 350,
      delay: (el, i) => 150 * i,
    })
      .add({
        targets: ".siz",
        translateY: "0%",
        translateX: "0%",
        duration: 0,
      })
      .add({
        targets: "#submit",
        backgroundColor: "#4070f4",
        duration: 0,
        easing: "easeInOutSine",
      })
      .add({
        targets: "#submit .button-text",
        translateX: "0%",
        opacity: [0, 1],
        duration: 350,
        easing: "easeInOutSine",
      })
      .add({
        targets: ".siz",
        opacity: [0, 1],
        duration: 300,
      })
      .add({
        targets: ["#rectwrap rect"],
        opacity: 0,
        strokeDashoffset: [0],
        duration: 100,
      });
  };
  

  const send = (e) => {
    e.preventDefault();

    setAnim(true);
    setIsSending(true);
    timeline();
  };



  return (
    <form id="contactform" className="contact-form " onSubmit={send}>
      {isSending && !anim && (
        <div id="update">
          <p>Your message is on its way!</p>
          <button id="btn" onClick={reverseAnim}>
            Send another
          </button>
        </div>
      )}
      <h1 className="inp mb-4">Drop your queries down below!!</h1>

      <section className="flex justify-center flex-col ">
        <FormContact />

        <button
          id="submit"
          type="submit"
          onMouseEnter={() => validateForm(true)}
          onMouseLeave={() => validateForm(false)}
          className={isSending ? "sending" : ""}
        >
          <span className={`button-text ${isSending ? "is-hidden" : ""}`}>
            SUBMIT
          </span>
          {isSending && (
            <svg width="100%" height="100%" id="rectwrap">
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#00fdff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#f093fb" stopOpacity="1" />
                </linearGradient>
              </defs>
              <rect
                width="100%"
                height="100%"
                fill="none"
                strokeWidth="3"
                stroke="url(#linear-gradient)"
                strokeDasharray="5000"
                strokeDashoffset="5000"
              />
            </svg>
          )}
          <div className={`siz ${isSending ? "is-visible" : ""}`}>
            <SVG />
          </div>
        </button>
      </section>
    </form>
  );
};

export default Form;
