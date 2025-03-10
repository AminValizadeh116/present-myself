import styled from "./about.module.css";
// import ownerPic from "./../../assets/owners2.jpg";
import ownerPic from "./../../assets/owners.jpg";
import githubPic from "./../../assets/icons-github.png";
import emailPic from "./../../assets/icons-email.png";
import phonePic from "./../../assets/icons-phone.png";
import Header from "../../components/header/Header";
import { useState } from "react";
import CounterUp from "../../components/counterUp/CounterUp";
import Footer from "../../components/footer/Footer";

function About() {

  return (
    <div className={`min-h-lvh text-white ${styled.about}`}>
      <Header />
      <div className="flex justify-center mt-5 pb-10">
        <div className="w-4xl grid grid-cols-12 gap-2">
          <div className="col-span-3 drop-shadow-lg shadow-white">
            <img className="rounded-2xl" src={ownerPic} alt="" />
          </div>
          <div className="bg-neutral-800 col-span-9 p-5 rounded-2xl">
            <p>Name: Amin Valizadeh 
              {/* & Armita Zareie */}
              </p>

            <div className="flex gap-15 my-5">
              <a href="mailto:Valizadeh.amin.116.official@gmail.com">
                <img src={emailPic} alt="email" width='30px' />
              </a>

              <a href="tel:+989371165950">
                <img src={phonePic} alt="phone" width='30px' />
              </a>
              <a href="https://github.com/AminValizadeh116" target="_blank">
                <img src={githubPic} alt="github" width='30px' />
              </a>
            </div>

            <hr />
            <h2 className="text-2xl italic my-2">Summary</h2>
            <p className="mb-5">
              Frontend developer with over 3 years of experience in designing
              and implementing modern web applications using React.js. Skilled
              in TypeScript, Redux, and frontend development tools. Passionate
              about learning new technologies and optimizing user experience.
            </p>

            <hr />
            <h2 className="text-2xl italic my-2">Skills</h2>
            <ul className="mb-5">
              <li>
                <b> Frontend Development:</b> React.js, Next.js, Redux, Context
                API
              </li>
              <li>
                <b>Programming Languages:</b> JavaScript (ES6+), TypeScript
              </li>
              <li>
                <b>UI Design:</b> HTML5, CSS3, TailwindCSS, Material-UI,
                Styled-components
              </li>
              <li>
                <b>Tools & Libraries:</b> Webpack, Babel, Jest, React Testing
                Library
              </li>
              <li>
                <b>Version Control:</b> Git, GitHub, GitLab
              </li>
              <li>
                <b>Backend Tools:</b> Node.js, Express.js, Firebase
              </li>
              <li>
                <b>Databases:</b> MongoDB, PostgreSQL, Firebase Firestore
              </li>
            </ul>

            <hr />

            <h2 className="text-2xl italic my-2">Languages</h2>
            <div className="flex items-center">
              <p className="pr-25">persion: </p>
              <div className="bg-white w-5 h-5 rounded-full mr-1"></div>
              <div className="bg-white w-5 h-5 rounded-full mr-1"></div>
              <div className="bg-white w-5 h-5 rounded-full mr-1"></div>
              <div className="bg-white w-5 h-5 rounded-full mr-1"></div>
              <div className="bg-white w-5 h-5 rounded-full mr-1"></div>
            </div>
            <div className="flex items-center">
              <p className="pr-25.5">english: </p>
              <div className="bg-white w-5 h-5 rounded-full mr-1"></div>
              <div className="bg-white w-5 h-5 rounded-full mr-1"></div>
              <div className="bg-white w-5 h-5 rounded-full mr-1"></div>
              <div className="border border-white w-5 h-5 rounded-full mr-1"></div>
              <div className="border border-white w-5 h-5 rounded-full mr-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-4xl">
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <CounterUp />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;

