import { LiaFacebook } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import {BiSolidSun, BiSolidMoon} from 'react-icons/bi';
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown,IoIosArrowUp  } from "react-icons/io";
import { useState, useEffect } from 'react';
import { FaWpforms } from "react-icons/fa";
import { MdAppRegistration } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaUserLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const cardArray = [
  {
      title: "The Importance of Birth Certificates",
      description: "Learn why birth certificates are crucial for legal identification.",
      image: "/content1.jpg",
      userPic: "/content2.jpg",
      username: "jhon doe",
      date: "11 Jan 2022",
      time: "5 min"
  },
  {
      title: "The Importance of Birth Certificates",
      description: "Learn why birth certificates are crucial for legal identification.",
      image: "/content1.jpg",
      userPic: "/content2.jpg",
      username: "jhon doe",
      date: "11 Jan 2022",
      time: "5 min"
  },
  {
      title: "The Importance of Birth Certificates",
      description: "Learn why birth certificates are crucial for legal identification.",
      image: "/content1.jpg",
      userPic: "/content2.jpg",
      username: "jhon doe",
      date: "11 Jan 2022",
      time: "5 min"
  },
  {
      title: "The Importance of Birth Certificates",
      description: "Learn why birth certificates are crucial for legal identification.",
      image: "/content1.jpg",
      userPic: "/content2.jpg",
      username: "jhon doe",
      date: "11 Jan 2022",
      time: "5 min"
  },
  {
      title: "The Importance of Birth Certificates",
      description: "Learn why birth certificates are crucial for legal identification.",
      image: "/content1.jpg",
      userPic: "/content2.jpg",
      username: "jhon doe",
      date: "11 Jan 2022",
      time: "5 min"
  },
  {
      title: "The Importance of Birth Certificates",
      description: "Learn why birth certificates are crucial for legal identification.",
      image: "/content1.jpg",
      userPic: "/content2.jpg",
      username: "jhon doe",
      date: "11 Jan 2022",
      time: "5 min"
  },
  {
      title: "The Importance of Birth Certificates",
      description: "Learn why birth certificates are crucial for legal identification.",
      image: "/content1.jpg",
      userPic: "/content2.jpg",
      username: "jhon doe",
      date: "11 Jan 2022",
      time: "5 min"
  },
  {
      title: "The Importance of Birth Certificates",
      description: "Learn why birth certificates are crucial for legal identification.",
      image: "/content1.jpg",
      userPic: "/content2.jpg",
      username: "jhon doe",
      date: "11 Jan 2022",
      time: "5 min"
  },

]

const CardArray = [
  {
    artile: 'Lastest Article',
    image: '/img1.png',
    description: 'Read Our latest Article',
    more: 'Read more'
  },
  {
    artile: 'Lastest Article',
    image: '/img2.png',
    description: 'Read Our latest Article',
    more: 'Read more'
  },
  {
    artile: 'Lastest Article',
    image: '/img1.png',
    description: 'Read Our latest Article',
    more: 'Read more'
  },
  {
    artile: 'Lastest Article',
    image: '/img2.png',
    description: 'Read Our latest Article',
    more: 'Read more'
  },
  {
    artile: 'Lastest Article',
    image: '/img1.png',
    description: 'Read Our latest Article',
    more: 'Read more'
  },
  {
    artile: 'Lastest Article',
    image: '/img2.png',
    description: 'Read Our latest Article',
    more: 'Read more'
  },
]

export default function Home() {
  const [serviceModal,setServiceModal] = useState(false);
  const [theme, setTheme] = useState('light');

useEffect(() => {
  if(localStorage.getItem('theme') === null){
    localStorage.setItem('theme', 'light');
  }
},[]);

useEffect(()=> {
  const html = document.querySelector('html');
  if(localStorage.getItem('theme') === 'dark'){
    html.classList.add('dark');
    setTheme('dark');
  }else{
    html.classList.remove('dark');
    setTheme('light');
  }
},[theme])

const handleThemeSwitch = () => {
  if(localStorage.getItem('theme') === 'light'){
    setTheme('dark');
    localStorage.setItem('theme','dark');
  }else{
    setTheme('light');
    localStorage.setItem('theme', 'light');
  }

  }

  const handlerService = () => {
      setServiceModal(!serviceModal);
  }
  return (
   <div className="h-auto w-full dark:bg-dakbackground dark:text-darktext">
    <div className="bg-blue-600">
      <div className="container mx-auto">
        {/**Navigation */}
        <nav className='flex justify-between items-center p-2 relative'>
           <div>
            <img src="/logo.png" alt='logo' width={200} height={700}/>
           </div>

           <form className=' hidden md:flex border justify-between items-center rounded-sm p-[2px] px-2 bg-white w-[30%]'>
             <input type="text" placeholder='search...' className='outline-none p-[2px] rounded-sm bg-white w-[95%]'/>
             <IoSearch className='cursor-pointer'/>
             
           </form>

           <div className=' justify-center items-center gap-4 hidden md:flex'>
            <div className='flex justify-center items-center gap-[2px] cursor-pointer' onClick={handlerService }>
             <button className='font-[500]'>Services</button>
             {
                serviceModal === false ? <IoIosArrowDown /> : <IoIosArrowUp />
             }
             
             
            </div>
             <Link to='/aboutUs' className='font-[500]'>About</Link>
             <Link to='/contactUs' className='font-[500]'>Contact us</Link>
             
             
                <Link to='/login' className='font-[500] border px-2 py-1 rounded-md'>
                  Sign In
                </Link>
             

             {/**theme */}
             {
              theme === 'light' ? <BiSolidSun onClick={handleThemeSwitch} className='cursor-pointer'/> : <BiSolidMoon onClick={handleThemeSwitch} className='cursor-pointer'/>
             }
              
    
           </div>

           {
            serviceModal && (
            <div className='absolute bg-slate-900 w-full top-[60px] left-0 right-0 h-[450px] flex rounded-lg'>
                <div className='w-[50%] bg-red-900 rounded-tl-lg rounded-bl-lg flex'>
                    {/***left Registration */}
                   <div className="w-[50%] bg-orange-700 p-4">
                    <div className='flex justify-start items-start mb-10 mt-2'>
                        <h1 className='font-bold text-[18px] '>Civil Registrar Services</h1>
                    </div>

                    <div className='flex justify-start items-start gap-2 mb-9'>
                      <FaWpforms className='mt-1'/>
                      <div>
                        <h1 className='font-[600]'>Birth Registration</h1>
                        <p className='text-[14px]'>Get certifiedcopies of birth register</p>
                      </div>
                    </div>

                    <div className='flex justify-start items-start gap-2 mb-9'>
                      <FaWpforms className='mt-1'/>
                      <div>
                        <h1 className='font-[600]'>Marriage Registration</h1>
                        <p className='text-[14px]'>Get certifiedcopies of birth register</p>
                      </div>
                    </div>

                    <div className='flex justify-start items-start gap-2'>
                      <FaWpforms className='mt-1'/>
                      <div>
                        <h1 className='font-[600]'>Death Registration</h1>
                        <p className='text-[14px]'>Get certifiedcopies of birth register</p>
                      </div>
                    </div>



                   </div>
                    
                     {/***left Certification*/}
                     <div className="w-[50%] bg-orange-700 p-4">
                    <div className='flex justify-start items-start mb-10 mt-2'>
                        <h1 className='font-bold text-[18px] '>Request Issuance Certificate</h1>
                    </div>

                    <div className='flex justify-start items-start gap-2 mb-9'>
                      <FaWpforms className='mt-1'/>
                      <div>
                        <h1 className='font-[600]'>Birth Certification</h1>
                        <p className='text-[14px]'>Get certifiedcopies of birth register</p>
                      </div>
                    </div>

                    <div className='flex justify-start items-start gap-2 mb-9'>
                      <FaWpforms className='mt-1'/>
                      <div>
                        <h1 className='font-[600]'>Marriage Certification</h1>
                        <p className='text-[14px]'>Get certifiedcopies of birth register</p>
                      </div>
                    </div>

                    <div className='flex justify-start items-start gap-2'>
                      <FaWpforms className='mt-1'/>
                      <div>
                        <h1 className='font-[600]'>Death Certification</h1>
                        <p className='text-[14px]'>Get certifiedcopies of birth register</p>
                      </div>
                    </div>



                   </div>

                </div>

                <div className='w-[50%] bg-gray-500 rounded-tr-lg rounded-br-lg overflow overflow-y-scroll'>
                    <div className='flex justify-center items-center mb-5 mt-2'>
                        <h1 className='font-bold text-[18px] '>Featured From Blog</h1>
                    </div>

                    {/**Card */}

                    {
                      CardArray.map((card, index) => (
                        <div className='w-full p-4 pl-12 flex justify-evenly items-center gap-2 bg-gray-800 mx-auto ' key={index}>
                       
                          <div className='w-[50%]'>
                            <div className='w-full'>
                              <img src={card.image}  alt='imges' className='rounded-md' width={300} height={100}/>
                            </div>
                            
                          </div>
                          <div className='w-[50%]'>
                            <h1 className='font-bold text-[16px]'>{card.artile}</h1>
                            <p className='text-[14px]'>{card.description}</p>
                            <button className='underline p-[4px] text-[12px] rounded-sm'>{card.more}</button>
                          </div>
                       
                    </div>
                      ))
                    }

                    
                    
                    
                    

                </div>
              </div>
            )
           }

           

           
        </nav>
      </div>
    </div>

    {/**Contents */}
    <div className='container mx-auto h-auto'>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 h-auto mt-4 md:mt-4 px-2 md:px-0">
            <div className="flex flex-col justify-center items-start">
              <h1 className="font-[900] md:text-[45px] text-[30px] md:leading-[46px] leading-[32px] mb-3">
               <span className="block md:hidden font-[900] md:text-[45px] text-[30px] md:leading-[46px] leading-[32px] mb-3">Streamlining Civil Registration for a Better Future</span>
               <span className="hidden md:block font-[900] md:text-[45px] text-[30px] md:leading-[46px] leading-[32px] mb-3">Streamlining Civil <br /> Registration for a <br /> Better Future</span>
              </h1>
               <p className="text-[16px]">Welcome to the Local Civil Registrar System, where we simplify the process of registration, verification, and issuance of certificates. Our user-friendly platform ensures a hassle-free experience for all.</p>

                <div className="flex justify-center md:justify-start items-center gap-3 mt-6 ">
                  <button className="p-2 bg-cyan-500 rounded-sm">Get Started</button>
                  <button className="p-2 border-[1px] border-[#000] rounded-sm">Learn More</button>

                </div>
                
            </div>

            <div className="flex justify-center items-center">
               <div className="w-full md:h-[430px] h-[400px] flex justify-center items-center md:mt-9 -mt-5">
                <img src='/content2.jpg' alt='images' className=' md:w-[90%] w-full h-[290px] md:h-[400px] rounded-sm'/>
               </div>
            </div>
            
        </div>

    </div>


    <div className='container mx-auto h-auto md:mt-10 mt-1 md:mb-10 mb-3'>
      <div className="flex flex-col justify-start items-start gap-10 px-2 md:px-0">
            <div>
               <h1 className="font-[600] text-[25px] md:text-[30px] md:leading-[40px] leading-[32px] md:mt-10 mt-4 md:mb-4 mb-1">Discover Civil Registration <br />Insights</h1>
               <p>Stay informed with our latest articles and resources.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-6 md:-mt-0">
                {
                    cardArray.map((card, index) => (
                        <div key={index} className="cursor-pointer">
                            <img src={card.image} alt="image" className="rounded-sm"/>
                            <h2 className="font-[600]">{card.title}</h2>
                            <p className="text-[13px]">{card.description}</p>

                            <div className="flex justify-start items-start gap-2 mt-4">
                             <img src={card.userPic} alt="user" className="w-5 h-5 rounded-[100%]"/>
                             <div className="">
                                <p className="text-[11px] font-[500]">{card.username}</p>
                                <div className="flex justify-center items-center gap-3">
                                    <p className="text-[10px]">{card.date}</p>
                                    <p className="text-[8px]">{card.time}</p>
                                </div>
                             </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    </div>

    <div className='container mx-auto h-auto md:mt-10 mt-3 md:mb-[8rem] mb-[3rem]'>
     <div className="w-full grid md:grid-cols-2 grid-cols-1  h-auto md:mt-[8rem] mt-[4rem] px-2 md:px-0">
            <div className="flex justify-center items-center">
               <div className="w-full h-auto flex md:justify-start md:items-start justify-center items-center ">
                <img src='/content2.jpg' alt='images' className=' md:w-[90%] w-full md:h-[355px] h-[270px] rounded-sm'/>
               </div>
            </div>

            <div className="flex flex-col justify-center items-start">
                <h1 className="font-[900] md:text-[30px] text-[25px] md:leading-[40px] leading-[32px] mb-3 pt-6 text-center md:text-start md:pt-0">Welcome to the Local Civil<br />Registrar System - Simplifying Registration, Verification, and Issuance</h1>
                <p className="text-[15px] text-justify">Our system streamlines the process of registering, verifying, and issuing certificates, making it quick and convenient for individuals and organizations.</p>
                <div className="flex justify-center items-center gap-10 mt-6">

                    <div className="flex flex-col justify-center items-center bg-secondary dark:bg-darksecondary text-text dark:text-darktext shadow-md py-10 rounded-sm cursor-pointer">
                       <div className="flex justify-center items-center">
                         <MdAppRegistration className="text-[18px]99"/>
                        </div>
                        <h1 className="font-[700] text-[16px] mb-2 text-center">Efficient Registration</h1>
                        <p className="text-[13px] leading-4 text-center">Register births, marriages, and deaths with ease, ensuring accurate and reliable records.</p>

                    </div>

                    <div className="flex flex-col justify-center items-center bg-secondary dark:bg-darksecondary text-text dark:text-darktext shadow-md py-10 rounded-sm cursor-pointer">

                        <div className="flex justify-center items-center">
                         <FaUserLock className="text-[18px] "/>
                        </div>
                        
                       
                        <h1 className="font-[700] text-[16px] mb-2 text-center">Secure Verification</h1>
                        <p className="text-[13px] leading-4 text-center">Verify the authenticity of certificates quickly and securely, preventing fraud and misuse.</p>

                    </div>
                </div>
                               
            </div>


           
            
        </div>

    </div>

    <div className='container mx-auto h-auto md:mt-10 mt-1 mb-10 '>
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-10 px-2 md:px-0"> 
          <div className="md:col-span-3 col-span-1">
            <h1 className="font-[900] text-[30px] leading-[40px] mb-3 text-center hidden md:block">Register, Verify, and Request Certificates <br/>with Ease</h1>

            <h1 className="font-[900] text-[25px] leading-[32px] mb-3 text-center md:hidden">Register, Verify, and Request Certificates with Ease</h1>

          </div>

          <div className="p-6 rounded-md bg-secondary dark:bg-darksecondary shadow-md cursor-pointer w-full h-[260px] text-text dark:text-darktext">
            <div className="flex justify-center items-center mb-4">
             <MdAppRegistration className="text-[18px]"/>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-[700] text-center mb-3">Simple and Efficient Certificate  <br/>Management</h2>
            </div>
            <div>
              <p className="text-justify text-[14px]">Our Local Civil Registrar System provides a step-by-step guide on how to register, verify, and request the issuance of certificates. With our user-friendly interface, you can easily navigate through the process and complete your tasks hassle-free.</p>
              <div className="flex justify-center items-center gap-1 mt-2 text-[13px]">
                <button className="">Request</button>
                <MdKeyboardArrowRight/>
              </div>
            </div>

          </div>

          

          <div className="p-6 rounded-md bg-secondary dark:bg-darksecondary shadow-md cursor-pointer w-full h-[260px] text-text dark:text-darktext">
            <div className="flex justify-center items-center mb-4">
             <FaUserLock  className="text-[18px]"/>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-[700] text-center mb-3">Fast and Reliable Certificate<br/>Verification</h2>
            </div>
            <div>
              <p className="text-justify text-[14px]">With our advanced verification system, you can quickly validate the authenticity of certificates. Say goodbye to manual verification processes and enjoy the convenience of our automated solution.</p>
              <div className="flex justify-center items-center gap-1 mt-2 text-[13px]">
                <button className="">Verify</button>
                <MdKeyboardArrowRight/>
              </div>
            </div>

          </div>
         
          <div className="p-6 rounded-md bg-secondary dark:bg-darksecondary shadow-md cursor-pointer w-full h-[260px] text-text dark:text-darktext">
            <div className="flex justify-center items-center mb-4">
             <MdAppRegistration className="text-[18px]"/>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-[700] text-center mb-3">Creating Certificates and Issuing <br/>them is an easy task.</h2>
            </div>
            <div>
              <p className="text-justify text-[14px]">Requesting certificates has never been easier. Our system streamlines the issuance process, ensuring that you receive your certificates promptly. Experience hassle-free certificate management today.</p>
              <div className="flex justify-center items-center gap-1 mt-2 text-[13px]">
                <button className="">Request</button>
                <MdKeyboardArrowRight/>
              </div>
            </div>

          </div>
          
        </div>

    </div>

    <div className='container mx-auto h-auto mt-20 pb-10 '>
      <div>
            <div className="grid grid-cols-3 md:grid-cols-5 px-2 md:px-0">
                <div className="md:col-span-2 col-span-3 mb-6 md:mb-0">
                    <div className='mb-5'>
                      <img src="/logo.png" alt='logo' width={200} height={700}/>
                    </div>
                    <div>
                        <p className='hidden md:block'>Stay up to date on the latest features and releases by joining <br/>our newsletter.</p>
                        <p className='md:hidden'>Stay up to date on the latest features and releases by joining our newsletter.</p>
                        <form className='mt-5 md:mt-2 flex justify-start items-center gap-2'>
                            <input type='email' placeholder='Email Address' className='w-[63%] outline-none border border-[#000] rounded-md p-2 '/>
                            <input type='submit' value="Subscribe" className='border border-[#000] rounded-md p-2 ml-2 cursor-pointer'/>
                        </form>
                    </div>
                </div>

                <div>
                    <div className='mb-2 md:mb-5'>
                        <h2 className='font-[600]'>About us</h2>
                    </div>
                    <ul className='flex flex-col gap-1'>
                        <Link to="#">Services</Link>
                        <Link to="#">Contact Us</Link>
                        <Link to="#">Support</Link>
                        <Link to="#">FAQ</Link>

                    </ul>
                </div>
                <div>
                    <div className='mb-2 md:mb-5'>
                        <h2 className='font-[600]'>News</h2>
                    </div>
                    <ul className='flex flex-col gap-1'>
                        <Link to="#">Blog</Link>
                        <Link to="#">Career</Link>
                        <Link to="#">Partners</Link>
                        <Link to="#">Events</Link>

                    </ul>
                </div>

                <div>
                    <div className='mb-2 md:mb-5'>
                        <h2 className='font-[600]'>Follow us</h2>
                    </div>
                    <ul className='flex flex-col gap-1'>
                        <Link to="#" className='flex justify-start items-center gap-1'>
                          <LiaFacebook className='text-[#24336c]'/>
                          <p className='text-[12px]'>Facebook</p>                        
                        </Link>
                        <Link to="#" className='flex justify-start items-center gap-1'>
                          <FaInstagram className='text-[#24336c]'/>
                          <p className='text-[12px]'>Instagram</p>                        
                        </Link>
                        <Link to="#" className='flex justify-start items-center gap-1'>
                          <FaXTwitter className='text-[#24336c]'/>
                          <p className='text-[12px]'>Twiiter</p>                        
                        </Link>
                        <Link to="#" className='flex justify-start items-center gap-1'>
                          <FaYoutube className='text-[#24336c]'/>
                          <p className='text-[12px]'>Youtube</p>                        
                        </Link>

                    </ul>
                </div>
                
                

            </div>

            <div className='border-gray-300 border-[.1px] w-full mt-10 mb-10'></div>
            <div className='flex justify-between items-center px-2 md:px-0'>
                <div>
                  <p className='text=[14px]'>&copy; 2024 Your Company Name. All rights reserved.</p>
                </div>
                <div className='flex justify-evenly items-center gap-4 text-[14px] underline'>
                    <Link to='#'>Private Policy</Link>
                    <Link to='#'>Terms and Conditions</Link>
                    <Link to='#'>Cookie Policy</Link>
                </div>
            </div>
      </div>

    </div>


    


   </div>
  );
}
