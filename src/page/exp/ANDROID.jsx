import React from 'react'
import FeatureSection from '../../compo/FeatureSection'

const ANDROID = () => {
  return (
    <div>
        <section className="bg-[#111b21] text-white text-center px-6 py-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Message <span className="text-green-500">privately</span>
      </h1>
      <p className="max-w-xl mx-auto text-gray-300 text-lg">
        Whether it’s your confessions, your difficult debates, or silly inside
        jokes, WhatsApp privacy helps your conversations stay protected.
      </p>
      <div className="flex justify-center mt-10">
        <img
          src="https://via.placeholder.com/350x200"
          alt="App Preview"
          className="rounded-xl"
        />
      </div>
    </section>


     <section className="bg-[#111b21] text-white px-6 py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">
        Need more <span className="text-green-500">help?</span>
      </h2>
      <ul className="max-w-lg mx-auto text-left space-y-4 text-gray-300">
        <li>How to use WhatsApp</li>
        <li>Manage your privacy settings</li>
        <li>What’s new on WhatsApp</li>
        <li>Common issues with privacy</li>
      </ul>
    </section>

     <div className="px-6 md:px-20">
        <FeatureSection
          title="Chat lock"
          description="Add an extra layer of security to your chats with Chat Lock."
          image="https://via.placeholder.com/250x400"
        />
        <FeatureSection
          title="Disappearing messages"
          description="Send messages that automatically disappear after a set time."
          image="https://via.placeholder.com/250x400"
          reverse
        />
        <FeatureSection
          title="Silence unknown callers"
          description="Filter out spam and unknown calls for more peace of mind."
          image="https://via.placeholder.com/250x400"
        />
      </div>
    </div>
  )
}

export default ANDROID
