import React, { useState, useEffect } from 'react';
import Navbar from '../compo/Navbar';
import One from '../compo/One';
import About from '../compo/About';
import Fea from '../compo/Fea';
import Project from '../compo/Projects';
import Footer from '../compo/Footer';
import Skills from '../compo/Skills';
import Scroll from '../compo/Scroll';
import Degi from '../compo/Degi';
import ChatbotPopup from '../compo/chatbot';
import ScrollRevealWrapper from '../compo/ScrollRevealWrapper'; // ✅ import

const Home = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  useEffect(() => {
    if (isChatbotOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isChatbotOpen]);

  return (
    <div>
      <Navbar />

      {/* Section-wise scroll reveal */}
      <ScrollRevealWrapper><One /></ScrollRevealWrapper>
      <ScrollRevealWrapper><Degi /></ScrollRevealWrapper>
      <ScrollRevealWrapper><About /></ScrollRevealWrapper>
      <ScrollRevealWrapper><Fea /></ScrollRevealWrapper>
      <ScrollRevealWrapper><Scroll /></ScrollRevealWrapper>
      <ScrollRevealWrapper><Skills /></ScrollRevealWrapper>
      <ScrollRevealWrapper><Project /></ScrollRevealWrapper>
      <ScrollRevealWrapper><Scroll /></ScrollRevealWrapper>
      <ScrollRevealWrapper><Footer /></ScrollRevealWrapper>

      <ChatbotPopup 
        isOpen={isChatbotOpen} 
        setIsOpen={setIsChatbotOpen} 
      />
    </div>
  );
};

export default Home;
