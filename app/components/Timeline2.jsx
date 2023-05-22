import Image from 'next/image'
import React, { useEffect } from 'react'
import { useAnimation, useInView,motion } from 'framer-motion'
import { delay } from 'framer-motion'
import { spring } from 'framer-motion'

const Timeline2 = () => {
    const ref = React.useRef(null)
    const InView = useInView(ref)
    const controls = useAnimation()
    const headingVariants = {
        hidden: {x: -600,scale: 0},
        visible: {
            x: 0,
            scale: 1,
            transition: {
                duration: 1,
            }
        }
    }
    const InfoContainer ={
            hidden:{opacity:1},
            visible:{
                opacity:1,
                transition:{
                    staggerChildren:0.5,
                    delayChildren:0.2
                }
            }

    }
    const InfoVariants={
        hidden:{
            scale:0
        },
        visible:{
            scale:1,
            transition:{
                duration:1
            }
        }
        
    }
    const TimelineContainer={
        hidden:{opacity:1},
            visible:{
                opacity:1,
                transition:{
                    staggerChildren:0.5,
                    delayChildren:0.2,
                    delay:0.6
                }
            }
    }
    const TimelineVariant={
        hidden:{
            scale:0.5
        },
        visible:{
            scale:1,
            transition:{
                duration:2,
                type:'spring',
                bounce:0.5
            }
        }
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
    <section ref={ref} className='h-screen px-32 py-20 snap-center'>
        <div className='text-center py-14 rounded-3xl bg-blue-50'>
            <motion.div
                initial="hidden"
                animate={controls}
                variants={headingVariants}
             className='text-lg font-medium'>Let your friends, family, and co-workers (anoymously) rate your social skills.</motion.div>
            <motion.h2
                initial="hidden"
                animate={controls}
                variants={headingVariants}
             className='mt-5 text-4xl font-bold'>Ever wondered what others think of you?</motion.h2>
            <motion.div
            initial="hidden"
            animate={controls}
            variants={InfoContainer}

             className='flex justify-center gap-20 mt-12 text-start'>
                <motion.div 
                variants={InfoVariants}
                className='flex flex-col items-center text-xs'>
                    <Image src='/assets/blob-bat.svg'  width={80} height={80}  alt="hero" />
                    <span>Answer questions on your social skills</span>
                </motion.div>
                <motion.div
                variants={InfoVariants}
                 className='flex flex-col items-center text-xs'>
                    <Image src='/assets/blob-bat.svg'  width={80} height={80}  alt="hero" />
                    <span>Answer questions on your social skills</span>
                </motion.div>
                <motion.div
                variants={InfoVariants}
                 className='flex flex-col items-center text-xs'>
                    <Image src='/assets/blob-bat.svg'  width={80} height={80}  alt="hero" />
                    <span>Answer questions on your social skills</span>
                </motion.div>
            </motion.div>
            <motion.div
                initial="hidden"
                animate={controls}
                variants={TimelineContainer} className='w-2/3 mx-auto mt-12 bg-white rounded-lg'>
                <div
                 className='flex items-center justify-center p-16'>
                    <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={TimelineVariant}
                     className='relative w-6 h-6 bg-purple-400 rounded-full'>
                        <span className='absolute -top-[150%] -left-6 px-2 py-1 rounded-md bg-purple-400 text-white'>You</span>
                    </motion.div>
                    <div className='h-1 bg-black rounded-full w-36'></div>
                    <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={TimelineVariant} className='relative w-6 h-6 rounded-full bg-sky-300'>
                    <span className='absolute top-[150%] left-0 px-2 py-1 rounded-md  bg-sky-300 min-w-max text-white'>Anonymonos 1</span>
                    </motion.div>
                    <div className='h-1 bg-black rounded-full w-36'></div>
                    <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={TimelineVariant} className='relative w-6 h-6 bg-orange-200 rounded-full'>
                    <span className='absolute -top-[150%] -left-6 px-2 py-1 rounded-md bg-orange-200 min-w-max text-white'>Anonymonos 2</span>
                    </motion.div>
                    <div className='h-1 bg-black rounded-full w-36'></div>
                    <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={TimelineVariant} className='relative w-6 h-6 bg-green-300 rounded-full'>
                    <span className='absolute top-[150%] left-0 px-2 py-1 rounded-md bg-green-300 min-w-max text-white'>Anonymonos 3</span>
                    </motion.div>
                    
                </div>

            </motion.div>
        </div>
    </section>
  )
}

export default Timeline2