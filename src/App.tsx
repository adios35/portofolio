import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import SideBar from "./components/sidebar";
import Project from "./components/pages/project";
import Contacts from "./components/pages/contacts";
import { motion, useScroll } from "framer-motion";
import Home from "./components/pages/home";
import Footer from "./components/footer";
const App = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div className="overflow-hidden  bg-darkThemeMain from-slate-800 to-slate-500/80 dark:bg-gradient-to-br">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progressBar fixed top-0 left-0 z-30 h-[4px] w-full origin-left bg-gradient-to-r from-slate-50 to-cyan-500"
      ></motion.div>
      <SideBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="project" element={<Project />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
      <Footer />
    </motion.div>
  );
};

export default App;
