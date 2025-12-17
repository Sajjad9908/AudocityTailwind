import React from 'react'
import hero from '../../assets/hero-wMB5D_Q0.png'
import darkArrow from '../../assets/Darkarrow.png'

const Hero = () => {
  return (
    <>
    <div id='hero' style={{backgroundImage:`linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${hero})`,backgroundSize:'cover',backgroundPosition:'center'}} className='pl-[10%] pr-[5%] hero w-full min-h-[100vh] text-[white] flex flex-col justify-center gap-8'>
    <div className='p-3.5 text-center flex items-center flex-col'>
        <h1 className='text-[20px] sm:text-[60px] font-semibold'>We Ensure better education for a better world</h1>
        <p className='max-w-[700px] mt-[10px] mx-auto mb-[20px] leading-5'>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
   
        <button className='bg-[#FFF] text-[#212121] rounded-[30px] border-0 cursor-pointer outline-0 p-3 flex items-center justify-center text-center gap-2'>Explore More <img className='w-5' src={darkArrow}/> </button>
    
    </div>
    </div>
    </>
  )
}

export default Hero