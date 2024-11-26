// import PcRender from '../../threejs/PcRender'
import './homeStile.css'

const Home = () => {
  return (
    <section className='text-white p-2  mt-[105px] flex flex-col '>
        <div className="flex flex-col items-center gap-2">
          <span className="typing text-[15px] font-robotRegular ">If you can imagine it, you can create it</span>
          <div className="flex gap-[13px] flex-wrap max-w-[770px] text-[40px] ">
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
          <div className="tarjeta "> 
            <button 
            className='relative z-10 '>
              Show my works
          </button>
          </div>
          <picture className='relative w-[300px] h-[200px] overflow-hidden mt-10 rounded-[2em]'>
            <img className='absolute object-contain top-0 left-0 w-full h-full '
            src="../../../public/img/coding.gif" alt="" />
          </picture>
          <section className='form '>
            <article className=" flex flex-col min-h-[200px] justify-end  duration-1000 rounded-[1em] me p-3">  
              {/* <PcRender /> */}
              <div className='flex gap-1'>
                <h1 className='mt-[20px] text-[25px] max-w-[50%] '>A little</h1>
                <h1 className='mt-[20px] text-[25px] max-w-[50%] text-[#9480ee]'>About me</h1>
              </div>
              <p className='text-[19px] font-robot max-w-[75%] '>
                I am a full stack developer with experience in technologies like react, I am good at express js or Spring boot, my main language is javascript and I always try to improve as a programmer, I always give my best, I am always doing projects
              </p>
            </article>
            <article className=" bg-[#381d54]  rounded-[1em] flex flex-col justify-center items-center min-h-[190px] max-h-[190px]">
              <span className='text-[80px]'>EN</span>
              <div className='flex gap-[5px] mt-[-28px]'>
                <span>EN</span>  
                <span>ES</span>  
              </div>
            </article>
            <article className=" bg-[#381d54] max-h-[190px] min-h-[190px] rounded-[1em] flex flex-col justify-center items-center">
                <h2 className='text-[12px] font-robotMedium mb-[-25px]'>Nivel de ingles</h2>
                <span className='text-[80px]'>B2</span>
            </article>
            <article className="ardilla ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi dolorem tempora consequuntur illum hic? Sequi, nulla cum facilis eum quam ducimus veritatis rem eos ut recusandae, ipsa vitae consectetur porro.
            </article>
            <article className="bg-purple-400">
                  5
            </article>
            <article className="bg-blue-500">
              6 L
            </article>
            <article className="bg-slate-800">
              7 L
            </article>
            <article className="bg-slate-800">
              8L
            </article>
            <article className="bg-slate-800">
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
        </div>
        <div>

        </div>
    </section>
  )
}

export default Home
