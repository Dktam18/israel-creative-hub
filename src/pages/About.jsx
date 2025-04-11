import React from "react"
import aboutImg from "../components/assets/images/about.jpg"
// import aboutImgBanner from "../components/assets/images/about-banner.jpg"
// import imgs from "../components/assets/images/join1.png"
import { FaBookReader, FaBrain, FaChalkboardTeacher,FaRegNewspaper } from "react-icons/fa"
import { AiOutlineCheck } from "react-icons/ai"

export const About = () => {
  return (
    <>
      <section className='about py-16'>
        <div className='container'>
          <div className='heading text-center py-12'>
            <h1 className='text-3xl font-semibold text-black'>Why "Israel Creatives" are Out Of The Ordinary</h1>
            <span className='text-sm mt-2 block'>you don't have to struggle alone, you've got our assistance and help.</span>
          </div>
          <div className='grid grid-cols-4 gap-5 mt-5 md:grid-cols-2'>
            <AboutCard color='bg-[#2D69F0]' icon={<FaBookReader size={50} />} title='Unlimited courses' desc="We've got materials, lesson notes and courses for all subjects. " />
            <AboutCard color='bg-[#DD246E]' icon={<FaChalkboardTeacher size={50} />} title='Expert tutors' desc="Our expert tutors are always available to guide you. " />
            <AboutCard color='bg-[#8007E6]' icon={<FaBrain size={50} />} title='Student community' desc="Our platform also helps to connect students and aid communal learning and implementation." />
            <AboutCard color='bg-[#0CAE74]' icon={<FaRegNewspaper size={50} />} title='Latest Educational news' desc="We keep you abreast and informed and aware of all educational news." />
          </div>
        </div>
      </section>
      <AboutContent />
    </>
  )
}
export const AboutCard = (props) => {
  return (
    <div className={`box shadow-md p-5 py-8 rounded-md text-white ${props.color} cursor-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300 `}>
      <div className='icon'>{props.icon}</div>
      <div className='text mt-5'>
        <h4 className='text-lg font-semibold my-3'>{props.title}</h4>
        <p className='text-sm'>{props.desc}</p>
      </div>
    </div>
  )
}

export const AboutContent = () => {
  return (
    <section className='mb-16'>
      <div className='container flex md:flex-col'>
        <div className='left w-1/3 md:w-full mr-8 md:mr-0 relative'>
          <img src={aboutImg} alt='aboutImg' className=' rounded-xl' />
          {/* <img src={aboutImgBanner} alt='aboutImg' className='rounded-xl absolute -bottom-14 -left-24 h-56 md:left-80' /> */}
          <div className='img-group ml-24 mt-3'>
            {/* <img src={imgs} alt='' /> */}
            <span className='text-[14px]'>
              Join over <label className='text-black text-sm'>4,000+</label> students
            </span>
          </div>
        </div>
        <div className='right w-2/3 md:w-full md:mt-16'>
          <div className='heading w-4/5 md:w-full'>
            <h1 className='text-3xl font-semibold text-black'>Ace your exams with Israel Creative Hub</h1>
            <span className='text-sm mt-2 block leading-6'> We are dedicated to helping thousands of students become top-scorers in various exams. We are able to achieve this as a result of the following: </span>
            <ul className='my-5'>
              <li className='text-sm flex items-center gap-5'>
                <AiOutlineCheck className='text-green-500' />Access to past questions and relevant materials
              </li>
              <li className='text-sm flex items-center gap-5 my-2'>
                <AiOutlineCheck className='text-green-500' />
                Daily intensive classes
              </li>
              <li className='text-sm flex items-center gap-5 my-2'>
                <AiOutlineCheck className='text-green-500' />
                Syllabus based tutorials
              </li>
              <li className='text-sm flex items-center gap-5'>
                <AiOutlineCheck className='text-green-500' />
                Access to question and answer sessions
              </li>
            </ul>
            <a href="https://chat.whatsapp.com/GMZrceHJFws1q4SFny4Adb">
            <button className='px-5 py-2 border border-gray-300 rounded-md text-sm success'>JAMB CLASS</button>
            </a>
            <a href="https://chat.whatsapp.com/JHHt038MmXkDMZUuDf8z8I">
            <button className='px-5 py-2 border border-gray-300 rounded-md text-sm'>WAEC CLASS</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
