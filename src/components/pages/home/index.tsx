import React, { useRef } from "react";
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
  SiNodedotjs,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import { MotionProps, motion, useInView } from "framer-motion";
import Lottie from "react-lottie-player";

import "./style.css";
import coding from "../../../assets/svgs/coding.json";
const Home = () => {
  const [isInView, setisInView] = React.useState(false);
  const [isInView2, setisInView2] = React.useState(false);
  const section2Ref = useRef(null);
  const section2Ref2 = useRef(null);
  const inView = useInView(section2Ref);
  const inView2 = useInView(section2Ref2);

  React.useEffect(() => {
    inView && setisInView(true);
    inView2 && setisInView2(true);
  }, [inView, inView2]);

  const currentStudyIcons = [
    {
      title: "nextJs",
      icon: <SiNextdotjs />,
    },
    {
      title: "nodeJs",
      icon: <SiNodedotjs />,
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

  // const codeVariants: MotionProps = {
  //   initial: {
  //     opacity: 0,
  //     rotate: 360,
  //   },
  //   animate: {
  //     opacity: 1,
  //     rotate: 0,
  //     transition: {
  //       type: "spring",
  //       duration: 1,
  //     },
  //   },
  //   whileHover: {
  //     scale: 1.2,
  //     transition: {
  //       type: "spring",
  //       duration: 0.3,
  //       stiffness: 5,
  //     },
  //   },
  // };
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
    <motion.div className="space-y-10">
      <section className=" flexoverflow-hidden flex flex-col-reverse md:flex-row ">
        <motion.div
          initial={{ x: "-100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          // transition={{ duration: 0.3 }}
          className="  flex-1 px-10 text-center text-3xl font-extrabold capitalize text-transparent md:w-[60%] md:px-36 md:py-20 md:text-start md:text-base"
        >
          <motion.h1 className="font-bold"></motion.h1>
          <br />
          <h2 className="greet bg-gradient-to-r  from-violet-300 to-blue-500  bg-clip-text  text-2xl before:opacity-0 after:opacity-0 md:text-[3.5vw] md:before:opacity-100 md:after:opacity-100  lg:leading-[60px] ">
            hello, <br />
            i'am <br />
            frontend web developer
            <br />
            <span className="mt-8 md:text-2xl">react/javascipt/typescript</span>
          </h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className="mt-8 rounded-full border-2 bg-gradient-to-r from-violet-300 to-blue-500 bg-clip-text px-3 py-[2px] text-xl  active:scale-100"
          >
            Hire Me
          </motion.button>
          <div className="social mt-5 flex justify-center overflow-hidden bg-red-500 text-center md:mt-10  md:block">
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
          className="left mx-auto w-[70%] md:w-[50%] md:pt-20"
        >
          <Lottie
            className=""
            play
            loop={false}
            animationData={coding}
          ></Lottie>
        </motion.div>
      </section>
      <section className="skills w-screen rounded-xl bg-black/20 p-10 px-14 shadow-md  md:px-32">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="title relative text-center text-3xl font-semibold"
        >
          My Skills
        </motion.h1>
        <section className="skills mt-14 md:flex [&>*]:flex-1">
          <motion.div
            ref={section2Ref}
            // initial={{ scale: 0, opacity: 0 }}
            // animate={{ scale: 1, opacity: 1 }}
            style={{
              scale: isInView ? 1 : 0,
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
            }}
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
            // initial={{ scaleX: 0 }}
            // animate={{ scaleX: 1 }}
            style={{ scaleX: isInView ? 1 : 0 }}
            transition={{
              duration: 0.3,
              staggerChildren: 0.3,
              delayChildren: 0.3,
            }}
            className="languages flex origin-left flex-wrap items-start  justify-center gap-8  p-8 sm:mt-4  md:mt-6 "
          >
            {codingIcons.map((item, i) => (
              <motion.div
                key={i + 1}
                //@ts-ignore
                style={{
                  rotate: isInView ? 0 : 360,
                  opacity: isInView ? 1 : 0,
                  transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                    i / 8
                  }s`,
                }}
                whileHover={{ scale: 1.3 }}
                //@ts-ignore
                // transition={{ duration: 0.5, stiffness: 100 }}
                className="react  group relative h-min cursor-pointer  rounded-xl bg-black/40 p-3 text-5xl "
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
        <section className="current-study rounded-xl  p-10 md:translate-x-10 lg:bg-black/30">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            className="title relative text-center text-3xl font-semibold"
          >
            Current Study
          </motion.h1>
          <motion.div
            ref={section2Ref2}
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
                // initial={{ rotate: 360, scale: 0, opacity: 0 }}
                // animate={{ rotate: 0, scale: 1, opacity: 1 }}
                style={{
                  scale: isInView2 ? 1 : 0,
                  transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                    i / 4
                  }s`,
                }}
                transition={{ stiffness: 100 }}
                whileHover={{
                  scale: 1.2,
                  transition: { type: "spring", stiffness: 100 },
                }}
                // transition={{ type: "spring", stiffness: 100 }}
                //@ts-ignore
                className="react group relative cursor-pointer rounded-xl  bg-white/70 p-3 text-5xl text-slate-700 backdrop-blur-md transition-all hover:shadow-lg  "
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
