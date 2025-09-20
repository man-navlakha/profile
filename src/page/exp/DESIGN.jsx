import React from 'react'
import FeatureSection from '../../compo/FeatureSection'
import Navbar from '../../compo/Navbar'
import Footer from '../../compo/Footer'

const DESIGN = () => {
  return (
    <div>
      <Navbar />

      <div className="mx-auto max-w-max w-full p-6 flex flex-col justify-center">
        <FeatureSection
          title="Solvinger AI UI/UX"
          description="Designed the UI for Solvinger AI chatbot in Figma, focusing on a user-friendly and engaging experience."
          image="solvinger-ui.png"
          action_value="View on Figma"
          action_link="https://www.figma.com/community/file/1506988206106044637/solvinger-the-ai-chat-bot"
        />
        <FeatureSection
          title="Career System UI (HarSar Innovations)"
          description="Adapted a Figma design into a fully functional career page, demonstrating the ability to translate design mockups into live applications."
          image="career-ui.png"
        />
        <FeatureSection
          title="Graphic Design"
          description="Created advertising posters for Naren Advertising and Vision World using Adobe Illustrator and CorelDraw, showcasing skills in graphic design."
          image="graphic-design.png"
          reverse
        />
      </div>

      <Footer />
    </div>
  )
}

export default DESIGN
