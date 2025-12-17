import React from 'react'
import Title from '../title/Title'
import gallery1 from '../../assets/gallery-1-HP2uKW94.png'
import gallery2 from '../../assets/gallery-2-DYatBGZh.png'
import gallery3 from '../../assets/gallery-3-C4KpO1U2.png'
import gallery4 from '../../assets/gallery-4-LJEJ329C.png'
import whiteArrow from '../../assets/whiteArrow.png'

const Gallery = () => {
  return (
   <>
   <Title paraTitle='Gallery' heading='Campus Photos'/>
   <div id='campus' className='pl-[10%] pr-[10%] grid items-center grid-cols-12 justify-between my-20 mx-auto w-[90%] text-center gap-3'>
    <div className='col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-3'>
        <img src={gallery1} className='min-w-[30%] rounded-2xl'></img>
    </div>
    <div className='col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-3'>   <img src={gallery2} className='min-w-[30%] rounded-2xl'></img></div>
    <div className='col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-3'><img src={gallery3} className='min-w-[30%] rounded-2xl'></img></div>
    <div className='col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-3'><img src={gallery4} className='min-w-[30%] rounded-2xl'></img></div>
        <button className='bg-[#212EA0] col-span-12 mt-9 text-white rounded-[30px] border-0 cursor-pointer outline-0 p-3.5 w-[250px] flex items-center justify-center text-center gap-2 mx-auto'>Explore More <img className='w-5 text-white' src={whiteArrow}/> </button>
   </div>
 
   </>
  )
}

export default Gallery