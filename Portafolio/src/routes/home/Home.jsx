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
          <article className='form'>
            <section className="bg-white">
1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, provident praesentium! Nulla voluptates fugit, est nesciunt nemo obcaecati odit repellat, vero doloribus cumque excepturi veritatis. Repellat nobis commodi cupiditate omnis!
            </section>
            <section className="bg-red-950">
        2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, provident praesentium! Nulla voluptates fugit, est nesciunt nemo obcaecati odit repellat, vero doloribus cumque excepturi veritatis. Repellat nobis commodi cupiditate omnis!
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
        </div>
        <div>

        </div>
    </section>
  )
}

export default Home
