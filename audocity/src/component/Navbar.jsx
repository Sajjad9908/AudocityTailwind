import React, { useEffect, useState } from 'react'
import logo from '../assets/logo-DUdXW4nF.png'
import menu from '../assets/menubar.png'
import { Link } from 'react-scroll';

const Navbar = ({darkBackground, setDarkBackground}) => {
  const[sticky,setSticky]=useState(false);
  const [sidebar,setSidebar]=useState(false); 

  useEffect(()=>{ 
  window.addEventListener("scroll",()=>{
    window.scrollY > 50 ? setSticky(true): setSticky(false);
  })
  },[])
  const SidebarToggler=()=>{
    setSidebar(!sidebar);
    setDarkBackground(!darkBackground);
  }

  return (
    <>
    <nav className={`fixed top-0 left-0 w-full z-10 hidden md2:flex justify-between items-center p-4 gap-8 pl-[10%] pr-[10%] ${
    sticky ? 'bg-[#212EA0]' : 'bg-transparent'
  } text-white` }>
      <img src={logo} alt="Logo" className="h-10 w-[180px]" />
      <ul className='flex items-center justify-center gap-4'>
        <li><Link to='hero' smooth={true} offset={0} duration={500} className='cursor-pointer'>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500} className='cursor-pointer'>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500} className='cursor-pointer'>AboutUs</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500} className='cursor-pointer'>Campus</Link></li>
        <li><Link to='testimonial' smooth={true} offset={-260} duration={500} className='cursor-pointer'>Testomonial</Link></li>
        <li><Link to='contactus' smooth={true} offset={-260} duration={500}><button className='bg-[#FFF] text-[#212121] rounded-[30px] border-0 cursor-pointer outline-0 p-3.5 w-[150px]'>Contact Us </button></Link></li>
      </ul>
    </nav>


   <nav className={`fixed top-0 left-0 w-full z-10 flex md2:hidden justify-between items-center p-4 gap-8 pl-[10%] pr-[10%] 
  } text-white  ${sticky ? 'bg-[#212EA0]' : 'bg-transparent'} ` }>
      <img src={logo} alt="Logo" className="h-10 w-[180px]" />
      <img src={menu} alt="Menu" className="z-30 h-8 w-8 cursor-pointer" onClick={SidebarToggler}/>
      <ul className={`flex items-center flex-col absolute top-0 w-[200px] pt-[135px] gap-8 bg-[#212EA0] h-screen  ${sidebar ? 'right-0' : '-right-[600px]'} transition-all duration-150` }>
        <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={SidebarToggler} className='cursor-pointer'>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500} onClick={SidebarToggler} className='cursor-pointer'>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500} onClick={SidebarToggler} className='cursor-pointer'>AboutUs</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500} onClick={SidebarToggler} className='cursor-pointer'>Campus</Link></li>
        <li><Link to='testimonial' smooth={true} offset={-260} duration={500} onClick={SidebarToggler} className='cursor-pointer'>Testomonial</Link></li>
        <li><Link to='contactus' smooth={true} offset={-260} duration={500} onClick={SidebarToggler}><button className='bg-[#FFF] text-[#212121] rounded-[30px] border-0 cursor-pointer outline-0 p-4'>Contact Us </button></Link></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar