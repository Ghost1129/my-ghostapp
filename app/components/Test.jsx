import React, { useEffect } from 'react'
import { useAnimation, useInView,motion } from 'framer-motion'

const Test = () => {
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

  const buttonVariants = {
    hidden: {y: 20,opacity: 0},
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
        }
    }
  }

  const textVariants = {
    hidden: {opacity: 0},
    visible: {
        
        opacity: 1,
        transition: {
            duration: 2,
            

        }
    }
  }

  



  return (
    <section ref={ref} className='h-screen px-8 snap-center font-Montserrat'>
        <div className='flex flex-col items-center justify-center h-full gap-4 -mt-8 ' >
            <span className="text-lg">We take privacy seriously</span>
            <h2 className='text-3xl font-bold'>Before you get started</h2>
            <p className='text-xl font-light text-center'>We wont share your answers with anyone and wont ever tell <br/> you which friends said what about you </p>
            <span className='font-light'>with love, <motion.span initial="hidden" animate={controls} variants={textVariants} className='text-xl font-MrDafoe'>Team Ghost</motion.span></span>
            <motion.button
                initial="hidden"
                animate={controls}
                variants={buttonVariants}
             className='px-4 py-2 mt-3 text-sm text-white bg-black rounded-full'>Start a test</motion.button>
            <span className='text-xs'>Take only 5 minutes</span>
        </div>
    </section>
  )
}

export default Test