'use client'
import LeftSidebar from '@/components/LeftSidebar';
import MainSection from '@/components/MainSection';
import Player from '@/components/Player';
import RightSidebar from '@/components/RightSidebar';
import React  from 'react';

const MusicApp = () => {
  

  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden">
      {/* Main container */}
      <div className="flex flex-1 overflow-hidden">
        <LeftSidebar />
        <MainSection />
        {/* Always show RightSidebar on desktop, conditionally on mobile */}
        <div className={`hidden lg:block`}>
          <RightSidebar />
        </div>
          <div className="lg:hidden">
            <RightSidebar />
          </div>
    
      </div>

      {/* Player Controls */}
      <Player />

     
    </div>
  );
};

export default MusicApp;