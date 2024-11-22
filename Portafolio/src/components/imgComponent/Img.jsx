import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import "./styleImg.css";

const Img = () => {
  const [animationState, setAnimationState] = useState({
    state: "initial",
    div: "",
    figure: "",
  });

  const handleClick = () => {
    if (animationState.state === "initial") {
      setAnimationState((prevState) => ({ ...prevState, state: "half",figure:'scale'}));
    }
  };

  const handleReturnClick = () => {
    if (animationState.state === "half") {
      setAnimationState((prevState) => ({
        ...prevState,
        state: "back",
      }));
      setTimeout(() => {
        setAnimationState((prevState) => ({ ...prevState, state: "initial" }));
      }, 2000);
    }
  };

  return (
    <div onClick={handleReturnClick} className={``}>
      <div onClick={handleClick}
        className={`text-white hidden top-2 end-2 sm:hidden md:fixed md:flex lg:fixed relative 
          ${animationState.state === "half" 
            ? `move-half flex flex-col w-[140px] h-[150px] items-center transition-all ease-out duration-[3s] bg-fondo outline outline-[1px] outline-border  rounded-xl 
              `
            : ""
          }
          ${animationState.state === "back" ? "move-back" : ""} `}>
        <div className="blur absolute -z-10"></div>
        <picture 
          className={`relative w-12 h-12 m-3 
          ${ animationState.state === "half" 
           ? "min-w-[90px] min-h-[90px] transition-all ease-out duration-1000" : ""}`}>
          <img
            src="../../public/img/me.jpg"
            className="object-cover absolute top-0 left-0 w-full h-full rounded-full"
            alt="diego"
            title="Soy Diego "/>
        </picture>
        {animationState.state === "half" ? (
          <div className={`flex gap-2  `}>
            <a href="https://www.youtube.com" className="buttn text-[17px]">
              <FaGithub />
            </a>
            <a href="https://www.youtube.com" className="buttn text-[17px] text-blue-500">
              <FaLinkedinIn />
            </a>
            <a href="https://www.youtube.com" className="buttn text-[17px] text-green-500">
              <FaWhatsapp />
            </a>
            <a href="https://www.youtube.com" className="buttn text-[17px] text-orange-400">
              <FaInstagram />
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Img;
