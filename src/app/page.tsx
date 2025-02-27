'use client'
import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import React from 'react'

const MusicApp = () => {

  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden">
      {/* Main container */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}

        <LeftSidebar />


        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-gradient-to-b from-gray-900 to-black">


        </div>

        {/* Right Sidebar */}
  
          <RightSidebar />
        
      </div>

      {/* Player Controls */}
      <div className="h-16 md:h-20 bg-gray-900 border-t border-gray-800 px-4 flex items-center">

      </div>

    </div>
  );
};

export default MusicApp;