import React, { useState } from 'react'
import { MdExpandLess, MdKeyboardArrowDown } from "react-icons/md";

import { ProjectCard } from './ProjectCard'
import image1 from '../../assets/projects/eduSupport.png'
import image2 from '../../assets/projects/bookStore.png'

import { OtherProjectCard } from './OtherProjectCard'
import otherProject1 from '../../assets/projects/other Projects/razorpayClone.png'
import otherProject2 from '../../assets/projects/other Projects/spaceSite.png'
import otherProject3 from '../../assets/projects/other Projects/timeManagementComponent.png'
import otherProject4 from '../../assets/projects/other Projects/assesmentComponent.png'
import otherProject5 from '../../assets/projects/other Projects/devDetective.png'

import tailwind from '../../assets/stack/Tailwind.png'
import react from '../../assets/stack/React.png'
import nodejs from '../../assets/stack/NodeJs.svg'
import mongodb from '../../assets/stack/MongoDB.svg'
import express from '../../assets/stack/Express.png'
import html from '../../assets/stack/HTML.png'
import css from '../../assets/stack/CSS.png'
import javascript from '../../assets/stack/Javascript.svg'
import firebase from '../../assets/stack/Firebase.png'


export const Project = () => {

  const [showMore, setShowMore] = useState(false);
  let display = "hidden";
  if(showMore) {
    display = 'flex'
  }


  return (
    <div id='projects' className=' w-11/12 mt-6 flex flex-col items-center gap-3'>
        <h1 className=' font-semibold text-4xl flex items-center justify-evenly mb-3 w-full'>
            <span className=' border border-gray-500 w-[40%] flex'></span> Projects <span className=' border w-[40%] border-gray-500 flex'></span>
        </h1>
        {/* main projects  */}
        <div className='w-full flex flex-col md:flex-row md:justify-between items-center gap-3'>
            <ProjectCard
             image={image1} 
             title='EduSupport' 
             desc='It is a fully functional Ed-tech platform that allows users to create,
             consume, and rate educational content. The platform is built using the
             MERN stack, which includes React.js, Node.js, MongoDB, and Express.js.'
             link1='https://github.com/sandeep-233/Edu-support' 
             link2='https://edu-support-nine.vercel.app/' 
             stacks= {[mongodb, express, react, nodejs, tailwind] }
            />
            <ProjectCard
             image={image2} 
             title='BookStore' 
             desc='It is a MERN stack project, Utilizing Firebase for authentication,
             this platform empowers users to upload and manage books effortlessly. 
             Users can input book details like image URL, description, PDF link, and category.'
             link1='https://github.com/sandeep-233/book-store' 
             link2='#' 
             stacks= {[mongodb, express, react, nodejs, tailwind, firebase]}
            />
        </div>

        {/* show more button  */}
        <div
          onClick={() => setShowMore(!showMore)}
          className=' w-full flex items-center justify-center font-serif glassmorphism hover:text-orange-500 transition-all cursor-pointer' 
        >
          {
            showMore ? 
            <p className='flex items-center gap-3'>Show less<MdExpandLess /></p> 
            : <p className='flex items-center gap-3'>Show more<MdKeyboardArrowDown /></p>
          }
        </div>

        {/* other projects  */}
        <div className={ `${display} flex-wrap justify-evenly glassmorphism p-3 gap-6 h-[55vh] overflow-y-auto w-full` } >
          <OtherProjectCard
            Image={otherProject1}
            link1={'https://github.com/sandeep-233/Edu-support'}
            link2={''}
            title={'Razorpay Clone'}
            stacks= {[html, css, tailwind, javascript] }
          />
          <OtherProjectCard
            Image={otherProject2}
            link={'https://github.com/sandeep-233/Edu-support'}
            link2={''}
            title={'Space Tourism'}
            stacks= {[html, css, tailwind] }
          />
          <OtherProjectCard
            Image={otherProject3}
            link={'https://github.com/sandeep-233/Edu-support'}
            link2={''}
            title={'Time-Management Component'}
            stacks= {[react, nodejs, tailwind, html, css] }
          />
          <OtherProjectCard
            Image={otherProject4}
            link={'https://github.com/sandeep-233/Edu-support'}
            link2={''}
            title={'Assesment component'}
            stacks= {[react, nodejs, tailwind, html, css] }
          />
          <OtherProjectCard
            Image={otherProject5}
            link={'https://github.com/sandeep-233/Edu-support'}
            link2={''}
            title={'Dev-detective'}
            stacks= {[react, nodejs, tailwind, html, css, javascript] }
          />
        </div>
    </div>
  )
}
