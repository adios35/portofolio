import React, { useRef } from "react";
import "./style.css";
// eslint-disable-next-line
//@ts-ignore
import bg from "../../assets/footer.jpg";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isInView, setisInView] = React.useState(false);
  const footerRef = useRef(null);
  const inView = useInView(footerRef);

  React.useEffect(() => {
    inView && setisInView(true);
  }, [inView]);

  return (
    <footer
      ref={footerRef}
      // style={{
      //   background: `linear-gradient(to right, rgba(30, 41, 59, .90), rgba(0, 0, 0, .65)),url(${bg})`,
      //   backgroundPosition: "100px",
      // }}
      className=" w-full overflow-hidden bg-black/60 object-cover px-10 py-14  pb-28 text-slate-200  md:px-20 md:pb-10"
    >
      <div className="container md:translate-x-16">
        <div className="row flex flex-wrap  gap-10 md:justify-around">
          <div
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="col sm:text-md text-sm"
          >
            <h4 className="text-base md:text-xl">Tentang Saya</h4>
            <p>Nama: Atib</p>
            <p>Profesi: Web Developer</p>
          </div>
          <div
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
            }}
            className="col sm:text-md text-sm"
          >
            <h4 className="text-base md:text-xl">Kontak</h4>
            <p>Email: atibgmc@gmail.com</p>
            <p>Whatsapp: +62 812-1073-6769</p>
          </div>
          <div
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
            }}
            className="col sm:text-md text-sm"
          >
            <h4 className="text-base md:text-xl">Ikuti Saya</h4>
            <a
              href="https://www.linkedin.com/in/proxima-midnight-65a974252/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a href="https://github.com/adios35" target="_blank">
              GitHub
            </a>
            <a href="https://www.instagram.com/atib_lp/" target="_blank">
              Instagram
            </a>
          </div>
          <div
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
            }}
            className="col sm:text-md text-sm"
          >
            <h4 className="text-base md:text-xl">Navigasi</h4>
            <Link to="/">Home</Link>
            <Link to="project">Portfolio</Link>
            <Link to="contacts">Contact Me</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
