import { useState } from 'react';
import './styleImg.css';

const Img = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
    className={`text-white hidden top-2 end-2 sm:hidden md:fixed md:flex lg:fixed awebo transition-all ease-out 
      duration-300 ${isExpanded ? 'expanded' : ''}`}
    onClick={handleClick}>
        <picture className=" relative w-[50px] h-[50px]">
            <img src="../../public/img/me.jpg" className="object-cover absolute top-0 left-0 w-full h-full rounded-full" alt="" />
        </picture>
    </div>
  )
}

export default Img
