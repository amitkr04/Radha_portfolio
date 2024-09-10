import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import Pic from "../assets/Radha_2.png";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2x1 container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="mmd:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome To My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span className="text-red-700 font-bold"> student</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Student", "Aspiring Gov Exam Candidate"]}
                typeSpeed={40}
                backSpeed={50}
                // backDelay={1000}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Hi, I'm Radha from Delhi. I have done my graduation in B.sc with
              82% from Rajive Gandhi govt degree college Kotshera and currently
              preparing for govt exam. My academic journey in science has
              equipped me with analytical skills and a solid foundation in
              various subjects. As I work towards securing a role in the
              goverment sector, i'm commited to making a positive impact on
              society. with dedication, discipline and a strong sense of
              purpose, I'm focused on achieving my goal of contributing to the
              community through a carrier in goverment service.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Avaliable on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100021845257379">
                      <FaFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/">
                      <FaYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://telegram.org/">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/amit_kashyapa_/">
                      <FaInstagramSquare className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5 justify-center">
                  <FaYoutube className="text-2xl cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            {/* rounded-full md:w-[450px] md:h-[450px] */}
            <img
              src={Pic}
              className="border border-black rounded-full md:w-[450px] md:h-[450px]"
              alt="photo"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
