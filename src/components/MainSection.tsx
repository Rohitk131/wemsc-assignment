import React from 'react'
import { Search,  ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

const todaysHits = [
    { id: 1, title: "Today's Hot Hits", description: "The most played tracks right now", image: "/api/placeholder/200/200" },
    { id: 2, title: "land of rising sun", description: "By Woilon", image: "/api/placeholder/200/200" },
    { id: 3, title: "赤", description: "バンド", image: "/api/placeholder/200/200" },
    { id: 4, title: "Tickets to My Downfall", description: "Machine Gun Kelly", image: "/api/placeholder/200/200" }
  ];
  
  const newReleases = [
    { id: 1, title: "MAINSTREAM SELLOUT", artist: "MGK", image: "/api/placeholder/150/150" },
    { id: 2, title: "INVU", artist: "Taeyeon", image: "/api/placeholder/150/150" },
    { id: 3, title: "Stay Alive", artist: "Jung Kook", image: "/api/placeholder/150/150" },
    { id: 4, title: "Step Back", artist: "GOT", image: "/api/placeholder/150/150" }
  ];
function MainSection() {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-gradient-to-b from-gray-900 to-black">
          {/* Search bar */}
          <div className="flex justify-between items-center mb-6">
            <div className="hidden md:block w-full max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search for artists, songs, or albums"
                  className="bg-gray-800 text-gray-300 rounded-full py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-1 focus:ring-gray-700"
                />
              </div>
            </div>
            <div className="ml-auto">
              <MoreHorizontal className="cursor-pointer" />
            </div>
          </div>
          
          {/* Featured Album Banner */}
          <div className="bg-gradient-to-r from-pink-500 to-pink-400 rounded-xl p-6 mb-8 flex flex-col md:flex-row justify-between items-center transform transition-all duration-500 hover:scale-[1.01] hover:shadow-xl">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <div className="text-sm font-medium mb-1">New Album</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">THE SECOND STEP:<br />CHAPTER ONE</h2>
              <div className="mb-4 font-medium">TREASURE</div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition-all">
                LISTEN NOW
              </button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <img 
                src="/api/placeholder/300/300" 
                alt="TREASURE Album"
                className="h-40 md:h-48 object-contain"
              />
            </div>
          </div>
          
          {/* Hello User section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Hello, Woilon</h2>
              <button className="text-sm text-gray-400 hover:text-white transition-colors">
                See all
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {todaysHits.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:bg-gray-700 hover:scale-[1.03] cursor-pointer"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-3">
                    <h3 className="font-medium text-sm">{item.title}</h3>
                    <p className="text-gray-400 text-xs">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* New Releases */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">New releases for you</h2>
              <button className="text-sm text-gray-400 hover:text-white transition-colors">
                See all
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {newReleases.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:bg-gray-700 hover:scale-[1.03] cursor-pointer"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-3">
                    <h3 className="font-medium text-sm">{item.title}</h3>
                    <p className="text-gray-400 text-xs">{item.artist}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}

export default MainSection