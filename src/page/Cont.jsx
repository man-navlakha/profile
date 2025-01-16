import React from 'react';

const Cont = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Me</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Feel free to reach out to me by filling out the form below or through my social media channels.
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="mt-8 lg:mt-0 lg:ml-8 text-center lg:text-left">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-lg text-gray-700 mb-2">Email: your-email@example.com</p>
          <p className="text-lg text-gray-700 mb-2">Phone: +123 456 7890</p>
          <div className="flex justify-center lg:justify-start space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-2xl text-blue-700"></i>
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-2xl text-gray-800"></i>
            </a>
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-2xl text-blue-500"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cont;