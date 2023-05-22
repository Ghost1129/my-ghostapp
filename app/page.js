"use client"

import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import styles from './styles/Home.module.css'
import Info from './components/Info'
import Timeline from './components/Timeline'
import Timeline2 from './components/Timeline2'
import Test from './components/Test'
import Vacancies from './components/Vacancies'


export default function Home() {

  return (
    <>
    <Navbar />
    <div className={styles.container}>
    <Hero />
    <About />
    <Info/>
    <Timeline/>
    <Timeline2/>
    <Test/>
    <Vacancies/>
    </div>
    </>
  )
}
