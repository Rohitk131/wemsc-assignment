'use client'
import React from 'react'

const MusicApp = () => {

  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden">
      {/* Main container */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-56 bg-black p-6 hidden md:flex flex-col">
        
        </div>
        
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-gradient-to-b from-gray-900 to-black">
         
         
        </div>
        
        {/* Right Sidebar */}
        <div className="w-64 bg-black p-6 border-l border-gray-800 hidden lg:block">
         
        </div>
      </div>
      
      {/* Player Controls */}
      <div className="h-16 md:h-20 bg-gray-900 border-t border-gray-800 px-4 flex items-center">
       
        
   
      </div>
      
     
    </div>
  );
};

export default MusicApp;