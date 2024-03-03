import React from 'react';
import {Link} from 'react-router-dom';
function Blog() {
  return (
    <div className='md:-mt-6 px-2'>
    <div className='block border-b border-gray-200 py-4 text-sm relative top-0 md:top-10'>
    <div className='block border-b border-gray-200 py-4 text-sm mx-2'>
            <div className='flex fixed-navbar bg-white h-14 -ml-2 md:-ml-60 md:-mt-4 rounded-xl py-1'>
              <div className='mx-3 md:mx-8 flex justify-center items-center'>
              <Link to={`/Resume`}>
                <button className=' hover:bg-gray-200 bg-white py-3 rounded-xl font-semibold px-6 md:px-16 text-gray-700 hover:text-blue-700'>Resume</button>
              </Link>
              </div>
              <div className='mx-3 md:mx-8 flex justify-center items-center'>
                <Link to={`/project`}>
                <button  className= 'hover:bg-gray-200 bg-white py-3 rounded-xl font-semibold px-6 md:px-16 text-gray-700 hover:text-blue-700'>Projects</button>
                </Link>
              </div>  
              <div className='mx-1 mr-2 md:mx-8 flex justify-center items-center'>
              <Link to={`/blog`}>
                <button className='bg-gray-200 px-6 md:px-16 rounded-xl py-3 text-blue-700 font-semibold'>Blog</button>
                </Link>
              </div>
            </div>
            </div>
            <div className='mx-5'>
              <div className='bg-white -ml-4 md:-ml-60 rounded-xl mt-2 md:mt-10 p-1 pr-2'>
              <h1 className='font-bold mb-5 pt-5 relative flex py-3 ml-5 md:ml-10'>
              <span className='before:absolute before:left-0 before:content-[""] before:w-2 before:h-2 before:rounded-full before:bg-blue-600'></span>
              <span className='relative -top-2 left-3 font-semibold text-base'>Blog </span>
            </h1>
            <div className='block mx-2 ml-2 md:ml-5 mr-1 md:mr-2 py-4 text-gray-600 relative my-1 bg-gray-100 max-w-2xl rounded-xl pr-4 md:pr-36 -top-3 mb-3'>
              <div className='mx-3 mb-2'>
              <p className=' text-xs font-semibold'>February 22, 2024 </p>
              <p className=' text-gray-800 font-semibold py-3'>Building an Online Presence as a Full Stack Developer</p>
              <p className=' py-3'>Explore the importance of establishing a strong online presence for full stack developers. Learn how to create a compelling portfolio, engage with the developer community, and leverage social media to boost your career.</p>
              <p className=' text-gray-600 font-bold'>Read more</p>
            </div>
            </div>
            <div className='block mx-2 ml-2 md:ml-5 mr-1 md:mr-2 py-4 text-gray-600 relative my-1 bg-gray-100 max-w-2xl rounded-xl pr-4 md:pr-36 -top-3 mb-3'>
              <div className='mx-3 mb-2'>
              <p className=' text-xs font-semibold'>February 15, 2024</p>
              <p className=' text-gray-800 font-semibold py-3'>Navigating the Full Stack Developer Job Interview Maze</p>
              <p className=' py-3'>Prepare for success in your full stack developer job interviews. Uncover common interview questions, tips for showcasing your problem-solving skills, and strategies for handling technical assessments.</p>
              <p className=' text-gray-600 font-bold pb-2'>Read more</p>
            </div>
            </div>
            <div className='block mx-2 ml-2 md:ml-5 mr-1 md:mr-2 py-4 text-gray-600 relative my-1 bg-gray-100 max-w-2xl rounded-xl pr-4 md:pr-36 -top-3 mb-3'>
              <div className='mx-3 mb-2'>
              <p className=' text-xs font-semibold'>February 8, 2024 </p>
              <p className=' text-gray-800 font-semibold py-3'>Mastering the Art of Full Stack Developer Cover Letters</p>
              <p className=' py-3'>Explore the art of writing compelling cover letters for full stack developer positions. Learn how to tailor your cover letter to showcase your technical prowess and demonstrate your passion for coding.</p>
              <p className=' text-gray-600 font-bold pb-2'>Read more</p>
            </div>
            </div>
            <div className='block mx-2 ml-2 md:ml-5 mr-1 md:mr-2 py-4 text-gray-600 relative my-1 bg-gray-100 max-w-2xl rounded-xl pr-4 md:pr-36 -top-3 mb-3'>
              <div className='mx-3 mb-2'>
              <p className=' text-xs font-semibold'>February 1, 2024 </p>
              <p className=' text-gray-800 font-semibold py-3'>Crafting a Comprehensive Full Stack Developer Resume</p>
              <p className=' py-3'>Learn the essential elements to include in your full stack developer resume for a stand-out application. Nail down the perfect balance between showcasing skills and work experience.</p>
              <p className=' text-gray-600 font-bold pb-2'>Read more</p>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>

  )
}

export default Blog;