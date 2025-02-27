'use client'
import LeftSidebar from '@/components/LeftSidebar';
import MainSection from '@/components/MainSection';
import RightSidebar from '@/components/RightSidebar';

import React from 'react'
const recentlyPlayed = [
  { id: 1, title: "おさななじみ", artist: "ユナ・ナイ", image: "/api/placeholder/80/80", duration: "4 min ago" },
  { id: 2, title: "Savage", artist: "Aespa", image: "/api/placeholder/80/80", duration: "7 min ago" },
  { id: 3, title: "can't look back", artist: "Machine Gun Kelly", image: "/api/placeholder/80/80", duration: "1 hr ago" },
  { id: 4, title: "Love Again", artist: "Baekhyun", image: "/api/placeholder/80/80", duration: "2 hr ago" }
];

const playlists = [
  { id: 1, title: "land of rising sun", image: "/api/placeholder/80/80", songs: "26 songs", duration: "2 hr 43 min" },
  { id: 2, title: "burning memories", image: "/api/placeholder/80/80", songs: "21 songs", duration: "1 hr 4 min" },
  { id: 3, title: "dream 127 U", image: "/api/placeholder/80/80", songs: "36 songs", duration: "1 hr 56 min" },
  { id: 4, title: "underrated", image: "/api/placeholder/80/80", songs: "18 songs", duration: "51 min" }
];


const MusicApp = () => {

  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden">
      {/* Main container */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}

        <LeftSidebar />


        {/* Main Content */}
   
        <MainSection/>

    
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