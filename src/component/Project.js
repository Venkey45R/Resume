import React from 'react';
import code from './images/codecrafthub.jpg';
import cloud from './images/cloudsnip.jpg';
import eccomerce from './images/ecommerceboost.jpg';
import health from './images/healthtrackr.jpg';
import { Link } from 'react-router-dom';
function Project() {
  return (
    <div className=' -mt-6'>
    <div className='block border-b border-gray-200 py-4 text-sm relative top-10'>
    <div className='block border-b border-gray-200 py-4 text-sm'>
            <div className='flex fixed-navbar bg-white h-14 -ml-60 -mt-4 rounded-xl'>
              <div className='mx-8 flex justify-center items-center'>
              <Link to={`/Resume`}>
                <button className=' hover:bg-gray-200 bg-white py-3 rounded-xl font-semibold px-16 text-gray-700 hover:text-blue-700'>Resume</button>
              </Link>
              </div>
              <div className='mx-8 flex justify-center items-center'>
                <Link to={`/project`}>
                <button className='bg-gray-200 px-16 rounded-xl py-3 text-blue-700 font-semibold'  >Projects</button>
                </Link>
              </div>  
              <div className='mx-8 flex justify-center items-center'>
              <Link to={`/blog`}>
                <button className=' hover:bg-gray-200 bg-white py-3 rounded-xl px-14 font-semibold text-gray-700 hover:text-blue-700'>Blog</button>
                </Link>
              </div>
            </div>
            </div>
              <div className='bg-white -ml-60 rounded-xl pb-2 mt-10 pr-10'>
            <h1 className='font-bold mb-2 pt-5 relative flex py-3 ml-10'>
              <span className='before:absolute before:left-0 before:content-[""] before:w-2 before:h-2 before:rounded-full before:bg-blue-600'></span>
              <span className='relative -top-2 left-3 font-semibold text-base'>Projects</span>
            </h1>
            <div className=' flex ml-5 text-gray-600 relative bg-gray-100 mr-2 rounded-xl py-3 px-4 mb-3'>
              <img src={code} alt='code' className=' w-12 h-12 mr-5 rounded-full' />
              <div className=' block'>
                <h1 className=' font-semibold mb-2 text-sm'>CodeCraftHub</h1>
                <div className='flex font-normal mb-2'>
                  <div className='flex font-normal'>
                  <i class="fa-regular fa-folder-closed relative top-1 mr-2"></i>
                  <p className='mr-10'>Developer Tools</p>
                  </div>
                  <div className='flex'>
                  <i class="fa-regular fa-user relative top-1 mr-2"></i>
                  <p className='mr-10'>Co-Founder</p>
                  </div>
                  <div className='flex'>
                  <i class="fa-solid fa-calendar-day relative top-1 mr-2"></i>
                  <p className='mr-10'>Jun 2021</p>
                  </div>
                </div>
                <div className='block max-w-lg'>
                  <p className='mb-3 mt-2'>CodeCraftHub is a collaborative platform for developers, streamlining code review and project management. Enhance your team's productivity with our intuitive tools.</p>
                </div>
                <div className='mb-5'>
                  <a href='#' className='text-blue-700 font-semibold text-sm'>https://codecrafthub.com</a>
                </div>
              </div>
            </div>
            <div className=' flex ml-5 text-gray-600 relative mb-3 bg-gray-100 mr-2 rounded-xl px-4 py-3'>
              <img src={eccomerce} alt='eccomerce' className=' w-12 h-12 mr-5 rounded-full' />
              <div className=' block'>
                <h1 className=' font-semibold mb-2 text-base'>E-commerceBoost</h1>
                <div className='flex font-normal mb-2'>
                  <div className='flex font-normal'>
                  <i class="fa-regular fa-folder-closed relative top-1 mr-2"></i>
                  <p className='mr-10'>E-commerce</p>
                  </div>
                  <div className='flex'>
                  <i class="fa-regular fa-user relative top-1 mr-2"></i>
                  <p className='mr-10'>Lead Developer</p>
                  </div>
                  <div className='flex'>
                  <i class="fa-solid fa-calendar-day relative top-1 mr-2"></i>
                  <p className='mr-10'>Dec 2022</p>
                  </div>
                </div>
                <div className='block max-w-lg'>
                  <p className='mb-3'>E-commerceBoost is a full-stack solution for online retailers, offering seamless inventory management, secure payment gateways, and a user-friendly shopping experience.</p>
                </div>
                <div className='mb-5'>
                  <a href='#' className='text-blue-700 font-semibold text-sm'>https://ecommerceboost.io</a>
                </div>
              </div>
            </div>
            <div className=' flex ml-5 text-gray-600 relative mb-3 bg-gray-100 mr-2 rounded-xl px-4 py-3'>
              <img src={cloud} alt='cloud' className=' w-12 h-12 mr-5 rounded-full' />
              <div className=' block'>
                <h1 className=' font-semibold mb-2 text-base'>CloudSnip</h1>
                <div className='flex font-normal mb-2'>
                  <div className='flex font-normal'>
                  <i class="fa-regular fa-folder-closed relative top-1 mr-2"></i>
                  <p className='mr-10'>Cloud Services</p>
                  </div>
                  <div className='flex'>
                  <i class="fa-regular fa-user relative top-1 mr-2"></i>
                  <p className='mr-10'>Technical Lead</p>
                  </div>
                  <div className='flex'>
                  <i class="fa-solid fa-calendar-day relative top-1 mr-2"></i>
                  <p className='mr-10'>May 2020</p>
                  </div>
                </div>
                <div className='block max-w-lg'>
                  <p className='mb-3'>CloudSnip is a versatile cloud storage service, providing users with secure file storage, sharing, and synchronization across devices. Experience the next level of cloud convenience.</p>
                </div>
                <div className='mb-5'>
                  <a href='#' className='text-blue-700 font-semibold text-sm'>https://cloudsnip.net</a>
                </div>
              </div>
            </div>
            <div className=' flex ml-5 text-gray-600 relative mb-3 bg-gray-100 mr-2 rounded-xl px-4 py-3'>
              <img src={health} alt='health' className=' w-12 h-12 mr-5 rounded-full' />
              <div className=' block'>
                <h1 className=' font-semibold mb-2 text-base'>HealthTrackr</h1>
                <div className='flex font-normal mb-2'>
                  <div className='flex font-normal'>
                  <i class="fa-solid fa-folder-closed relative top-1 mr-2 "></i>
                  <p className='mr-10'>HealthTech</p>
                  </div>
                  <div className='flex'>
                  <i class="fa-reguler fa-user relative top-1 mr-2"></i>
                  <p className='mr-10'>Founder</p>
                  </div>
                  <div className='flex'>
                  <i class="fa-solid fa-calendar-day relative top-1 mr-2"></i>
                  <p className='mr-10'>Oct 2023</p>
                  </div>
                </div>
                <div className='block max-w-lg'>
                  <p className='mb-3'>HealthTrackr revolutionizes personal health management, offering a comprehensive platform for tracking fitness, nutrition, and health metrics. Take control of your well-being.</p>
                </div>
                <div className='mb-5'>
                <a href='#' className='text-blue-700 font-semibold text-sm'>https://healthtrackr.app</a>
                </div>
              </div>
            </div>
            </div>
            </div>  
            </div>
 );
}
export default Project;