import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6 transform transition-transform hover:scale-105">
        <h3 className="text-2xl font-semibold text-gray-800 text-center">Login</h3>
        <p className="text-gray-500 text-center">Enter your info to login</p>

        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your fucking email..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your fucking password..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
            />
          </div>
        </div>

        <div>
          <input
            type="submit"
            value="Login"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300 cursor-pointer"
          />
        </div>

        
      </form>
    </div>
  );
};

export default Page;
