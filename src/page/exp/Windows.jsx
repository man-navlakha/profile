import React from 'react'
import FeatureSection from '../../compo/FeatureSection'
import Navbar from '../../compo/Navbar'
import Footer from '../../compo/Footer'

const Windows = () => {
  return (
    <div>
      <Navbar />

      <div className="mx-auto max-w-max w-full p-6 flex flex-col justify-center">
        <FeatureSection
          title="System App for Windows"
          description="Displays system information in a user-friendly interface. Explore the code and details on GitHub."
          image="system-app.png"
          action_value="View on GitHub"
          action_link="https://github.com/man-navlakha/system-app"
        />
        <FeatureSection
          title="Rent PC Security App for Windows"
          description="A Windows Tray application that displays shop and company details, as well as important messages. Designed for security and business use. Explore the code and details on GitHub."
          image="pcsecurity.png"
          action_value="View on GitHub"
          action_link="https://github.com/man-navlakha/psr"
          reverse
        />
      </div>

      <Footer />
    </div>
  )
}

export default Windows