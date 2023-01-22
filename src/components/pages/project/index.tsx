import React from "react";
import { motion, useInView } from "framer-motion";
//@ts-ignore
import ecommerce from "../../../assets/ecommerce.png";
//@ts-ignore
import todo from "../../../assets/todoApp.png";
//@ts-ignore
import api from "../../../assets/rickAndMorthy.png";
//@ts-ignore
import first from "../../../assets/first-website.png";

const Project = () => {
  // const inView = useInView();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-screen">
      <div className="project my-14">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="title relative text-center text-3xl font-semibold"
        >
          Project that i created
        </motion.h1>
        <motion.div className="  mx-auto mt-14 grid place-items-center space-y-10 md:p-14">
          <motion.div
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
          >
            <h1 className=" my-2 text-center text-xl">E-commerce-firebase</h1>

            <div className="card-project group relative h-[200px] w-[300px] cursor-pointer overflow-hidden rounded-xl bg-gray-400 text-white shadow-lg transition-all duration-300 md:h-[300px] md:w-[500px] ">
              <img
                src={ecommerce}
                alt=""
                className="h-full w-full  object-cover"
              />

              <div className="desc opacity:0 absolute  top-[500px] h-full w-full overflow-y-scroll bg-blue-500/90 p-5  pb-8 transition-all   duration-300  group-hover:top-0 group-hover:opacity-100 md:overflow-y-hidden ">
                <a
                  href="https://e-commerce-firebase.netlify.app"
                  className="block h-full"
                  target="_blank"
                >
                  <h2 className=" text-xl capitalize text-slate-800">
                    ecommerce app
                  </h2>
                  <p className="text-base text-slate-200">
                    ecommerce app with vite and firebase
                  </p>
                  <div className="desc opacity:0 mt-4 flex justify-between text-sm text-slate-200 transition-all group-hover:opacity-100">
                    <div className="col">
                      <h4 className="">fitur:</h4>
                      <ul className="list-disc pl-4  ">
                        <li>register/login</li>
                        <li>darkmode</li>
                        <li>cart logic</li>
                        <li>
                          redirect otomatis saat <br /> pembayaran ketika user
                          belum login
                        </li>
                        <li>
                          fitur search/sort/category <br /> product{" "}
                        </li>
                      </ul>
                    </div>
                    <div className="col">
                      <h4 className="">bahasa/framework yang di gunakan:</h4>
                      <ul className="list-disc pl-4  ">
                        <li>vite/typescript</li>
                        <li>firebase</li>
                        <li>tailwindcss</li>
                        <li>redux</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
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
          >
            <h1 className=" my-2 text-center text-xl">
              TodoApp(crud)-firebase
            </h1>
            <div className="card-project group relative h-[200px] w-[300px] cursor-pointer overflow-hidden rounded-xl bg-gray-400 text-white shadow-lg transition-all duration-300 md:h-[300px] md:w-[500px] ">
              <img src={todo} alt="" className="h-full w-full  object-cover" />

              <div className="desc opacity:0 absolute  top-[500px] h-full w-full overflow-y-scroll bg-green-500/80 p-5  pb-8 transition-all   duration-300  group-hover:top-0 group-hover:opacity-100 md:overflow-y-hidden ">
                <a
                  href="https://todofirebase-app.netlify.app"
                  className="block h-full"
                  target="_blank"
                >
                  <h2 className=" text-xl capitalize text-slate-800">
                    todoApp
                  </h2>
                  <p className="text-base text-slate-200">
                    todoApp with vite and firebase
                  </p>
                  <div className="desc opacity:0 mt-4 flex justify-between text-sm text-slate-200 transition-all group-hover:opacity-100">
                    <div className="col">
                      <h4 className="">fitur:</h4>
                      <ul className="list-disc pl-4  ">
                        <li>register/login</li>
                        <li>create</li>
                        <li>update</li>
                        <li>delete</li>
                      </ul>
                    </div>
                    <div className="col">
                      <h4 className="">bahasa/framework yang di gunakan:</h4>
                      <ul className="list-disc pl-4  ">
                        <li>vite/typescript</li>
                        <li>firebase</li>
                        <li>tailwindcss</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
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
          >
            <h1 className=" my-2 text-center text-xl">
              rick & morty(api-call)
            </h1>
            <div className="card-project group relative h-[200px] w-[300px] cursor-pointer overflow-hidden rounded-xl bg-gray-400 text-white shadow-lg transition-all duration-300 md:h-[300px] md:w-[500px] ">
              <img src={api} alt="" className="h-full w-full  object-cover" />

              <div className="desc opacity:0 absolute  top-[500px] h-full w-full overflow-y-scroll bg-red-500/90 p-5  pb-8 transition-all   duration-300  group-hover:top-0 group-hover:opacity-100 md:overflow-y-hidden ">
                <a
                  href="https://rick-and-morthy-api-with-react-query.netlify.app"
                  className="block h-full"
                  target="_blank"
                >
                  <h2 className=" text-xl capitalize text-slate-800">
                    rick-&-morthy-api
                  </h2>
                  <p className="text-base text-slate-200">
                    api call dengan pagination, search, dan detail items
                    (react-router-dom)
                  </p>
                  <div className="desc opacity:0 mt-4 flex justify-between text-sm text-slate-200 transition-all group-hover:opacity-100">
                    <div className="col">
                      <h4 className="">fitur:</h4>
                      <ul className="list-disc pl-4  ">
                        <li>search</li>
                        <li>pagination</li>
                        <li>dynamic pages(react router dom)</li>
                        <li>caching dengan react-query</li>
                      </ul>
                    </div>
                    <div className="col">
                      <h4 className="">bahasa/framework yang di gunakan:</h4>
                      <ul className="list-disc pl-4  ">
                        <li>vite/typescript</li>
                        <li>react-query(library)</li>
                        <li>react-router-dom(library)</li>
                        <li>tailwindcss</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateX: "-100vh", opacity: 0 }}
            animate={{
              translateX: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              stiffness: 120,
              type: "spring",
              delay: 0.3,
            }}
          >
            <h1 className=" my-2 text-center text-xl">
              my-first-website(course site)
            </h1>

            <div className="card-project group relative h-[200px] w-[300px] cursor-pointer overflow-hidden rounded-xl bg-gray-400 text-white shadow-lg transition-all duration-300 md:h-[300px] md:w-[500px] ">
              <img src={first} alt="" className="h-full w-full  object-cover" />

              <div className="desc opacity:0 absolute  top-[500px] h-full w-full overflow-y-scroll bg-blue-500/90 p-5  pb-8 transition-all   duration-300  group-hover:top-0 group-hover:opacity-100 md:overflow-y-hidden ">
                <a
                  href="https://my-first-project-course-website.netlify.app"
                  className="block h-full"
                  target="_blank"
                >
                  <h2 className=" text-xl capitalize text-slate-800">
                    web-course
                  </h2>
                  <p className="text-base text-slate-200">
                    website/project pertama saya
                  </p>
                  <div className="desc opacity:0 mt-4 flex justify-between text-sm text-slate-200 transition-all group-hover:opacity-100">
                    <div className="col">
                      <h4 className="">fitur:</h4>
                      <ul className="list-disc pl-4  ">
                        <li>dynamic animation</li>
                        <li>smooth scroll</li>
                        <li>javascript</li>
                      </ul>
                    </div>
                    <div className="col">
                      <h4 className="">bahasa/framework yang di gunakan:</h4>
                      <ul className="list-disc pl-4  ">
                        <li>javascript</li>
                        <li>sass</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
