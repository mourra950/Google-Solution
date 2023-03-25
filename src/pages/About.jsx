import React from 'react';
import '../styles/About.module.css';

const About = () => {
  return (
    <div className="bg-gradient-to-br from-green-500 to-blue-500 min-h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-4xl p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-gray-700 leading-relaxed">
          We are a leading health and wellness company committed to solving global problems by providing innovative solutions for a healthier and happier world. Our mission is to empower individuals and communities with the tools, knowledge, and resources necessary to achieve optimal well-being and sustainable living.
        </p>

        <div className="flex flex-wrap mt-8 justify-center">
          <div className="w-full md:w-1/2 p-2">
            <div className="bg-green-200 p-4 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
              <p className="text-gray-700">
                To be the world's leading provider of health and wellness solutions, transforming lives through innovation, education, and sustainable practices.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-2">
            <div className="bg-blue-200 p-4 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-3">Our Values</h2>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Integrity</li>
                <li>Compassion</li>
                <li>Excellence</li>
                <li>Innovation</li>
                <li>Sustainability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;