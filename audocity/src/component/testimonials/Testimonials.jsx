import React from 'react'
import Title from '../title/Title'
import Swipper from './Swipper'

const Testimonials = () => {
  return (
   <> 
   <div id='testimonial' className='pl-0 pr-0 sm:pl-[10%] sm:pr-[10%]'>
   <Title paraTitle='TESTIMONIALS' heading='What Student Says'/>
   
   <Swipper/>
   </div>

   </>
  )
}

export default Testimonials