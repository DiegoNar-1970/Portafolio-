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
          <article className='form '>
            <section className=" relative flex flex-col min-h-[200px] duration-1000   rounded-[1em] me">  
              {/* <PcRender /> */}
              <h1 className='mt-[20px] '> relative</h1>
              <p className='text-[22px]  '>I adapt to the designs you would like to have on your website using best practices for scalable and maintainable code </p>
            </section>
            <section className=" bg-[#282a2c] outline outline-[1px] outline-[#6b6c6d88] rounded-[1em]">
        2 Lorem ipsum dolor sit amet consectetur, adipisicing eli t. Molestiae, provident praesentium! Nulla voluptates fugit, est nesciunt nemo obcaecati odit repellat, vero doloribus cumque excepturi veritatis. Repellat nobis commodi cupiditate omnis!
            </section>
            <section className="bg-gray-300">
            3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, provident praesentium! Nulla voluptates fugit, est nesciunt nemo obcaecati odit repellat, vero doloribus cumque excepturi veritatis. Repellat nobis commodi cupiditate omnis!
            </section>
            <section className="bg-yellow-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, provident praesentium! Nulla voluptates fugit, est nesciunt nemo obcaecati odit repellat, vero doloribus cumque excepturi veritatis. Repellat nobis commodi cupiditate omnis!
            </section>
            <section className="bg-purple-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, explicabo quaerat. Doloremque quo voluptatem tempora ratione iusto est quod repellat dolorum repellendus totam, praesentium iure repudiandae illum nemo vel aliquam.
            </section>
            <section className="bg-slate-800">
              6 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, provident praesentium! Nulla voluptates fugit, est nesciunt nemo obcaecati odit repellat, vero doloribus cumque excepturi veritatis. Repellat nobis commodi cupiditate omnis!
            </section>
          </article>
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
