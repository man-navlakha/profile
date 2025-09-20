import React from 'react'
import FeatureSection from '../../compo/FeatureSection'
import Navbar from '../../compo/Navbar'
import Footer from '../../compo/Footer'

const PYHTON = () => {
  return (
    <div>
      <Navbar />

      <div className="mx-auto max-w-max w-full p-6 flex flex-col justify-center">
        <FeatureSection
          title="Rent PC Security App for Windows"
          description="A Windows Tray application built with Python that displays shop and company details, as well as important messages. Designed for security and business use. Explore the code and details on GitHub."
          image="pcsecurity.png"
          action_value="View on GitHub"
          action_link="https://github.com/man-navlakha/psr"
        />
      </div>

      <Footer />
    </div>
  )
}

export default PYHTON
