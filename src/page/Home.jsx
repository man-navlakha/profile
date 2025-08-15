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
import Degi from '../compo/Degi'
import ChatbotPopup from '../compo/chatbot'

const Home = () => {
  return (
    <div>
      <Navbar />
      <One />
      <Degi/>
      <About />
      <Fea />
      <Scroll />
      <Skills />
      <Edu />
      <Project />

      <Scroll />
      <Footer />
      <ChatbotPopup />


    </div>
  )
}

export default Home
