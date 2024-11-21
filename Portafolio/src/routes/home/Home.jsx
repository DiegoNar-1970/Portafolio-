import './homeStile.css'

const Home = () => {
  return (
    <section className='text-white p-2  mt-[105px] flex flex-col '>
        <div className="flex flex-col items-center gap-2">
          <span className="typing text-[15px] ">If you can imagine it, you can create it</span>
          <div className="flex gap-[13px] flex-wrap max-w-[800px] text-[40px] ">
            <span className="text-[#9480ee]">Transforming</span>
            <span>ideas</span>
            <span>into</span>
            <span >custom </span>
            <span>software</span>
            <span>with</span>
            <span className="text-[#9480ee]">Top</span>
            <span className="text-[#9480ee]">Ux</span>
            <span className="text-[#9480ee]">Experience</span>
          </div>
          <span>
            !Hi i&apos;m Diego a Full stack computer engineer, i live in  Colombia
          </span>
          <button className="mt-[40px] p-4 bg-[#5700ee] outline outline-[1px] buttn "> 
            see My Proyects
          </button>
        </div>
        <div>

        </div>
    </section>
  )
}

export default Home
