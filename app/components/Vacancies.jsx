import Image from 'next/image'
import React, { useEffect } from 'react'
import { MapPinIcon ,EnvelopeIcon } from '@heroicons/react/24/solid'
import { useAnimation, useInView,motion } from 'framer-motion'

const Vacancies = () => {
    const ref = React.useRef(null)
    const InView = useInView(ref)
    const controls = useAnimation()
    useEffect(() => {
        if(InView){
            controls.start('visible')
        }
        if(!InView){
            controls.start('hidden')
        }
    }, [controls,InView])
    const vacancies = [
        {
            title: 'Frontend developer',
        },
        {
            title: 'Backend developer',
        },
        {
            title: 'Fullstack developer',
        }
    ]

    const headingVariants = {
        hidden: {x: -40,opacity: 0},
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1.2,
            }
        }
    }


  return (
    <section ref={ref} className='h-screen p-12 mx-28 snap-center font-Montserrat'>
        <div>
            <motion.h2
                initial="hidden"
                animate={controls}
                variants={headingVariants}
             className='text-4xl font-bold'>Open vacancies</motion.h2>
            <div className='flex justify-around mt-10 gap-14'>
                {vacancies.map((vacancy, index) => (
                    <div key={index} className='flex flex-col gap-3 p-6 duration-500 ease-in-out cursor-pointer hover:bg-amber-100 hover:transition group rounded-2xl bg-amber-50'>
                    <h3 className='text-lg font-semibold'>{vacancy.title}</h3>
                    <ul className='flex flex-col gap-2 ml-4 text-sm list-disc'>
                        <li>Full-time position</li>
                        <li>Berlin or remote</li>
                        <li>85k, 0.5-1.50% equity share options</li>
                    </ul>
                    <button className='hidden px-4 py-2 text-white transition duration-200 bg-black rounded-full group-hover:flex max-w-max'>See Details</button>
                </div>
                ))}
            </div>
            <hr className='my-6' />
            <div className='flex flex-col items-center justify-center gap-4'>
                <div className='relative flex w-12 h-12 bg-purple-500 rounded-md '>
                    <Image src='/assets/logo.png' fill alt="logo" />
                    <span className='absolute mt-1 -ml-1 text-xl font-bold text-purple-500 top-full'>Ghost</span>
                </div>
                
                <div className='flex mt-6 space-x-6'>
                    <div className='flex items-center gap-2 text-xs'>
                        <div className='flex items-center justify-center w-6 h-6 bg-green-100 rounded-full'><MapPinIcon className='w-4 h-4' /></div>
                        August 26, 10115 Berlin</div>
                    <div className='flex items-center gap-2 text-xs'>
                        <div className='flex items-center justify-center w-6 h-6 bg-green-100 rounded-full'><EnvelopeIcon className='w-4 h-4' /></div>
                        hi@ghost-app.com</div>
                </div>
                <Image src='/assets/app-store-png-logo-33116.png' width={200} height={50} alt="hero" />
                <span className='text-xs'>2022 Ghost app. All right reserved</span>
            </div>
        </div>
    </section>
  )
}

export default Vacancies