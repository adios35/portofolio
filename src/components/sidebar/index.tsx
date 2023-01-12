import React from "react";
import { AiFillHome } from "react-icons/ai";
import { GoChecklist } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { MdDarkMode } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.css";
const SideBar = () => {
  return (
    <div className="fixed z-30 flex h-screen max-w-[100px] flex-col justify-between p-8  text-slate-300 dark:bg-darkTheme ">
      <Link to="/">
        <div className="logo text-center text-4xl ">Atib</div>
      </Link>
      <ul className="menu space-y-5">
        <motion.li whileTap={{ scale: 1.2 }} className="group ">
          <NavLink to="/">
            <span className="hidden  group-hover:block">Home</span>
            <AiFillHome className=" text-2xl group-hover:hidden" />
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
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="toggle-dark group relative cursor-pointer "
      >
        <span className="badge  absolute -top-5 hidden text-xs font-thin transition-all duration-300 group-hover:inline group-hover:delay-300 ">
          dark
        </span>
        <MdDarkMode className="text-xl hover:text-gray-400" />
      </motion.div>
    </div>
  );
};

export default SideBar;
