import React from 'react';
import '../styles/About.module.css';

const About = () => {
  return (
    <div style={{ padding: "20px" }} className="bg-gradient-to-br  min-h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-4xl p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-6">Problem</h1>
        <p className="text-gray-700 leading-relaxed">
          we highlighted an important problem that faces the world. The world lacks a global healthcare system where all the medical history of a patient can be accessed by any hospital when the need arises which in some cases may lead to avoidable fatalities or complications.
        </p>

        <div className="flex flex-wrap mt-8 justify-center">
          <h2 className="text-2xl font-semibold mb-3">Why do we need this system?</h2>

          <div className="w-full  p-2">
            <div className="bg-green-200 p-4 rounded-lg shadow">
              <p className="text-gray-700">
                Speed can be a crucial factor between life and death in emergency situations where the patient has no family or friends present. Making medical decisions quickly is essential, as any delay or hasty action could result in fatal errors.
              </p>
            </div>
          </div>
          <div className="w-full  p-2">
            <div className="bg-green-200 p-4 rounded-lg shadow">
              <p className="text-gray-700">
                In certain situations, children, pets, or individuals with psychological conditions may become lost and unable to communicate information about their loved ones' contacts or addresses, making it difficult for them to be reunited with their families.
              </p>
            </div>
          </div>
          <div className="w-full  p-2">
            <div className="bg-green-200 p-4 rounded-lg shadow">
              <p className="text-gray-700">
                In certain circumstances, patients may forget vital information or consider it unnecessary. By using our website, displaying information can become more efficient, making it easier for doctors to access the necessary details and reducing the likelihood of forgetfulness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;