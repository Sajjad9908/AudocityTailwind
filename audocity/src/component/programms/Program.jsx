
import Title from '../title/Title'
import captionImage1 from '../../assets/caption1.png'
import program1 from '../../assets/program1.png'
import program2 from '../../assets/program2.png'
import caption2 from '../../assets/caption2.png'
import program3 from '../../assets/program3.png'
import caption3 from '../../assets/caption3.png'

import ProgramMain from './ProgramMain'

const Program = () => {
  return (
    <>
    <div id='program'>
    <Title paraTitle='PROGRAMS' heading='Explore Our Programs'/>
    <div className='pl-[10%] pr-[10%] sm:flex-wrap flex flex-col gap-4 sm:flex-row sm:gap-0 items-center justify-between w-[90%] my-[80px] mx-auto'>
     <ProgramMain image={program1} degree='Graduation Degree' captionImage={captionImage1}/>
      <ProgramMain image={program2} degree='Master Degree' captionImage={caption2}/>
       <ProgramMain image={program3} degree='Post Graduation' captionImage={caption3}/>
    </div>
    </div>
    </>
  )
}

export default Program