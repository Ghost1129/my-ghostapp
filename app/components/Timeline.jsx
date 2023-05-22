import { useAnimation, useInView,motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect } from 'react'
import styles from '../styles/Animate.module.css'

const Timeline = () => {
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
            rotate:[360]
        },
        visible:{
            rotate:[360 ,360 ,0],
            offsetDistance: "100%",
        }
    }
    const headingVariants = {
        hidden: {x: -20,opacity: 0},
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 2,
            }
        }
    }
  return (
    <section ref={ref} className='h-screen overflow-y-scroll pb-28 snap-center'>
        <div className='flex flex-col py-4 ml-[25%] '>
            <motion.span
                initial="hidden"
                animate={controls}
                variants={headingVariants}
             className='font-md'>Wrong with self-improvement & how we are fixing it.</motion.span>
            <motion.span
            initial="hidden"
            animate={controls}
            variants={headingVariants}
             className='flex items-center gap-4'>
                <span className='text-4xl font-bold'>Self-improvement. Ugh.</span>
                <motion.div 
                    initial="hidden"
                    animate={controls}
                    variants={ghostVariants}
                    transition={{ duration: 3 ,repeat:0 }}
                    className={`${styles.Animate} -ml-10 -mt-10 mb-5`}>
                    <Image src='/assets/blob-bat.svg' width={80} height={80}  alt="hero" /> 
                </motion.div>
            </motion.span>
        </div>
        {/* Timeline */}
        <div className='flex flex-col items-center mt-8 mb-8 -ml-[30%]'>
            <div className='relative w-4 h-4 bg-purple-100 rounded-full'>
                <span className='absolute flex flex-col gap-3 min-w-max left-10'>
                    <span className='text-xl font-bold'>Task 1</span>
                    <span className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
                </span>

            </div>
            <div className='w-1 h-40 bg-purple-100'></div>
            <div className='relative w-4 h-4 bg-purple-100 rounded-full'>
            <span className='absolute flex flex-col gap-3 min-w-max left-10'>
                    <span className='text-xl font-bold'>Task 2</span>
                    <span className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
                </span>
            </div>
            <div className='w-1 h-40 bg-purple-100'></div>
            <div className='relative w-4 h-4 bg-purple-100 rounded-full'>
            <span className='absolute flex flex-col gap-3 min-w-max left-10'>
                    <span className='text-xl font-bold'>Task 3</span>
                    <span className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
                </span>
            </div>
            <div className='w-1 h-40 bg-purple-100'></div>
            <div className='relative w-4 h-4 bg-purple-100 rounded-full'>
            <span className='absolute flex flex-col gap-3 min-w-max left-10'>
                    <span className='text-xl font-bold'>Task 4</span>
                    <span className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
                </span>
            </div>
            <div className='w-1 h-40 bg-purple-100'></div>
            <div className='relative w-4 h-4 bg-purple-100 rounded-full'>
            <span className='absolute flex flex-col gap-3 min-w-max left-10'>
                    <span className='text-xl font-bold'>Task 5</span>
                    <span className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
                </span>
            </div>
        </div>
        
    </section>
  )
}

export default Timeline