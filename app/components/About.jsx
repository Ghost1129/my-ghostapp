"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import Ticker from 'framer-motion-ticker';
import { motion, useAnimation, useInView } from "framer-motion"
import styles from '../styles/Animate.module.css'

const About = () => {
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

    const ghostVariants = {
        hidden:{
            offsetDistance: "0%",
        },
        visible:{
            offsetDistance: "100%",
        }
    }
    const headingVariants = {
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

    
    const tickerData = [
        {
            id: 1,
            emoji: '😃',
            title: 'Emotions',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse itaque ab fuga dicta eum, sint excepturi laboriosam quisquam asperiores aut doloribus ',
            skew: false,
            color: 'bg-blue-50'
        },
        {
            id: 2,
            emoji: '😡',
            title: 'Emotions',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse itaque ab fuga dicta eum, sint excepturi laboriosam quisquam asperiores aut doloribus ',
            skew: false,
            color: 'bg-sky-50'

        },
        {
            id: 3,
            emoji: '😰',
            title: 'Emotions',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse itaque ab fuga dicta eum, sint excepturi laboriosam quisquam asperiores aut doloribus ',
            skew: true,
            color: 'bg-purple-50'
        },
        {
            id: 4,
            emoji: '😈',
            title: 'Emotions',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse itaque ab fuga dicta eum, sint excepturi laboriosam quisquam asperiores aut doloribus ',
            skew: false,
            color: 'bg-green-50'
        },
        {
            id: 5,
            emoji: '👻',
            title: 'Emotions',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse itaque ab fuga dicta eum, sint excepturi laboriosam quisquam asperiores aut doloribus ',
            skew: false,
            color: 'bg-yellow-50'

        }
    ]
  return (
    <section ref={ref} className='h-screen px-8 py-8 snap-center'>
        <div className='flex gap-8 mt-12 mx-28'>
            <span className='text-3xl font-semibold min-w-max'>EQ beats IQ</span>
            <p className='ml-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse itaque ab fuga dicta eum, sint excepturi laboriosam quisquam asperiores aut doloribus </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse itaque ab fuga dicta eum, sint excepturi laboriosam quisquam asperiores aut doloribus </p>
        </div>
        <div className='flex items-center mt-24 mx-28'>
            <motion.h2
            initial="hidden"
            animate={controls}
            variants={headingVariants}
             className='text-4xl font-bold'>Does this sound familiar...</motion.h2>
            {/* <Image src='/assets/cat-reaper.svg' width={80} height={80}  alt="hero" /> */}
      <motion.div 
        initial="hidden"
        animate={controls}
        variants={ghostVariants}
        transition={{ duration: 3 ,repeat:0 }}
      className={`${styles.Animate} -ml-10 -mt-10 mb-5`}>
      <Image src='/assets/cat-reaper.svg' width={80} height={80}  alt="hero" /> 
      </motion.div>
        </div>
        <div className='flex overflow-y-visible '>
            <Ticker duration={16}>
                {tickerData.map((item) => (
                    <div key={item.id} className={`flex flex-col max-w-sm gap-2 p-8 my-10 mx-10 ${item.color} rounded-xl ${item.skew?'-rotate-12':''}`}>
                    <span className='text-4xl'>{item.emoji}</span>
                    <span className='mt-2 text-lg font-bold'>You argue with a colleague</span>
                    <p className='text-sm text-gray-700'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse itaque ab fuga dicta eum, sint excepturi laboriosam quisquam asperiores aut doloribus
                    </p>
                </div>
                ))}
            </Ticker>

        </div>

    </section>
  )
}

export default About