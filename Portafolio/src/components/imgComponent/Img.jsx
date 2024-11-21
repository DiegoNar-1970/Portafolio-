import { useState } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

import './styleImg.css';

const Img = () => {
  const [animationState, setAnimationState] = useState({
    state:"initial",
    div:"",
    figure:""
  });

  const handleClick = () => {
    if (animationState.state === "initial") {
      setAnimationState(prevState=>({...prevState, state:"half"}));
    }
  };

  const handleReturnClick = () => {
    if (animationState.state === "half") {
      setAnimationState(prevState=>({
        ...prevState, 
        state:"back"
      }));
      setTimeout(() => {
        setAnimationState(prevState=>({...prevState, state:"initial"}));
      }, 2000); 
    }
  };

  return (
    <div>
      <div
        className={`text-white hidden top-2 end-2 sm:hidden md:fixed md:flex lg:fixed relative
          ${animationState.state === "half" ? 
          "move-half flex flex-col w-[200px]  items-center gap-2 h-[230px] transition-all duration-[3s] bg-purple-950" 
          : ""}
          ${animationState.state === "back" ? "move-back" : ""}
         `}
        onClick={handleClick}>
        <picture className={`relative w-[50px] h-[50px] m-[10px] ease-out duration-[2s] 
          ${animationState.state === "half" ? "w-[130px] h-[130px] ease-out duration-[1s]" :""}`}>
          <img src="../../public/img/me.jpg" className="object-cover absolute top-0 left-0 w-full h-full rounded-full" alt="diego" title='Soy Diego ' />
        </picture>
        {animationState.state === 'half' ? 
          <div className=' flex gap-2'>
            <a href="https://www.youtube.com">
              <FaGithub />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
          </div> 
          :null    
         }
       
      </div>
      {animationState.state === "half" && (
        <button onClick={handleReturnClick} className='text-white'>Regresar</button>
      )}
    </div>
  );
};

export default Img;