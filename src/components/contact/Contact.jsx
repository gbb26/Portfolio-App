/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import "./contact.css";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_KEY}`,
        `${import.meta.env.VITE_TEMPLATE}`,
        formRef.current,
        `${import.meta.env.VITE_SECRET_KEY}`
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let&apos;s work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>gorakshnath*********i.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Linkedin</h2>
          <span>
            <a href="https://www.linkedin.com/in/gorakshnath-bhongal-256213230/">
              https://www.linkedin.com
            </a>
          </span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.form ref={formRef} onSubmit={sendEmail}>
          <input type="text" required placeholder="Your Name..." name="name" />
          <input
            type="email"
            required
            placeholder="Enter Email..."
            name="email"
          />
          <textarea
            rows={8}
            style={{ resize: "none" }}
            placeholder="Message"
            name="message"
          />
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
