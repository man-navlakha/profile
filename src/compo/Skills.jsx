import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Skills = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
    return (
        <div>
            <section className="relative py-10  px-6 md:py-24" id="Skills">
                <div className="px-4 md:px-8">
                    <div className="flex flex-col mb-[136px] items-center mb-20">
                        <button className="rounded-lg border-4 border-black bg-black text-white text-2xl font-bold py-5 px-16 transition-all duration-200 hover:bg-white hover:text-black">
                            MY SKILLS
                        </button>
                        <div className=" absolute mt-20 md:top-24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                viewBox="0 0 744 423"
                                className="md:w-[744px] w-[300px] h-auto"
                                fill="none"
                            >

                                <path d="M2 126.5V86H258V0M366.5 422.5V0M741.5 133V86H481.5V0" stroke="url(#paint0_linear_2101_768)" strokeWidth="4"></path>
                                <defs>
                                    <linearGradient id="paint0_linear_2101_768" x1="371.963" y1="12" x2="359.62" y2="389.388" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#292929"></stop>
                                        <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col gap-20">


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">


                            <div className="flex flex-col gap-5">
                                <div className="flex flex-wrap gap-4">
                                    <span className='font-bold text-lg'>Frontend Skills/Tools:</span>
                                    {[
                                        "HTML", "CSS", "JavaScript", "React", "JSX", "Next.js",
                                        "Tailwind CSS", "DOM", "WordPress"
                                    ].map(skill => (
                                        <button key={skill} className="rounded-3xl border px-6 py-2 text-sm shadow bg-white text-gray-900 break-keep whitespace-pre cursor-pointer">
                                            {skill}
                                        </button>
                                    ))}
                                </div>



                                <div className="flex flex-wrap gap-4">
                                    <span className='font-bold text-lg'>UI Skills/Tools:</span>
                                    {[
                                        "FIGMA", "Adobe XD", "Adobe Illustrator"
                                    ].map(skill => (
                                        <button key={skill} className="rounded-3xl border px-6 py-2 text-sm shadow bg-white text-gray-900 break-keep whitespace-pre cursor-pointer">
                                            {skill}
                                        </button>
                                    ))}
                                </div>
                            </div>


                            <div className="flex flex-col gap-5">
                                <div className="flex flex-wrap gap-4">
                                    <span className='font-bold text-lg'>Version Control Tools:</span>
                                    {[
                                        "Git", "Github"
                                    ].map(skill => (
                                        <button key={skill} className="rounded-3xl border px-6 py-2 text-sm shadow bg-white text-gray-900 break-keep whitespace-pre cursor-pointer">
                                            {skill}
                                        </button>
                                    ))}
                                </div>


                                <div className="flex flex-wrap gap-4">
                                    <span className='font-bold text-lg'>Other Skills/Tools:</span>

                                    {["Node", "Express",
                                        "Rest API", "SQL",
                                    ].map(skill => (
                                        <button key={skill} className="rounded-3xl border px-6 py-2 text-sm shadow bg-white text-gray-900 break-keep whitespace-pre cursor-pointer">
                                            {skill}
                                        </button>
                                    ))}
                                </div>


                                <div className="flex flex-wrap gap-4">
                                    {[
                                        "UX/UI Design", "Product Design", "Figma",
                                        "Adobe XD", "Wireframe"
                                    ].map(skill => (
                                        <button key={skill} className="rounded-3xl border px-6 py-2 text-sm shadow bg-white text-gray-900 break-keep whitespace-pre cursor-pointer">
                                            {skill}
                                        </button>
                                    ))}
                                </div>

                            </div>


                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">


                            <div className="flex flex-col gap-5">


                            </div>


                            <div className="flex flex-col gap-5">

                                {/* <div className="flex flex-wrap gap-4">
                                <span className='font-bold text-lg'>Version Control Tools:</span>
                                {[
                                    "JavaScript", "TypeScript"
                                ].map(skill => (
                                    <button key={skill} className="border border-gray-600 bg-gray-100 p-4 rounded-md text-center hover:bg-gray-800 hover:text-white cursor-pointer">
                                        {skill}
                                    </button>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <span className='font-bold text-lg'>Other Skills/Tools:</span>

                                {["Node", "Express", 
                                    "Rest API", "SQL",
                                ].map(skill => (
                                    <button key={skill} className="border border-gray-600 bg-gray-100 p-4 rounded-md text-center hover:bg-gray-800 hover:text-white cursor-pointer">
                                        {skill}
                                    </button>
                                ))}
                            </div>


                            <div className="flex flex-wrap gap-4">
                                {[
                                    "UX/UI Design", "Product Design", "Figma", 
                                    "Adobe XD", "Wireframe"
                                ].map(skill => (
                                    <button key={skill} className="border border-gray-600 bg-gray-100 p-4 rounded-md text-center hover:bg-gray-800 hover:text-white cursor-pointer">
                                        {skill}
                                    </button>
                                ))}
                            </div> */}

                            </div>


                        </div>







                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills;
