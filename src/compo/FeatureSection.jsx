import React from "react";
import Aright from "./svg/Arrow.jsx/Aright";

const FeatureSection = ({ title, description, image, action_value, action_link, reverse }) => {
  return (
    <div
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-10 my-20`}
    >
      <img src={image} alt={title} loading="lazy" className="w-60 md:w-80 rounded-xl" />
      <div className="text-left max-w-md">
<h2 className="text-2xl font-bold mb-3">
  {title.split(" ").map((word, i) => (
    <span key={i} className={i === 0 ? "text-green-600" : ""}>
      {word}{" "}
    </span>
  ))}
</h2>




        <p className="text-gray-600">{description}</p>
        {
          action_value && action_link && (

            <a href={action_link} className='text-lg justify-right flex  p-2  text-right underline-offset-4 underline text-[#3c0e40] hover:text-[#3crr00]'>{action_value} <span className='p-2'><Aright /></span></a>
          )}
      </div>
    </div>
  );
};

export default FeatureSection;
