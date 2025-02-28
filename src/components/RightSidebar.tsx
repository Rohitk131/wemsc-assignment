import React from 'react';
import { BellDot, ChevronDown, Clock, Music, Volume2 } from 'lucide-react';

function RightSidebar() {
  return (
    <div className="w-72 bg-black p-6 border-l border-gray-800 hidden lg:block h-screen flex flex-col">
      {/* User Info */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-white">TL</span>
          </div>
          <span className="ml-2 font-medium text-white">Timothy Luca</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-8 h-8 flex items-center justify-center cursor-pointer text-gray-400 hover:text-white transition-colors">
            <BellDot size={20} />
          </div>
          <div className="w-8 h-8 flex items-center justify-center cursor-pointer text-gray-400 hover:text-white transition-colors">
            <ChevronDown size={20} />
          </div>
        </div>
      </div>

      {/* Recently Played */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-bold text-white">Recently Played</h3>
          <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">See all</a>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center group">
            <div className="w-10 h-10 bg-gray-800 rounded flex-shrink-0 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
            </div>
            <div className="ml-3 flex-grow">
              <p className="text-xs text-white truncate">Big Dawgs</p>
              <p className="text-xs text-gray-400 truncate">Hanumankind</p>
            </div>
            <span className="text-xs text-gray-500 ml-2">4 min ago</span>
          </div>
          
          <div className="flex items-center group">
            <div className="w-10 h-10 bg-gray-800 rounded flex-shrink-0 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-300"></div>
            </div>
            <div className="ml-3 flex-grow">
              <p className="text-xs text-white truncate">Tauba Tauba</p>
              <p className="text-xs text-gray-400 truncate">Karan Aujla</p>
            </div>
            <span className="text-xs text-gray-500 ml-2">7 min ago</span>
          </div>
          
          <div className="flex items-center group">
            <div className="w-10 h-10 bg-gray-800 rounded flex-shrink-0 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-green-400 to-emerald-600"></div>
            </div>
            <div className="ml-3 flex-grow">
              <p className="text-xs text-white truncate">Joota Japani</p>
              <p className="text-xs text-gray-400 truncate">KR$NA</p>
            </div>
            <span className="text-xs text-gray-500 ml-2">1 hr ago</span>
          </div>
          
          <div className="flex items-center group">
            <div className="w-10 h-10 bg-gray-800 rounded flex-shrink-0 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-600"></div>
            </div>
            <div className="ml-3 flex-grow">
              <p className="text-xs text-white truncate">Maniac</p>
              <p className="text-xs text-gray-400 truncate">Yo Yo Honey Singh ft. Esha Gupta</p>
            </div>
            <span className="text-xs text-gray-500 ml-2">2 hr ago</span>
          </div>
        </div>
      </div>

      {/* My Playlist */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-bold text-white">My Playlist</h3>
          <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">See all</a>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center group cursor-pointer hover:bg-gray-900 rounded p-1 transition-colors">
            <div className="w-10 h-10 bg-gray-800 rounded flex-shrink-0 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-yellow-300 to-orange-500"></div>
            </div>
            <div className="ml-3 flex-grow">
              <p className="text-xs text-white truncate">Punjabi Rap Kings</p>
              <p className="text-xs text-gray-400 truncate">38 songs</p>
            </div>
            <span className="text-xs text-gray-500 ml-2">2 hr 43 min</span>
          </div>
          
          <div className="flex items-center group cursor-pointer hover:bg-gray-900 rounded p-1 transition-colors">
            <div className="w-10 h-10 bg-gray-800 rounded flex-shrink-0 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-red-500 to-orange-400"></div>
            </div>
            <div className="ml-3 flex-grow">
              <p className="text-xs text-white truncate">Hindi Rap Riot</p>
              <p className="text-xs text-gray-400 truncate">21 songs</p>
            </div>
            <span className="text-xs text-gray-500 ml-2">1 hr 4 min</span>
          </div>
          
          <div className="flex items-center group cursor-pointer hover:bg-gray-900 rounded p-1 transition-colors">
            <div className="w-10 h-10 bg-gray-800 rounded flex-shrink-0 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400"></div>
            </div>
            <div className="ml-3 flex-grow">
              <p className="text-xs text-white truncate">Desi Hip-Hop Fire</p>
              <p className="text-xs text-gray-400 truncate">35 songs</p>
            </div>
            <span className="text-xs text-gray-500 ml-2">1 hr 56 min</span>
          </div>
          
          <div className="flex items-center group cursor-pointer hover:bg-gray-900 rounded p-1 transition-colors">
            <div className="w-10 h-10 bg-gray-800 rounded flex-shrink-0 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-teal-400"></div>
            </div>
            <div className="ml-3 flex-grow">
              <p className="text-xs text-white truncate">Street Rap Vibes</p>
              <p className="text-xs text-gray-400 truncate">18 songs</p>
            </div>
            <span className="text-xs text-gray-500 ml-2">51 min</span>
          </div>
        </div>
      </div>

      {/* Create Playlist Button */}
      <button className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 transition-colors text-sm font-medium mb-6">
        Create New Playlist
      </button>
    </div>
  );
}

export default RightSidebar;