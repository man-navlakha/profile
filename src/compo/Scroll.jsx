import React from 'react'

const Scroll = () => {
  return (
    <div>
      
{/* Modern, animated skills marquee */}
<div className="mx-6 overflow-hidden h-[100px] py-2 items-center text-sm flex relative">
  {/* Left Gradient Fade */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-[20%] z-10 bg-gradient-to-r from-[#fcf5eb] to-transparent"></div>

  {/* Marquee */}
  <div className="flex w-max animate-marquee gap-8">
    {[
      { name: "HTML", src: "https://devrajchatribin.com/skills/HTML.svg" },
      { name: "CSS", src: "https://devrajchatribin.com/skills/CSS.svg" },
      { name: "JavaScript", src: "https://devrajchatribin.com/skills/JavaScript.svg" },
      { name: "TypeScript", src: "https://devrajchatribin.com/skills/TypeScript.svg" },
      { name: "React.js", src: "https://devrajchatribin.com/skills/React.js.svg" },
      { name: "Next.js", src: "https://devrajchatribin.com/skills/Next.js.svg" },
      { name: "Node.js", src: "https://devrajchatribin.com/skills/Node.js.svg" },
      { name: "Express.js", src: "https://devrajchatribin.com/skills/Express.js.svg" },
      { name: "MySQL", src: "https://devrajchatribin.com/skills/MySQL.svg" },
      { name: "MongoDB", src: "https://devrajchatribin.com/skills/MongoDB.svg" },
      { name: "PostgreSQL", src: "https://devrajchatribin.com/skills/PostgreSQL.svg" },
      { name: "Figma", src: "https://devrajchatribin.com/skills/Figma.svg" },
      { name: "TailwindCSS", src: "https://devrajchatribin.com/skills/TailwindCSS.svg" },
      { name: "GIT", src: "https://devrajchatribin.com/skills/GIT.svg" },
      { name: "HTML", src: "https://devrajchatribin.com/skills/HTML.svg" },
      { name: "CSS", src: "https://devrajchatribin.com/skills/CSS.svg" },
      { name: "JavaScript", src: "https://devrajchatribin.com/skills/JavaScript.svg" },
      { name: "TypeScript", src: "https://devrajchatribin.com/skills/TypeScript.svg" },
      { name: "React.js", src: "https://devrajchatribin.com/skills/React.js.svg" },
      { name: "Next.js", src: "https://devrajchatribin.com/skills/Next.js.svg" },
      { name: "Node.js", src: "https://devrajchatribin.com/skills/Node.js.svg" },
      { name: "Express.js", src: "https://devrajchatribin.com/skills/Express.js.svg" },
      { name: "MySQL", src: "https://devrajchatribin.com/skills/MySQL.svg" },
      { name: "MongoDB", src: "https://devrajchatribin.com/skills/MongoDB.svg" },
      { name: "PostgreSQL", src: "https://devrajchatribin.com/skills/PostgreSQL.svg" },
      { name: "Figma", src: "https://devrajchatribin.com/skills/Figma.svg" },
      { name: "TailwindCSS", src: "https://devrajchatribin.com/skills/TailwindCSS.svg" },
      { name: "GIT", src: "https://devrajchatribin.com/skills/GIT.svg" },
    ].map((skill, idx) => (
      <div
        key={idx}
        className="inline-flex items-center gap-2 rounded-3xl border px-6 py-2 text-sm shadow bg-white text-gray-900 break-keep whitespace-pre"
        >
        <div className="relative flex h-6 w-6 whitespace-pre">
          <img
            alt={skill.name}
            loading="lazy"
            decoding="async"
            className="object-contain h-full w-full"
            src={skill.src}
          />
        </div>
        {skill.name}
      </div>
    ))}
  </div>

  {/* Right Gradient Fade */}
  <div className="pointer-events-none absolute right-0 top-0 h-full w-[20%] z-10 bg-gradient-to-l from-[#fcf5eb] to-transparent"></div>
</div>
    </div>
  )
}

export default Scroll
