import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/hero/Hero'
import Progran from './component/programms/Program'
import Program from './component/programms/Program'
import About from './component/about/About'
import Gallery from './component/gallery/Gallery'
import Testimonials from './component/testimonials/Testimonials'
import Contactus from './component/contactus/Contactus'
import Footer from './component/footer/Footer'
import VideoPlayer from './component/videoplayer/VideoPlayer'

const App = () => {
  const [play,setPlay]=React.useState(false);
  const[darkBackground,setDarkBackground]=React.useState(false);
  return (
  <>
 
  <Navbar darkBackground={darkBackground} setDarkBackground={setDarkBackground} />
   <div className={`${darkBackground? 'opacity-70':''} `}>
  <div id="hero"><Hero/></div>
  <div id="program"><Program/></div>
  <div id="about"><About play={play} setPlay={setPlay} /></div>
  <div id="campus"><Gallery/></div>
  <div id="testimonial"><Testimonials/></div>
  <div id="contactus"><Contactus/></div>
  <Footer/>

  <VideoPlayer play={play} setPlay={setPlay} />

  </div>
  </>
  )
}

export default App