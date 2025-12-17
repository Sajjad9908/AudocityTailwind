import React, { useRef } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';

import { FaLongArrowAltLeft } from "react-icons/fa";
import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.png';
import user4 from '../../assets/user4.png';




import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';


import { Navigation } from 'swiper/modules';

const Swipper = () => {
  const swiperRef = useRef(null);


  const testimonials = [
    {
      id: 1,
      image: user1,
      name: 'John Doe',
      title: 'Student',
      text: 'This is an amazing course that helped me learn React. The instructors are very knowledgeable and the curriculum is well structured. I would highly recommend this to anyone.',
    },
    {
      id: 2,
      image: user2,
      name: 'Jane Smith',
      title: 'Developer',
      text: 'Great experience with this platform. The content is engaging and the support team is very responsive. I have improved my skills significantly in just a few weeks.',
    },
    {
      id: 3,
      image: user3  ,
      name: 'Mike Johnson',
      title: 'Student',
      text: 'Excellent course materials and interactive lessons. The projects are challenging and help reinforce what I have learned. This is worth every penny spent.',
    },
    {
      id: 4,
      image: user4,
      name: 'Sarah Williams',
      title: 'Designer',
      text: 'Outstanding learning experience. The mentors provided valuable feedback on my projects. I feel confident to take on real world projects now after completing this course.',
    },
    {
      id: 5,
      image: user1,
      name: 'David Brown',
      title: 'Engineer',
      text: 'Perfect blend of theory and practice. The course covers everything from basics to advanced concepts. I have already applied what I learned in my current job.',
    },
    {
      id: 6,
      image: user2,
      name: 'Emma Davis',
      title: 'Developer',
      text: 'Highly professional and well organized course. The resources provided are comprehensive and up to date. I would definitely enroll in other courses by this instructor.',
    },
  ];

  return (
    <div className="swiper-container relative pl-[10%] pr-[10%]">
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
    
        {[0, 1, 2].map((slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <div className="flex flex-col items-center justify-center bg-white gap-0 p-1 md:gap-8 md:p-6 md:flex-row min-w-[300px]">
            
              <div className="flex flex-col gap-4 items-start bg-white p-6 rounded-lg basis-[70%] min-h-[150px]">
                 <div className='flex gap-4 items-center w-full'>
                <img
                  src={testimonials[slideIndex * 2].image}
                  alt={testimonials[slideIndex * 2].name}
                  className="w-20 h-full rounded-[50%] object-cover flex-shrink-0 border-[6px] border-[#2a2f90]"
                />
                <div  className='flex flex-col gap-1'>
         <h3 className="font-bold text-lg">{testimonials[slideIndex * 2].name}</h3>
           <p className="text-sm text-gray-600">{testimonials[slideIndex * 2].title}</p>
                </div>
                </div>
                <div className="flex-1 min-h-[150px] basis-[70%]">
                
                
                  <p className="text-sm text-gray-700 leading-relaxed line-clamp-4">
                    {testimonials[slideIndex * 2].text}
                  </p>
                </div>
              </div>

              {/* Second item in slide */}
              <div className="flex flex-col gap-4 items-start bg-white p-6 rounded-lg basis-[70%] h-full">
                <div className="flex items-center gap-4 w-full">
                  <img 
                    src={testimonials[slideIndex * 2 + 1].image}
                    alt={testimonials[slideIndex * 2 + 1].name}
                    className="w-20 h-full rounded-[50%] object-cover flex-shrink-0 border-[6px] border-[#2a2f90]"
                  />
                  <div className="flex flex-col justify-start gap-1">
                    <h3 className="font-bold text-lg leading-tight m-0">{testimonials[slideIndex * 2 + 1].name}</h3>
                    <p className="text-sm text-gray-600 leading-tight m-0">{testimonials[slideIndex * 2 + 1].title}</p>
                  </div>
                </div>
                
                <div className="flex-1 min-h-[150px] basis-[70%]">
                  <p className="text-sm text-gray-700 leading-relaxed line-clamp-4">
                    {testimonials[slideIndex * 2 + 1].text}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrow Buttons - Swiper built-in */}
      <div className="swiper-button-prev p-3 w-20 h-20 sm:w-[60px] sm:h-[60px]"><FaLongArrowAltLeft style={{color: "white"}}/></div>
      <div className="swiper-button-next p-3 w-20 h-20 sm:w-[60px] sm:h-[60px] "><FaLongArrowAltRight style={{color: "white"}}/></div>
    </div>
  );
};

export default Swipper;