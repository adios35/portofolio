import React from "react";
import computer from "../../../assets/svgs/computer(1).json";
import { FaReact } from "react-icons/fa";
import { DiCss3, DiHtml5 } from "react-icons/di";
import {
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiTypescript,
  SiNextdotjs,
  SiPython,
  SiMysql,
  SiDjango,
  SiMongodb,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import { MotionProps, motion } from "framer-motion";
import Lottie from "react-lottie-player";

import "./style.css";
import coding from "../../../assets/svgs/coding.json";
const Home = () => {
  const currentStudyIcons = [
    {
      title: "nextJs",
      icon: <SiNextdotjs />,
    },
    {
      title: "python",
      icon: <SiPython />,
    },
    {
      title: "mySql",
      icon: <SiMysql />,
    },
    {
      title: "Django",
      icon: <SiDjango />,
    },
    {
      title: "mongoDb",
      icon: <SiMongodb />,
    },
  ];

  const codeVariants: MotionProps = {
    initial: {
      opacity: 0,
      rotate: 360,
    },
    animate: {
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    whileHover: {
      scale: 1.2,
      transition: {
        type: "spring",
        duration: 0.3,
        stiffness: 5,
      },
    },
  };
  const codingIcons = [
    {
      title: "javascript",
      icon: <IoLogoJavascript />,
    },
    {
      title: "typescript",
      icon: <SiTypescript />,
    },
    {
      title: "html",
      icon: <DiHtml5 />,
    },
    {
      title: "css",
      icon: <DiCss3 />,
    },
    {
      title: "tailwindcss",
      icon: <SiTailwindcss />,
    },
    {
      title: "react",
      icon: <FaReact />,
    },
    {
      title: "redux",
      icon: <SiRedux />,
    },
    {
      title: "firebase",
      icon: <SiFirebase />,
    },
  ];
  return (
    <motion.div>
      <section className=" flexoverflow-hidden flex">
        <motion.div
          initial={{ x: "-100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          // transition={{ duration: 0.3 }}
          className="  w-[60%] flex-1 py-20 px-36 text-3xl font-extrabold capitalize text-transparent"
        >
          <motion.h1 className="font-bold"></motion.h1>
          <br />
          <h2 className="greet bg-gradient-to-r from-violet-300 to-blue-500 bg-clip-text text-[3.5vw]  lg:leading-[60px] ">
            hello, <br />
            i'am <br />
            frontend web developer
            <br />
            <span className="mt-8 text-2xl">react/javascipt/typescript</span>
          </h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className="mt-8 rounded-full border-2 bg-gradient-to-r from-violet-300 to-blue-500 bg-clip-text px-3 py-[2px] text-xl  active:scale-100"
          >
            Hire Me
          </motion.button>
          <div className="social overflow-hidden bg-red-500  md:mt-10">
            <ul className=" flex gap-5">
              <li className=" text-violet-300">
                <a href="">
                  <BsFacebook />
                </a>
              </li>
              <li className=" text-violet-300/70">
                <a href="">
                  <BsInstagram />
                </a>
              </li>
              <li className=" text-violet-400/80">
                <a href="">
                  <BsLinkedin />
                </a>
              </li>
              <li className=" text-violet-400/90">
                <a href="">
                  <BsTwitter />
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          // transition={{ delay: 0.5, duration: 1.2, staggerChildren: 0.5 }}
          className="left flex-pt-20 w-[50%]"
        >
          <Lottie
            className=""
            play
            loop={false}
            animationData={coding}
          ></Lottie>
        </motion.div>
      </section>
      <section className="skills w-screen rounded-xl bg-black/20 p-10 px-32  shadow-md">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="title relative text-center text-3xl font-semibold"
        >
          My Skills
        </motion.h1>
        <section className="skills flex [&>*]:flex-1">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="image h-full  w-full overflow-hidden "
          >
            <Lottie
              className="scale-125"
              play
              loop={true}
              animationData={computer}
            ></Lottie>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.3,
              staggerChildren: 0.3,
              delayChildren: 0.3,
            }}
            className="languages mt-6 flex origin-left  flex-wrap items-start justify-start p-8 lg:gap-8"
          >
            {codingIcons.map((item, i) => (
              <motion.div
                key={i + 1}
                //@ts-ignore
                variants={codeVariants}
                whileHover="whileHover"
                initial="initial"
                animate="animate"
                //@ts-ignore
                transition="transition"
                className="react group relative h-min cursor-pointer  rounded-xl bg-black/40 p-3 text-5xl transition-all duration-200 hover:shadow-lg hover:shadow-white/10 "
              >
                <motion.span
                  // initial={{ opacity: 0, width: 0 }}
                  // animate={{ opacity: 1, width: "auto" }}
                  className="badge absolute -top-5 left-2/4   -translate-x-2/4  text-start text-sm font-thin capitalize opacity-0 duration-500  group-hover:opacity-100"
                >
                  {item.title}
                </motion.span>
                {item.icon}
              </motion.div>
            ))}
          </motion.div>
        </section>
        {/*section2*/}
        <section className="current-study translate-x-10 rounded-xl p-10 lg:bg-black/30">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            className="title relative text-center text-3xl font-semibold"
          >
            Current Study
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.3,
              staggerChildren: 0.3,
              delayChildren: 0.3,
            }}
            className="languages mt-6 flex origin-left flex-wrap justify-around gap-10 p-8"
          >
            {currentStudyIcons.map((item, i) => (
              <motion.div
                key={i + 1}
                //@ts-ignore
                initial={{ rotate: 360, scale: 0, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                whileHover={{
                  scale: 1.2,
                  transition: { type: "spring", stiffness: 100 },
                }}
                transition={{ type: "spring", stiffness: 100 }}
                //@ts-ignore
                className="react group relative cursor-pointer rounded-xl bg-white p-3 text-5xl text-slate-700 transition-all duration-200 hover:shadow-lg  "
              >
                <motion.span
                  // initial={{ opacity: 0, width: 0 }}
                  // animate={{ opacity: 1, width: "auto" }}
                  className="badge absolute -top-5 left-2/4 -translate-x-2/4 text-start text-sm font-thin capitalize text-white opacity-0 duration-500  group-hover:opacity-100"
                >
                  {item.title}
                </motion.span>
                {item.icon}
              </motion.div>
            ))}
          </motion.div>
        </section>
      </section>
    </motion.div>
  );
};

export default Home;
