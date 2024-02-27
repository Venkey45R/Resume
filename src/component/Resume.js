import React from 'react';
import google from './images/google.jpg';
import amazon from './images/amazon.jpg';
import microsoft from './images/microsoft.jpg';
import tesla from './images/tesla.jpg';
import stanford from './images/stanford.jpg';
import university from './images/universityofcalifornia.jpg';
import deanza from './images/deanza.jpg';
import { Link } from 'react-router-dom';
function Resume() {
  return (
    <div className='md:-mt-6 px-2'>
    <div className='block border-b border-gray-200 py-4 text-sm relative top-0 md:top-10'>
    <div className='block border-b border-gray-200 py-4 text-sm mx-2'>
            <div className='flex fixed-navbar bg-white h-14 -ml-0 md:-ml-60 md:-mt-4 rounded-xl'>
              <div className='mx-3 md:mx-8 flex justify-center items-center'>
              <Link to={`/Resume`}>
                <button className='bg-gray-200 px-6 md:px-16 rounded-xl py-3 text-blue-700 font-semibold'>Resume</button>
              </Link>
              </div>
              <div className='mx-2 md:mx-8 flex justify-center items-center'>
                <Link to={`/project`}>
                <button className=' hover:bg-gray-200 bg-white py-3 rounded-xl font-semibold px-6 md:px-16 text-gray-700 hover:text-blue-700'>Projects</button>
                </Link>
              </div>  
              <div className=' mx-2 md:mx-8 flex justify-center items-center'>
              <Link to={`/blog`}>
                <button className=' hover:bg-gray-200 bg-white py-3 rounded-xl px-6  md:px-14 font-semibold text-gray-700 hover:text-blue-700'>Blog</button>
                </Link>
              </div>
            </div>
            </div>
              <div className='bg-white -ml-0 md:-ml-60 rounded-xl mt-2 md:mt-10 py-2 pr-2'>
            <h1 className='font-bold mb-5 pt-2 md:pt-5 relative flex py-1 md:py-3 ml-10'>
              <span className='before:absolute before:left-0 before:content-[""] before:w-2 before:h-2 before:rounded-full before:bg-blue-600'></span>
              <span className='relative -top-2 left-3 font-semibold text-base '>Experience</span>
            </h1>
            <div className=' block md:flex mx-2 text-gray-600 relative my-3 bg-gray-100 px-2 py-2 md:py-4 pr-20 rounded-xl md:ml-0'>
              <img src={google} alt='google' className=' w-12 h-12 ml-4 my-2 md:my-0 mr-5 rounded-full' />
              <span className='px-2 bg-gray-300 text-gray-800 absolute right-4 md:right-10 text-xs font-semibold py-1'>Full-time</span>
              <div className=' block'>
                <h1 className=' font-semibold mb-2 text-sm md:text-base ml-2 text-black'>Full-time Software Engineer</h1>
                <div className='grid grid-cols-2 md:flex font-normal mb-2 ml-1 md:ml-0'>
                  <div className='flex md:font-normal text-xs'>
                  <i class="fa-solid fa-briefcase relative top-1 mr-2 "></i>
                  <p className='mr-10'>Google</p>
                  </div>
                  <div className='flex text-xs -ml-10 md:-ml-0'>
                  <i class="fa-solid fa-location-dot relative top-1 mr-2"></i>
                  <p className='mr-10'>Mountain View, CA</p>
                  </div>
                  <div className='flex text-xs mt-2 md:mt-0'>
                  <i class="fa-solid fa-calendar-day relative top-1 mr-2"></i>
                  <p className='mr-0 md:mr-10'>Jul 2020 - Present</p>
                  </div>
                </div>
                <div className='block max-w-lg'>
                  <p className='mb-3 mt-4 md:mt-2 font-normal ml-2 md:ml-0'>Developed and maintained web applications using React, Node.js, and Python. Worked with a team of engineers to deliver high-quality software on time and within budget.</p>
                </div>
              </div>
            </div>
            <div className=' block md:flex mx-2 text-gray-600 relative my-3 bg-gray-100 px-2 py-2 md:py-4 pr-20 rounded-xl md:ml-0'>
              <img src={amazon} alt='\amazon' className='  w-12 h-12 ml-4 my-2 md:my-0 mr-5 rounded-full' />
              <span className='px-2 bg-gray-300 text-gray-800 absolute right-4 md:right-10 text-xs font-semibold py-1'>Full-time</span>
              <div className=' block'>
                <h1 className=' font-semibold mb-2 text-sm md:text-base ml-2 text-black'>Software Engineer Intern</h1>
                <div className='grid grid-cols-2 md:flex font-normal mb-2 ml-1 md:ml-0 text-xs'>
                  <div className='flex font-normal text-xs'>
                  <i class="fa-solid fa-briefcase relative top-1 mr-2 "></i>
                  <p className='mr-10'>Amazon</p>
                  </div>
                  <div className='flex'>
                  <i class="fa-solid fa-location-dot relative top-1 mr-2"></i>
                  <p className='mr-10'>Seattle, WA</p>
                  </div>
                  <div className='flex'>
                  <i class="fa-solid fa-calendar-day relative top-1 mr-2"></i>
                  <p className='mr-0 md:m r-10'>Feb 2018 - Jun 2020</p>
                  </div>
                </div>
                <div className='block max-w-lg'>
                  <p className='mb-3 mt-4 md:mt-2 font-normal ml-2 md:ml-0'>Designed and implemented new features for Amazon's e-commerce platform. Worked on a team of engineers to improve the user experience and increase sales.</p>
                </div>
              </div>
            </div>
            <div className=' block md:flex mx-2 text-gray-600 relative my-3 bg-gray-100 px-2 py-2 md:py-4 pr-20 rounded-xl md:ml-0'>
              <img src={microsoft} alt='microsoft' className='  w-12 h-12 ml-4 my-2 md:my-0 mr-5 rounded-full' />
              <span className='px-2 bg-gray-300 text-gray-800 absolute right-4 md:right-10 text-xs font-semibold py-1'>Full-time</span>
              <div className=' block'>
                <h1 className=' font-semibold mb-2 text-sm md:text-base ml-2 text-black'>Software Development Engineer in Test</h1>
                <div className='grid grid-cols-2 md:flex font-normal mb-2 ml-1 md:ml-0 text-xs'>
                  <div className='flex font-normal text-xs'>
                  <i class="fa-solid fa-briefcase relative top-1 mr-2 "></i>
                  <p className='mr-10'>Microsoft</p>
                  </div>
                  <div className='flex'>
                  <i class="fa-solid fa-location-dot relative top-1 mr-2"></i>
                  <p className='mr-10'>Redmond, WA</p>
                  </div>
                  <div className='flex'>
                  <i class="fa-solid fa-calendar-day relative top-1 mr-2"></i>
                  <p className='mr-10'>Aug 2017 - Jan 2018</p>
                  </div>
                </div>
                <div className='block max-w-lg'>
                  <p className='mb-3 mt-4 md:mt-2 font-normal ml-2 md:ml-0'>Developed and maintained web applications using React, Node.js, and Python. Worked with a team of engineers to deliver high-quality software on time and within budget.</p>
                </div>
              </div>
            </div>
            <div className=' block md:flex mx-2 text-gray-600 relative my-3 bg-gray-100 px-2 py-2 md:py-4 pr-20 rounded-xl md:ml-0'>
              <img src={tesla} alt='tesla' className=' w-12 h-12 ml-4 my-2 md:my-0 mr-5 rounded-full' />
              <span className='px-2 bg-gray-300 text-gray-800 absolute right-4 md:right-10 text-xs font-semibold py-1'>Full-time</span>
              <div className=' block'>
                <h1 className='font-semibold mb-2 text-sm md:text-base ml-2 text-black'>Software Engineer Intern</h1>
                <div className='grid grid-cols-2 md:flex font-normal mb-2 ml-1 md:ml-0 text-xs'>
                  <div className='flex font-normal text-xs'>
                  <i class="fa-solid fa-briefcase relative top-1 mr-2 "></i>
                  <p className='mr-10'>Tesla</p>
                  </div>
                  <div className='flex'>
                  <i class="fa-solid fa-location-dot relative top-1 mr-2"></i>
                  <p className='mr-10'>Palo Alto, CA</p>
                  </div>
                  <div className='flex'>
                  <i class="fa-solid fa-calendar-day relative top-1 mr-2"></i>
                  <p className='mr-10'>Dec 2016 - May 2017</p>
                  </div>
                </div>
                <div className='block max-w-lg'>
                  <p className='mb-3'>Developed software for Tesla's autonomous driving vehicles. Worked on a team of engineers to improve the safety and reliability of the software.</p>
                </div>
              </div>
            </div>
            </div>
            </div>
            <div className='block border-b border-gray-200 py-4 text-sm'>
            <div className='bg-white -ml-60 rounded-xl'>
            <h1 className='font-bold ml-3 mb-5 pt-5 relative flex'>
              <span className='before:absolute before:left-0 before:content-[""] before:w-2 before:h-2 before:rounded-full before:bg-blue-600'></span>
              <span className='relative -top-2 left-3'>Education</span>
            </h1>
            <div className=' flex mx-2 text-gray-600 relative my-3 bg-gray-100 px-2 py-6 pr-20 rounded-xl'>
            <img src={stanford} alt='stanford' className=' w-12 h-12 mr-5 rounded-full' />
            <div className=' block'>
              <h1 className=' font-semibold mb-2 text-base'>Master of Science in Computer Science</h1>
              <div className='flex font-normal mb-2'>
                <div className='flex font-normal'>
                <i class="fa-solid fa-briefcase relative top-1 mr-2 "></i>
                <p className='mr-10'>Stanford University</p>
                </div>
                <div className='flex'>
                <i class="fa-solid fa-location-dot relative top-1 mr-2"></i>
                <p className='mr-10'>Stanford, CA</p>
                </div>
                <div className='flex'>
                <i class="fa-solid fa-calendar-day relative top-1 mr-2"></i>
                <p className='mr-10'>2018 - 2020</p>
                </div>
              </div>
              <div className='block max-w-lg'>
                <p className='mb-3'>Developed a machine learning algorithm to predict customer churn. Built a web application to help students find roommates.</p>
              </div>
            </div>
            </div>
            <div className=' flex mx-2 text-gray-600 relative my-3 bg-gray-100 px-2 py-6 pr-20 rounded-xl'>
            <img src={university} alt='university' className=' w-12 h-12 mr-5 rounded-full' />
            <div className=' block'>
              <h1 className=' font-semibold mb-2 text-base'>Bachelor of Science in Computer Science</h1>
              <div className='flex font-normal mb-2'>
                <div className='flex font-normal'>
                <i class="fa-solid fa-briefcase relative top-1 mr-2 "></i>
                <p className='mr-10'>University of California</p>
                </div>
                <div className='flex'>
                <i class="fa-solid fa-location-dot relative top-1 mr-2"></i>
                <p className='mr-10'>Berkeley, CA</p>
                </div>
                <div className='flex'>
                <i class="fa-solid fa-calendar-day relative top-1 mr-2"></i>
                <p className='mr-10'>2014 - 2018</p>
                </div>
              </div>
              <div className='block max-w-lg'>
                <p className='mb-3'>Developed a mobile app to help students track their expenses. Built a website for a local business.</p>
              </div>
            </div>
            </div>
            <div className=' flex mx-2 text-gray-600 relative my-3 bg-gray-100 px-2 py-6 pr-20 rounded-xl'>
            <img src={deanza} alt='deanza' className=' w-12 h-12 mr-5 rounded-full' />
            <div className=' block'>
              <h1 className=' font-semibold mb-2 text-base'>Associate of Science in Computer Science</h1>
              <div className='flex font-normal mb-2'>
                <div className='flex font-normal'>
                <i class="fa-solid fa-briefcase relative top-1 mr-2 "></i>
                <p className='mr-10'>De Anza College</p>
                </div>
                <div className='flex'>
                <i class="fa-solid fa-location-dot relative top-1 mr-2"></i>
                <p className='mr-10'>Cupertino, CA</p>
                </div>
                <div className='flex'>
                <i class="fa-solid fa-calendar-day relative top-1 mr-2"></i>
                <p className='mr-10'>2012 - 2014</p>
                </div>
              </div>
              <div className='block max-w-lg'>
                <p className='mb-3'>Developed a game using Python. Built a website for a student organization.</p>
              </div>
            </div>
            </div>
            </div>
            </div>
            </div>
 );
}

export default Resume;