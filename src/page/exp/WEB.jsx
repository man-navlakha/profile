import React from 'react'
import FeatureSection from '../../compo/FeatureSection'
import Navbar from '../../compo/Navbar'
import Footer from '../../compo/Footer'

const WEB = () => {
  return (
    <div>
      <Navbar />
      
     <div className="mx-auto max-w-max w-full p-6 flex flex-col justify-center justify-center-safe ">
        <FeatureSection
          title="Pixel Class"
          description="Tired of searching for notes and assignments at the last minute? Pixel Class is the exclusive notes-sharing and collaboration platform for BCA & MSc-IT students at Shreyarth University. Access everything you need to succeed, all in one place."
          image="pxc.png"
          action_value="Try Now"
          action_link="https://pixelclass.netlify.app"
        />
        <FeatureSection
          title="Solvinger AI"
          description="A AI model for code review, For write something & all these features.
Here i developed full fronted parts with ReactJs."
          image="solvinger.png"
          action_value="Try Now"
          action_link="https://mysolvingerai.vercel.app/"
          reverse
        />
        <FeatureSection
          title="Career System"
          description="i developed a career system at HarSar Innovations using react js the same design they provided me on figma, & added Deployed on vercel."
          image="has.png"
        />
      </div>

      <Footer />
    </div>
  )
}

export default WEB
