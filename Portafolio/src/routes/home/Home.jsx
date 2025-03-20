// import PcRender from '../../threejs/PcRender'
import { FaAngular, FaExternalLinkAlt, FaHtml5, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiGraphql, SiMongodb, SiSpring } from "react-icons/si";


import InfiniteScroll from "../../components/infiniteScroll/InfiniteScroll";
import './homeStile.css';

const Home = () => {
  return (
    <section className='text-white p-2  mt-[150px] flex flex-col gap-[120px]'>
        <div className="flex flex-col items-center gap-[1em]">
          <span className="typing text-[15px] font-robotRegular ">If you can imagine it, you can create it</span>
          <div className="flex gap-[13px] flex-wrap max-w-[770px] text-[35px] ">
            <span className="text-[#9480ee]">Transforming</span>
            <span>ideas</span>
            <span>into</span>
            <span >custom </span>
            <span>software</span>
            <span>with</span>
            <span>The</span>
            <span className="text-[#9480ee]">Best</span>
            <span className="text-[#9480ee]">User</span>
            <span className="text-[#9480ee]">Experience</span>
          </div>
          <span className='font-robot text-[22px]'>
            !Hi i&apos;m Diego a Full stack computer engineer, i live in  Colombia
          </span>
          {/* <div className="tarjeta "> 
            <button 
            className='relative z-10 '>
              Show my works
          </button>
          </div> */}
        </div>
        <section className='form '>
            <article className=" flex flex-col min-h-[200px] justify-end  duration-1000 rounded-[1em] me  p-3">  
              
              {/* <PcRender /> */}
              <div className='flex gap-1'>
                <h1 className='mt-[20px] text-[25px] max-w-[50%] '>A little</h1>
                <h1 className='mt-[20px] text-[25px] max-w-[50%] text-[#9480ee]'>About me</h1>
              </div>
              <div className='text-[19px] font-robotRegular  max-w-[75%] '>
                <p>I am a FullStack Developer with experience in technologies like react, I am good at express js or Spring boot, my main language is javascript and I always try to improve as a programmer, I always give my best, I am always doing projects  </p>
              </div>
            </article>
            <article className=" bg-[#381d54]  rounded-[1em] flex flex-col justify-center items-center min-h-[190px] max-h-[190px] opacity-[0.9] relative">
                <div className="absolute inset-0 bg-image rounded-[1em]  z-[-10]"></div>
              <span className='text-[80px]'>EN</span>
              <div className='flex gap-[5px] mt-[-28px]'>
                <span>EN</span>  
                <span>ES</span>  
              </div>
            </article>
            <article className=" bg-[#381d54] max-h-[190px] min-h-[190px] rounded-[1em] flex flex-col justify-center items-center opacity-[0.9] relative">
                <h2 className='text-[12px] font-robotMedium mb-[-25px]'>Nivel de ingles</h2>
                <div className="absolute inset-0 bg-image rounded-[1em]  z-[-10]"></div>
                <span className='text-[80px]'>B2</span>
            </article>
            <article className="ardilla p-3 rounded-[1em] h-[200px]">
              <div className="absolute inset-0 bg-image rounded-[1em]  z-[-10] "></div>
              <FaGithub className="z-[10] absolute text-[27px]"/>
              <FaExternalLinkAlt className="z-[10] absolute text-[17px] right-2 "/>
              <div className="bottom-2 z-[10] text-[15px] absolute">
                <h3 className="text-[25px]">GitHub</h3>
                <span className="  font-robotRegular ">
                  This is my work position, where I upload all the projects I am doing and part of my education.
                </span>
              </div>
            </article>
            <article className="bg-[#ac8a70] flex flex-wrap gap-3 justify-center items-center rounded-[1em] p-2 ">
              <IoLogoJavascript  className="text-[35px]" />
              <FaReact className="text-[35px]" />
              <FaHtml5 className="text-[35px]"  />
              <SiExpress className="text-[35px]"  />
              <GrMysql className="text-[35px]"  />
              <SiGraphql className="text-[35px]"/>
              <RiTailwindCssFill className="text-[35px]" />
              <SiMongodb  className="text-[35px]"  />
              <FaAngular className="text-[35px]"  />
              <FaNodeJs className="text-[35px]"  />
              <SiSpring className="text-[35px]"  />
              <FaPython className="text-[35px]"  />
            </article>
            <div className="relative rounded-[1em] bg-red-500 opacity-[0.9] p-4 flex flex-col justify-center items-center">
              <h3 className="mb-[-35px] text-[17px] font-robot">Age</h3>
              <span className="text-[100px]">21</span>
              <span className="mt-[-25px] text-[17px] font-robot">Years Old</span>
            </div>
            <article className="bg-blue-950 rounded-[1em] flex items-center justify-center opacity-[0.9] relative"  >
              <div className="absolute inset-0 bg-image rounded-[1em]  z-[-10]"></div>
              
              <FaLinkedinIn className="text-[100px]"/>
            </article>
            <article className="bg-slate-800">
              8L
            </article>
            <article className="bg-slate-800 programing">
              9L
            </article>
          </section>
          <article className='flex flex-wrap flex-col mt-[-350px] items-center justify-center p-[140px]'>
            <h1>Show my recents works</h1>
            <div className='flex flex-wrap gap-4'>
              <section className='flex flex-col bg-blue-500  max-w-[550px] '>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iusto deserunt ullam, minus error cupiditate ipsa quis explicabo maiores assumenda aliquam incidunt quaerat. At nemo, alias officia obcaecati iste cupiditate?</h2>
              </section>
              <section className='flex flex-col bg-blue-500  max-w-[550px] '>
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas cupiditate distinctio accusamus, quae atque! Officiis quas magnam vitae magni, quod adipisci commodi quisquam, culpa eligendi quos repellendus hic. Quam.</h2>
              </section>
              <section className='flex flex-col bg-blue-500  max-w-[700px] '>


                      <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa placeat dicta iusto saepe iste perferendis nemo id laudantium ut modi vitae vel eveniet natus fuga, non qui odio molestias fugiat?</h2>
              </section>
            </div>
          </article>
          <article>
            <InfiniteScroll/>
          </article>
    </section>
  )
}

export default Home
