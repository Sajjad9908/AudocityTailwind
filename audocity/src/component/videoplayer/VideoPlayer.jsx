import React, { useRef } from 'react'

const VideoPlayer = ({play,setPlay}) => {
  
const player=useRef(null);
  const closePlayer=(e)=>{
    if (e.target==player.current){
      setPlay(false);
    }
  }

  return (
   
    <div onClick={closePlayer} ref={player} className={`fixed h-full top-0 left-0 w-full bg-[rgba(0,0,0,0.9)] ${play ? 'flex' : 'hidden'} items-center justify-center z-50 `}>
        <video className='w-[90%] max-w-[900px]' height="50%" controls autoPlay muted>
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
Your browser does not support the video tag.
</video>
    
    </div>
 

  )
}

export default VideoPlayer 