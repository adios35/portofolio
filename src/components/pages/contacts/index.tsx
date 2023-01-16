import "./style.css";
import React from "react";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <div className="contact my-14 flex flex-col md:flex-row [&>*]:flex-1">
      <form className="contact-form mx-auto flex w-full max-w-md flex-col space-y-3 md:translate-x-32  ">
        <h1 className="text-xl ">contact me:</h1>
        <motion.label
          initial={{ translateX: "-100vh", opacity: 0 }}
          animate={{
            translateX: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            stiffness: 120,
            type: "spring",
          }}
          htmlFor="email"
          className="email"
        >
          <span>email</span>
          <input placeholder="email" type="text" id="email" />
        </motion.label>
        <motion.label
          initial={{ translateX: "-100vh", opacity: 0 }}
          animate={{
            translateX: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            stiffness: 120,
            type: "spring",
            delay: 0.1,
          }}
          htmlFor="subject"
          className="subject"
        >
          <span>subject</span>
          <input placeholder="subject" type="text" id="subject" />
        </motion.label>
        <motion.label
          initial={{ translateX: "-100vh", opacity: 0 }}
          animate={{
            translateX: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            stiffness: 120,
            type: "spring",
            delay: 0.2,
          }}
          htmlFor=""
          className="messages"
        >
          <span>message</span>
          <textarea
            placeholder="messages"
            name=""
            id="messages"
            cols={30}
            rows={10}
            className="message p-2"
          ></textarea>
        </motion.label>
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            stiffness: 120,
            type: "spring",
          }}
          whileHover={{
            scale: 1.1,
            transitionDelay: "none",
            animationDelay: "none",
          }}
          onClick={(e) => e.preventDefault()}
          className="rounded-md bg-slate-700 p-2 shadow-md duration-300 hover:scale-110"
        >
          submit
        </motion.button>
      </form>
      <div className="right"></div>
    </div>
  );
};

export default Contacts;
