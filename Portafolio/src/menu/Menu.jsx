import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="text-white self-center  bg-[#323f5451] pl-[50px] pr-[50px] pt-[6px] pb-[6px] rounded-[.5em] 
    outline outline-[1px] outline-[#323f54] flex ">
      <ul className='flex gap-4'>
        <NavLink to='/' className='hover:text-[#a395e0] transition-all' title='visitar' >Home</NavLink >
        <NavLink to='/about' className='hover:text-[#6462c3] transition-all'>About</NavLink >
        <NavLink to='/contac' className='hover:text-[#6462c3] transition-all' >Contac</NavLink >
      </ul>
    </nav>
  )
}

export default Menu;
