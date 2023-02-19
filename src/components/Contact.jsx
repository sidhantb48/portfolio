import React from 'react'
import { Section } from './common/Section'
import { FaFacebook,FaTwitter,FaLinkedin } from 'react-icons/fa'
import contact from '../assets/mobile.png';


export const Contact = () => {

    const SOCIAL=[
        {
            id:1,
            link:"https://twitter.com",
            icon:<FaTwitter/>
        },
        {
            id:2,
            link:"https://facebook.com",
            icon:<FaFacebook/>
        },
        {
            id:1,
            link:"https://Linkedin.com",
            icon:<FaLinkedin/>
        }
    ]

  return (
    <Section title='Contact ☎' subtitle="These are the ways you can get in touch with me. Hope to hear from you soon :)">
        <div className='flex flex-col items-center justify-center gap-8 text-center'>
            <div><img src={contact} alt="contact info" className='w-32 h-32'/></div>
            <div>
                <p className='max-w-xs md:max-w-lg font-extralight'>
                    I am open to talk regarding freelancing or full-time opportunities.
                    Fell free to contact me using your preferred medium.
                </p>
            </div>
            <div className='flex w-full items-center justify-evenly text-3xl'>
                {SOCIAL.map(({id,link,icon})=>(
                    <a 
                    href={link} 
                    target='_blank' 
                    rel="noopener noreferrer" 
                    className='duration-200 ease-in-out hover:text-rose-600'>
                        {icon}
                    </a>

                ))}
            </div>

            {/* bottom form */}
            <div className='p-8 text-left w-full '>
                <form action='https://getform.io/f/f699a2b0-987b-4cdf-9d0a-e4c2ae90a18a' method='POST'>
                    <div className='w-full'>
                        <div className='flex flex-col'>
                            <label className='capitalize text-sm py-2 font-extralight'>
                                Name
                            </label>
                            <input type="text" name="name" className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"/>
                        </div>
                        
                        <div className='flex flex-col my-2'>
                            <label className='capitalize text-sm py-2 font-extralight'>
                                Phone
                            </label>
                            <input type="text" name="Phone" className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"/>
                        </div>

                        <div className='flex flex-col my-2'>
                            <label className='capitalize text-sm py-2 font-extralight'>
                                Email
                            </label>
                            <input type="text" name="Email" className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"/>
                        </div>

                        <div className='flex flex-col'>
                            <label className='capitalize text-sm py-2 font-extralight'>
                                Message
                            </label>
                            <textarea name="message" rows="10" className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none" ></textarea>
                            
                        </div>

                    </div>
                    
                    <div className='flex items-center justify-center'>
                        <button className='my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white px-6 py-3 uppercase rounded-md tracking-wider cursor-pointer hover:scal-105 duration-200'>send message</button>
                    </div>

                </form>
            </div>


        </div>
    </Section>
  )
}
