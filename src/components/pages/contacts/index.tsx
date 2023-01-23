import "./style.css";
import email from "../../../assets/svgs/email.json";
import React, { FormEvent } from "react";
// import Map, { NavigationControl, Marker } from "react-map-gl";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Lottie from "react-lottie-player";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contacts = () => {
  const [loading, setLoading] = React.useState("");
  const form = React.useRef(null);
  const sendEmail = async (e) => {
    setLoading("sending...");
    e.preventDefault();
    await emailjs
      .sendForm(
        "service_19q4vqr",
        "template_v1mvr8n",
        form.current!,
        "HBicHPOmP-CpZ7C1H"
      )
      .then(
        (result) => {
          alert("pesan telah di kirim");
          setLoading("success");
          //@ts-ignore
          form.current?.reset();
        },
        (error) => {
          //@ts-ignore
          setLoading("error", error.message!);
        }
      );
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact my-14 flex flex-col  md:flex-row [&>*]:flex-1">
      <form
        onSubmit={sendEmail}
        ref={form}
        className="contact-form mx-auto flex w-full max-w-md flex-col space-y-3 lg:translate-x-20    "
      >
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
          <input
            required
            placeholder="email"
            name="email"
            type="email"
            id="email"
          />
        </motion.label>
        <motion.label
          initial={{ translateX: "-100vh", opacity: 0 }}
          animate={{
            translateX: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.35,
            stiffness: 120,
            type: "spring",
            delay: 0.1,
          }}
          htmlFor="name"
          className="name"
        >
          <span>name</span>
          <input
            required
            name="name"
            placeholder="name"
            type="text"
            id="name"
          />
        </motion.label>
        {/* <motion.label
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
          <input required placeholder="subject" type="text" id="subject" />
        </motion.label> */}
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
          htmlFor="message"
          className="message"
        >
          <span>message</span>
          <textarea
            placeholder="message"
            name="message"
            id="message"
            cols={30}
            rows={10}
            className="message p-2"
          ></textarea>
        </motion.label>
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileTap={{ scale: 1.2 }}
          transition={{
            stiffness: 120,
            type: "spring",
          }}
          whileHover={{
            scale: 1.025,
            transitionDelay: "none",
            animationDelay: "none",
          }}
          className="rounded-md  p-2 shadow-md duration-300 hover:scale-110"
        >
          {!loading && "send"}
          {loading && (
            <span className={`${loading == "error" && "text-red-500"}`}>
              {loading}
            </span>
          )}
        </motion.button>
      </form>
      <div className="right hidden h-screen  max-w-[50%] overflow-hidden lg:block ">
        <motion.div
          initial={{ translateX: "100vh", opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{
            stiffness: 120,
            type: "spring",
          }}
          className="svg mb-20 -translate-y-32"
        >
          <Lottie className="" play loop={true} animationData={email}></Lottie>
        </motion.div>
      </div>
    </div>
  );
};

export default Contacts;
