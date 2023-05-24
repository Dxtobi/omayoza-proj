import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-700 to-pink-500">
      <h1 className="text-6xl font-bold text-white mb-8">404</h1>
      <p className="text-xl font-medium text-white mb-4">
        Oops! The page you're looking for could not be found.
      </p>
      <button  className="bg-white text-purple-700 font-medium px-6 py-2 rounded-full transition duration-300 hover:bg-purple-700 ">
        Go Back Home
      </button>
    </div>
  );
};

export default NotFoundPage;
