import React from "react";
import { AiFillHome, AiFillGithub } from "react-icons/ai";
import { GoChecklist } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { MdDarkMode } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.css";
const SideBar = () => {
  return (
    <div className="fixed bottom-0 z-30  flex w-full items-center justify-between bg-red-500 p-8 text-slate-300 dark:bg-darkTheme md:left-0 md:h-screen  md:max-w-[100px] md:flex-col ">
      <Link className="" to="/">
        <div className="logo text-center text-4xl ">Atib</div>
      </Link>
      <ul className="menu flex items-center gap-8 md:block md:space-y-5">
        <motion.li whileTap={{ scale: 1.2 }} className="group ">
          <NavLink to="/">
            <span className="hidden group-hover:block">Home</span>
            <AiFillHome className="text-2xl group-hover:hidden" />
          </NavLink>
        </motion.li>
        <motion.li whileTap={{ scale: 1.2 }} className="group">
          <NavLink to="/project">
            <span className="hidden  group-hover:block">Projects</span>
            <GoChecklist className=" text-2xl group-hover:hidden" />
          </NavLink>
        </motion.li>
        <motion.li whileTap={{ scale: 1.2 }} className="group">
          <NavLink className="" to="/contacts">
            <span className="hidden  group-hover:block">Contact</span>
            <CgProfile className="text-2xl group-hover:hidden" />
          </NavLink>
        </motion.li>
      </ul>
      <motion.a
        href="https://github.com/adios35"
        target="_blank"
        whileHover={{ scale: 1.2 }}
        className="toggle-dark group relative cursor-pointer text-3xl "
      >
        <AiFillGithub />
      </motion.a>
    </div>
  );
};

export default SideBar;
