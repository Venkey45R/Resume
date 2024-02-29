import React from 'react'
import photo from './images/photo.jpg';
import cover from './images/cover.jpg';
import './cover.css';

function Header() {
  return (
    <div>
        <div className="bg-gray-200 min-h-screen rounded-xl md:py-6">
          <div className='block md:flex'>
            <div className='block py-1 px-2'>
          <div className='ml-40 md:mx-64 w-11/12 my-4 md:m-0 md:w-80 bg-white mb-8 rounded-xl'>
           <div className='relative w-full h-full overflow-hidden'>
           <img src={cover} alt='cover' className=' h-56  w-full md:w-full md:h-full rounded-t-xl blur-sm' />   
           </div>
            <img src={photo} alt='profile' className=' rounded-full w-20 h-20 relative -top-24 left-2 md:left-6'/>
            <div className=' ml-3 px-0'>
              <div className='px-2'>
              <h1 className=' relative -top-14 md:-top-20 font-semibold'>Cristopher Abott</h1>
              <h2 className=' relative -top-14 text-sm md:-top-20'>Full stack developer . USA</h2>
              <p className=' text-gray-600 relative text-sm -top-10'>Full-stack developer with 8+ years of experience in building web apps. Skilled in React, Node.js, Python, and SQL.</p>
              </div>
              <div className='flex flex-wrap py-4 px-2 relative -top-10'>
                <span className='px-2 py-1 my-1 bg-gray-200 text-gray-600 font-medium rounded-sm text-xs mr-2'>Javascript</span>
                <span className='px-2 py-1 my-1 bg-gray-200 text-gray-600 rounded-sm text-xs mr-2 font-medium'>React</span>
                <span className='px-2 py-1 my-1 bg-gray-200 text-gray-600 rounded-sm text-xs mr-2 font-medium'>Node.js</span>
                <span className='px-2 py-1 my-1 bg-gray-200 text-gray-600 rounded-sm text-xs mr-2 font-medium'>ExpressJS</span>
                <span className='px-2 py-1 my-1 bg-gray-200 rounded-sm text-xs mr-2 font-medium text-gray-600'>Python</span>
                <span className='px-2 py-1 my-1 bg-gray-200 rounded-sm text-xs mr-2 font-medium text-gray-600'>SQL</span>
                <span className='px-2 py-1 my-1 bg-gray-200 rounded-sm text-xs mr-2 font-medium text-gray-600'>Git</span>
                <span className='px-2 py-1 my-1 bg-gray-200 rounded-sm text-xs mr-2 font-medium text-gray-600'>Agile</span>
                <span className='px-2 py-1 my-1 bg-gray-200 rounded-sm text-xs mr-2 font-medium text-gray-600'>CI/CD</span>
              </div>
              <div className='flex flex-wrap max-w-sm pb-2 px-4 relative -top-10 -left-2'>
                <button className='w-full rounded-md bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2'>Download CV</button>
              </div>
            </div>
          </div>
          <div className='mx-2 md:mx-64 w-80 p-2 bg-white rounded-xl mt-10 md:mt-5 mb-5'>
          <h1 className='font-bold ml-3 mb-3 md:mb-5 pt-5 relative flex'>
            <span className='before:absolute before:left-0 before:content-[""] before:w-2 before:h-2 before:rounded-full before:bg-blue-600'></span>
            <span className='relative -top-2 left-3'>About me</span>
          </h1>
          <div className='bg-gray-100 p-2 rounded-xl'>
            <p className='mx-3 text-sm md:text-base mb-5 '>I am passionate about using technology to solve real-world problems. I am always looking for new ways to improve the user experience and make software more accessible to everyone. I am also a strong advocate for open source software and I am always willing to contribute to the community.</p>
            <p className=' cursor-pointer ml-3 border-t-2 border-gray-200 font-semibold pt-4 text-black'>cristopher.com</p>
            <p className=' cursor-pointer ml-3 pb-5 text-black font-semibold pt-2'>cristopher@gmail.com</p>
          </div>
          </div>
          <div className=' mx-2 md:mx-64 w-80 bg-white rounded-xl p-2'>
          <h1 className='font-bold ml-3 mb-5 pt-5 relative flex '>
            <span className='before:absolute before:left-0 before:content-[""] before:w-2 before:h-2 before:rounded-full before:bg-blue-600'></span>
            <span className='relative -top-2 left-3'>Information</span>
          </h1>
            <div className=' bg-gray-100'>
              <div className='flex border-b border-gray-200 py-2 text-sm'>
              <p className=' ml-5'>Location</p>
              <p className='relative -right-24'>Mountain View, CA</p>
            </div>
            <div className='flex border-b border-gray-200 py-2 text-sm'>
              <p className=' ml-5'>Experience</p>
              <p className='relative -right-36'> >8 years</p>
            </div>
            <div className='flex border-b border-gray-200 py-2 text-sm'>
              <p className=' ml-5'>Availablity</p>
              <p className='relative -right-36'>In 2 month</p>
            </div>
            <div className='flex border-b border-gray-200 py-4 text-sm'>
              <p className=' ml-5'>Relocation</p>
              <p className='relative -right-44'>No</p>
            </div>
          </div>
          </div>
          </div>
          </div>
          </div>
    </div>
  )
}

export default Header;