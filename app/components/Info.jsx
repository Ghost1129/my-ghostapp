"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { motion, useAnimation, useInView } from "framer-motion"


const Info = () => {
    const ref = React.useRef(null)
    const InView = useInView(ref)
    const controls = useAnimation()
    // Animations
    const FlowerVariants = {
        hidden:{
            rotate: 0,
        },
        visible:{
            rotate: 360,
            transition: {
                duration: 8,
                repeat: Infinity,
            }
        }

    }
    const LeafVariant ={
        hidden:{
            y:100,
            opacity: 0,
        },
        visible:{
            y:0,
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.5

            }
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
    const rotateVariants = {
        hidden:{
            y: -200,
            x: 100,
        },
        visible:{
            x:[100,100,0],
            y:[-200,-100,0],
            transition: {
                duration: 2,
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
    <section ref={ref} className='h-screen px-8 py-20 snap-center'>
        <div className='relative flex py-6 mx-auto overflow-hidden px-14 rounded-3xl bg-orange-50'>
            <motion.div 
            initial="hidden"
            animate={controls}
            variants={LeafVariant}
            className='absolute right-2 top-4'>
            <Image src='/assets/leaf.png'  width={80} height={80}  alt="hero" />
            </motion.div>
            
            <motion.div 
            initial="hidden"
            animate={controls}
            variants={FlowerVariants}
            className='absolute right-[20%] top-0'>
            <Image src='/assets/flower.png' className='overflow-visible ' width={80} height={80}  alt="hero" />
            </motion.div>
            
            <div className='relative p-10 min-w-max'>
                <motion.span 
                initial="hidden"
                animate={controls}
                variants={headingVariants}
                className='flex flex-col gap-3'>
                    <span className='text-sm'>Built out of frustration</span>
                    <h2 className='text-4xl font-bold'>Meet the ahead app</h2>
                </motion.span>
                <div className='h-[200px]  mt-20 flex flex-col items-center justify-center'>
                    {/* Circle */}
                    <motion.div 
                    initial="hidden"
                    animate={controls}
                    variants={rotateVariants}
                    className='absolute -bottom-20 -left-24 h-[200px] bg-orange-100 rounded-full aspect-square'></motion.div>
                    <div className='absolute right-0 flex flex-col items-center gap-2 mt-12'>
                        <Image src='/assets/leaf.png' className='ml-8' width={30} height={30}  alt="hero" />
                        <motion.div 
                        initial="hidden"
                        animate={controls}
                        variants={FlowerVariants}
                        >
                        <Image src='/assets/flower.png' width={40} height={40}  alt="hero" />
                        </motion.div>
                    </div>
                    <div className='z-20 flex items-center justify-center h-full bg-gray-100 rounded-full aspect-square '>
                        <div className='h-[90%]  aspect-square bg-white rounded-full flex items-center justify-center'>
                            <motion.div
                            initial="hidden"
                            animate={controls}
                            >
                            <Image src='/assets/casper.svg' width={100} height={100}  alt="hero" />
                            </motion.div>

                        </div>

                    </div>


                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-4 p-16 leading-6 text-gray-600'>
            <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, culpa ullam, veniam cum vero reiciendis amet tenetur eos.
            </span>
            <span> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia sed laborum numquam fuga ea molestiae, labore animi repudiandae.
            </span>
            </div>
        </div>
    </section>
  )
}

export default Info