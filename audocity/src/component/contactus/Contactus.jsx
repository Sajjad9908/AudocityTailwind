import React from 'react'
import { TiTabsOutline } from 'react-icons/ti'
import Title from '../title/Title'
import MsgIcon from '../../assets/MsgIcon.png'
import blueMsg from '../../assets/blueMsg.png'
import phone from '../../assets/phone.png'
import map from '../../assets/map.png'
import captcha from '../../assets/captcha.png'
import { MdCheckCircle } from 'react-icons/md'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'


const Contactus = () => {

  const [result, setResult] = React.useState("");
  const [human,setHuman] = React.useState(false);
  const [verifying, setVerifying] = React.useState(false);
  const [verified, setVerified] = React.useState(false);

  const onSubmit = async (event) => {
   
    event.preventDefault();
    if(!human){
      setResult("Please verify that you are not a robot.");
      return;
    }
    setResult("Sending....");

    const formData = new FormData(event.target);


    formData.append("access_key", "3e41c9d5-6cc6-4635-bc61-13de0ee3c639");


    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setHuman(false);
      setVerified(false);
    } else {
      console.log("Error", data);
      setError(data.message);
    }
  };

  const handleCaptchaChange = () => {
    if (!human) {
      setVerifying(true);
      setVerified(false);
  
      setTimeout(() => {
        setVerifying(false);
        setVerified(true);
        setHuman(true);
      }, 1500);
    } else {
      setHuman(false);
      setVerified(false);
      setVerifying(false);
    }
  };
    const contactInfo=[{
        id:1,
        icon:blueMsg,
        text:"Contact@GreatStack.dev"
    },
    {
        id:2,
        icon:phone,
        text:"+123 456 7890"
    },{
        id:3,
        icon:map,
        text:"77 Massachusetts Ave, CambridgeMA \n 02139, United States"
    }

]
  return (
    <>
   <Title paraTitle="CONTACT US" heading="Get in Touch with Audocity" />    
   <div id='contactus' className='pl-[10%] pr-[10%] my-20 mx-auto flex flex-col gap-2 items-start  md:flex-row md:gap-0 md:items-center justify-between max-w-[90%]'>
    <div className='contact-col basis-[48%] text-[#676767]'>
            <h3 className='text-[25px] text-[#000f38]  font-medium mb-6 flex items-center'>Send us a Message
                <img src={MsgIcon} alt="Message Icon" className="ml-2 w-[35px] basis-[20px]"/>
            </h3>
            <p className='max-w-[450px]'>
                Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
            </p>

            <ul>
                {
                    contactInfo.map((info)=>(
                        <li key={info.id} className='flex items-center my-5 text-[18px]'>
                         <img src={info.icon} alt="Icon" className="mr-4 w-[25px]"/>
                         <p style={{whiteSpace:'pre-line'}}>{info.text}</p>
                        </li>
                    ))
                }
            </ul>
               
        </div>

        <div className='form basis-[48%] text-[#676767] w-full'>
            <form onSubmit={onSubmit} className='flex flex-col gap-4 '>
                <label>Your Name</label>
                <input type="text" placeholder='Your Name' className='w-full p-2 bg-[#ebecfe] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                <label>Your Email</label>
                <input type="email" placeholder='Your Email' className='w-full p-2 bg-[#ebecfe] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                <label>Write your messages here</label>
                <textarea placeholder='Your Message' rows="5" className='w-full bg-[#ebecfe] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'></textarea>
                <div className='flex items-center gap-2 mt-2'>
                <img src={captcha} alt="Captcha" className="w-[16px]"/>
                <input type='checkbox' id='human' checked={human} onChange={handleCaptchaChange} disabled={verifying} />
                {verifying && <AiOutlineLoading3Quarters className='animate-spin text-blue-500 text-lg' />}
                {verified && <MdCheckCircle className='text-green-500 text-lg' />}
                <label htmlFor='human'>I am not a robot</label>
                </div>
               <button
  type="submit"
  disabled={!human}
  className={`py-2 px-4 rounded-md w-[150px] mt-4 text-white transition-colors
    ${human ? "bg-[#212EA0] hover:bg-[#000f38]" : "bg-gray-400 cursor-not-allowed"}
  `}
>
  Send Message
</button>
</form>
            <span className='block my-4'>{result}</span>
                

        </div>
    
   </div>
    </>

  )
}

export default Contactus