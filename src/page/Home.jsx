import React, { useState, useEffect } from 'react';
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

  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // This effect runs whenever the `isChatbotOpen` state changes
  useEffect(() => {
    if (isChatbotOpen) {
      // Add the class to the body when the chatbot is open
      document.body.classList.add('no-scroll');
    } else {
      // Remove the class when the chatbot is closed
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isChatbotOpen]); // The effect depends on the isChatbotOpen state

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

      {/* --- THIS IS THE CORRECTED LINE --- */}
      <ChatbotPopup 
        isOpen={isChatbotOpen} 
        setIsOpen={setIsChatbotOpen} 
      />
    </div>
  )
}

export default Home;