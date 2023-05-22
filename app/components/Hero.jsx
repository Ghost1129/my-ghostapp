"use client"

import React ,{useEffect} from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { motion,useAnimation,useInView } from "framer-motion"



const Hero = () => {
    const ref = React.useRef(null)
    const InView = useInView(ref)

    const controls = useAnimation()
    // Animations
    const spanVariants = {
        hidden: {x: -20,opacity: 0},
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.5
            }
        }
    }
    const rotateVariants = {
        hidden: {rotate: 0},
        visible: {rotate: 360}
    }
    useEffect(() => {
        if(InView){
            controls.start('visible')
        }
        if(!InView){
            controls.start('hidden')
        }
    }, [controls,InView])
  return (
    <section ref={ref} className='h-screen px-8 py-4 snap-center'>
       <div className='flex py-6 mx-auto mt-4 px-14 rounded-3xl bg-purple-50'>
        {/* Inner Section left */}
            <div className='flex flex-col gap-2 my-auto min-w-max'>
            <motion.span
            initial="hidden"
            animate={controls}
            variants={spanVariants}
             className='ml-1 text-md'>Ghost app</motion.span>
            <motion.h2
            initial="hidden"
            animate={controls}
            variants={spanVariants}
             className='text-6xl font-bold'>Master your life <br />by mastering <br />emotions</motion.h2>
            <div className='flex items-center -ml-10'>
                
             <Image src='/assets/app-store-png-logo-33116.png' width={200} height={50} alt="hero" />
             <div className='-ml-4'>
                    <span className='flex gap-1'>
                        <StarIcon className='w-4 h-4 text-yellow-400' />
                        <StarIcon className='w-4 h-4 text-yellow-400' />
                        <StarIcon className='w-4 h-4 text-yellow-400' />
                        <StarIcon className='w-4 h-4 text-yellow-400' />
                        <StarIcon className='w-4 h-4 text-yellow-400' />
                    </span>
                    <span className='text-xs'>100+ AppStore reviews</span>
             </div>
                
                
            </div>
            </div>
        {/* Inner Section right */}
        <div className='flex items-center justify-center w-full h-[500px]'>
            <motion.div 
            animate={controls}
            variants={rotateVariants}
            transition={{ duration: 30,delay:0.6, repeat: Infinity }}
            className='relative flex items-center justify-center h-full border-2 border-white border-dashed rounded-full aspect-square '>
                {/* 1st bat */}
                <div className='absolute top-0 left-10'>
                    <Image src='/assets/blob-bat.svg' width={80} height={80}  alt="hero" />
                </div>
                {/* 2nd Bat */}
                <div className='absolute bottom-0 left-10'>
                    <Image src='/assets/casper.svg' width={80} height={80}  alt="hero" />
                </div>
                {/* 3rd Bat */}
                <div className='absolute -right-10 top-1/2'>
                    <Image src='/assets/cat-reaper.svg' width={80} height={80}  alt="hero" />
                </div>
            </motion.div>
            <div className='h-[350px] absolute bg-purple-200 aspect-square rounded-full flex items-center justify-between'>
                    <Image src='/assets/startup.svg' width={300} height={300}  alt="hero" />

                </div>
        </div>
       </div>
    </section>
  )
}

export default Hero