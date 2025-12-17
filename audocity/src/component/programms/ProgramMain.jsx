import React from 'react'

const ProgramMain = ({ image, degree, captionImage }) => {
  return (
    <div className='program relative basis-[31%] group cursor-pointer overflow-hidden'>
      
      <img className='w-full rounded-[10px] block' src={image} />

     
      <div className='absolute inset-0 invisible opacity-0 
        flex flex-col items-center justify-center 
        transition-all duration-500 
        group-hover:visible group-hover:opacity-100 group-hover:bg-gradient-to-b 
        group-hover:from-[rgba(8,0,58,0.7)] 
        group-hover:to-[rgba(8,0,58,0.7)]'
      >

      
        <img 
          src={captionImage}
          className='translate-y-10 group-hover:translate-y-0 transition-all duration-500'
        />

        <p className='text-white mt-2 translate-y-10 group-hover:translate-y-0 transition-all duration-500'>
          {degree}
        </p>

      </div>
    </div>
  )
}

export default ProgramMain
