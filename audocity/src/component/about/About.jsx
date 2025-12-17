import React from 'react'
import about from '../../assets/about.png'
import playicon from '../../assets/playicon.png'

const About = ({play, setPlay}) => {
  const VideoPlay=()=>{
    setPlay(!play);
  }
  return (
    <>
    <div id='about' className='px-[10%] about my-[100px]  flex flex-col gap-3 items-center justify-between md2:flex-row md2:gap-4'> 
    <div className='about-left basis-[40%] relative'>
        <img className='w-full rounded-[10px]' src={about}/>
        <img onClick={VideoPlay} className='absolute top-[40%] left-[40%] cursor-pointer w-[100px] animate-pulse' src={playicon} />

    </div>
    <div className='about-right'>
        <h3 className='text-[#212ea0] text-[16px] font-semibold'>About University</h3>
        <h2 className='text-[35px] text-[#000f38] max-w-[400px] my-[10px] font-bold'>Nurturing Tomorrow's Leaders Today</h2>
        <p className='text-[#676767] mb-[15px] max-w-[750px]'>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
        <p  className='text-[#676767] mb-[15px] max-w-[750px]'>
            With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
        </p>
        <p  className='text-[#676767] mb-[15px] max-w-[750px]'>
            Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
        
        </p>
    </div>
    </div>
    </>
  )
}

export default About