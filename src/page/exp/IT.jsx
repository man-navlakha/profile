import React from 'react'
import Navbar from '../../compo/Navbar'
import Footer from '../../compo/Footer'
import FeatureSection from '../../compo/FeatureSection'

const IT = () => {
  return (
    <div className="bg-[#f7f5f3] min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 max-w-6xl mx-auto">
        {/* Left: Heading & Description */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-[#222] mb-6 leading-tight">
            Connect and get<br />more done with IT
          </h1>
          <p className="text-lg text-[#444] mb-6">
            From quick support chats to resolving complex issues, my IT Help Desk experience brings people and technology together. Explore how I maintain uptime, solve problems, and keep teams productive.
          </p>
        </div>
        {/* Right: Chat Cards */}
        <div className="md:w-1/2 flex flex-col gap-6 items-center">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg flex items-center px-4 py-3 w-80">
            <img src="/it-icon.png" alt="IT Help Desk" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <div className="font-semibold text-[#075e54]">Parshwanath Solutions</div>
              <div className="text-sm text-gray-600">99.9% uptime | 60+ issues solved</div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg flex items-center px-4 py-3 w-80">
            <img src="/service-desk.png" alt="Service Desk" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <div className="font-semibold text-[#075e54]">IT Service Desk</div>
              <div className="text-sm text-gray-600">Fast, friendly support</div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg flex items-center px-4 py-3 w-80">
            <img src="/system-maintenance.png" alt="System Maintenance" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <div className="font-semibold text-[#075e54]">System Maintenance</div>
              <div className="text-sm text-gray-600">Windows/Linux/Office 365</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-[#e7fbe7] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#075e54] text-center mb-10">
            Bringing everyone together, whether you need support, updates, or collaboration.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <img src="/it-icon.png" alt="IT Help Desk" className="w-16 h-16 rounded-full mb-4" />
              <div className="font-semibold text-[#075e54] mb-2">IT Help Desk</div>
              <p className="text-gray-700 text-center">
                Friendly, expert support for hardware, software, and network issues.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <img src="/service-desk.png" alt="Service Desk" className="w-16 h-16 rounded-full mb-4" />
              <div className="font-semibold text-[#075e54] mb-2">Service Desk Operations</div>
              <p className="text-gray-700 text-center">
                Managed tickets, documented processes, and kept teams connected.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <img src="/system-maintenance.png" alt="System Maintenance" className="w-16 h-16 rounded-full mb-4" />
              <div className="font-semibold text-[#075e54] mb-2">System Maintenance</div>
              <p className="text-gray-700 text-center">
                Installed and maintained IT hardware, configured Windows/Linux OS, and supported Office 365.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <img src="/collaboration.png" alt="Collaboration" className="w-16 h-16 rounded-full mb-4" />
              <div className="font-semibold text-[#075e54] mb-2">Collaboration</div>
              <p className="text-gray-700 text-center">
                Enabled smooth communication and teamwork across departments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default IT
