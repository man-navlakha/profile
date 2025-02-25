import React from 'react'
import Navbar from '../compo/Navbar'
import One from '../compo/One'
import About from '../compo/About'
import Fea from '../compo/Fea'
import Edu from '../compo/Edu'
import Footer from '../compo/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />  
      <One />
      <About />
      <Fea id="projects"/>
      {/* <Edu /> */}
      <Footer />
    </div>
  )
}

export default Home
