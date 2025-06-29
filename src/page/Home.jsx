import React from 'react'
import Navbar from '../compo/Navbar'
import One from '../compo/One'
import About from '../compo/About'
import Fea from '../compo/Fea'
import Project from '../compo/Projects'
import Edu from '../compo/Edu'
import Footer from '../compo/Footer'
import Skills from '../compo/Skills'
import Scroll from '../compo/Scroll'

const Home = () => {
  return (
    <div>
      <Navbar />
      <One />
      <Scroll />
      <About />
      <Fea />
      <Skills />
      <Edu />
      <Scroll />

      <Project />
      <Footer />


    </div>
  )
}

export default Home
