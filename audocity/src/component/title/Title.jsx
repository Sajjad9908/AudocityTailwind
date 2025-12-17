import React from 'react'

const Title = ({paraTitle,heading}) => {
  return (
    <div className='pl-[10%] pr-[10%] mx-auto mt-[70px] mb-[30px] text-center'>
    
    <p className='text-[#212EA0] text-[15px] text-center font-semibold'>{paraTitle}</p>
    <h2 className='text-[32px] font-bold mt-[5px]'>{heading}</h2>

    </div>
  )
}

export default Title