import React from 'react'
import { Section } from './common/Section';
import avatar from "../assets/avatar.png";

export const Testimonials = () => {

    const TESTIMONIALS=[
        {
            id:1,
            image:avatar,
            name:"John RockFeller",
            comment:"John values 'Hard work' & 'Quality' that makes you more responsible at work & offers a great place with friendly environment & supportive clients to grow and develop your knowledge and skills."
        },
        {
            id:2,
            image:avatar,
            name:"Rahul",
            comment:"It has been an amazing journey with Rahul so far. I’ve learned so many new things in my short span with Jeavio. The company’s environment is fresh and boosts transparency and maturity in the culture. I find myself among a group of great colleagues who share their experiences and work together in a spirit of mutual benefit."
        },
        {
            id:3,
            image:avatar,
            name:"Shardul",
            comment:"A high energy atmosphere, transparent culture, internal communication, leadership support coupled with loads of learning opportunities help the individual act as an entrepreneur in their own space."
        }
    ];

  return(
  <Section title='Testimonials 💬' subtitle="This is what my other clients have to say about me.I accept clients from all around the world.">

    <div className='max-w-xl flex flex-col gap-8'>
        {TESTIMONIALS.map(({id,image,name,comment})=>(
            <div className='flex p-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-300'>
                <div className='w-1/3'>
                    <img src={image} alt={name} className="w-20 h-20 object-cover object-top pt-2" />
                </div>
                <div className='w-2/3 flex flex-col justify-center items-center gap-3 p-2'>
                    <h3 className='text-xl font-semibold'>{name}</h3>
                    <p className='text-sm font-extralight'>{comment}</p>
                </div>
            </div>
        ))}
    </div>
  </Section>
  )
}
