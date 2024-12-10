import React, { useRef, useEffect } from 'react'
import info1 from '../assets/feature-1.png'
import info2 from '../assets/feature-2.png'

const Benefits = ({timeline, ease}) => {

  let logo = useRef(null)

  return (
    <div id='benefits' className='font-cormorant'  >

        {/* Info Box 1 */}
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 lg:px-24 px-6 lg:py-20 py-10 gap-8' >
          <div  data-aos="zoom-in"  data-aos-delay='800' className=' space-y-5' >
            <h2 className='font-extrabold text-3xl text-primary' >Work with tools you already use
            </h2>
            <p className='text-secondary text-lg' >Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
            <ul className='space-y-4 text-md' >
                <li className='flex items-center gap-x-3  ' > <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                 <span className='font-semibold' >Continuous integration and deployment</span>
                </li>
                <li className='flex items-center gap-x-3  ' > <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                 <span className='font-semibold' >Development workflow</span>
                </li>
                <li className='flex items-center gap-x-3  ' > <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                 <span className='font-semibold' >Knowledge management</span>
                </li>

            </ul>
            <p className='text-secondary text-lg' >Deliver great service experiences fast - 
                without the complexity of traditional ITSM solutions. </p>
         </div>

          <div data-aos="zoom-in"  data-aos-delay='1000' >
            <img src={info1}  className='w-[100%] lg:w-[80%] md:w-[90%]  ' alt="" />
          </div>

        </div>

        {/* Info Box 2 */}

        <div className='w-full grid grid-cols-1 lg:grid-cols-2 lg:px-24 px-6 lg:py-20 py-6 gap-8' >
          <div data-aos="zoom-in"  data-aos-delay='100' className=' space-y-5 order-2' >
            <h2 className='font-extrabold text-3xl text-primary' >Work with tools you already use
            </h2>
            <p className='text-secondary text-lg' >Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
            <ul className='space-y-4 text-md' >
                <li className='flex items-center gap-x-3  ' > <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                 <span className='font-semibold' >Continuous integration and deployment</span>
                </li>
                <li className='flex items-center gap-x-3  ' > <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                 <span className='font-semibold' >Development workflow</span>
                </li>
                <li className='flex items-center gap-x-3  ' > <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                 <span className='font-semibold' >Knowledge management</span>
                </li>

            </ul>
            <p className='text-secondary text-lg' >Deliver great service experiences fast - 
            without the complexity of traditional ITSM solutions. </p>

         </div>

          <div data-aos="zoom-in"  data-aos-delay='200' className='lg:order-1 order-2' >
            <img src={info2}  className='w-[100%] lg:w-[80%] md:w-[90%]  ' alt="" />
          </div>

        </div>



    </div>
    
  )
}

export default Benefits