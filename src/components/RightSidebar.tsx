import Section from "./SectionCard";
import { BellDot, ChevronDown } from 'lucide-react';
function RightSidebar() {

  const recentlyPlayed = [
    {
      id: "1",
      title: "Big Dawgs",
      subtitle: "Hanumankind",
      time: "4 min ago",
      gradientClass: "bg-gradient-to-br from-blue-400 to-purple-500",
    },
    {
      id: "2",
      title: "Winning Speech",
      subtitle: "Karan Aujla",
      time: "7 min ago",
      gradientClass: "bg-gradient-to-br from-blue-500 to-cyan-300",
    },
    {
      id: "3",
      title: "Joota Japani",
      subtitle: "KR$NA",
      time: "1 hr ago",
      gradientClass: "bg-gradient-to-br from-green-400 to-emerald-600",
    },
    {
      id: "4",
      title: "Maniac",
      subtitle: "Yo Yo Honey Singh ft. Esha Gupta",
      time: "2 hr ago",
      gradientClass: "bg-gradient-to-br from-pink-400 to-purple-600",
    },
  ];

  const myPlaylists = [
    {
      id: "1",
      title: "Punjabi Rap Kings",
      subtitle: "38 songs",
      time: "2 hr 43 min",
      gradientClass: "bg-gradient-to-br from-yellow-300 to-orange-500",
    },
    {
      id: "2",
      title: "Hindi Rap Riot",
      subtitle: "21 songs",
      time: "1 hr 4 min",
      gradientClass: "bg-gradient-to-br from-red-500 to-orange-400",
    },
    {
      id: "3",
      title: "Desi Hip-Hop Fire",
      subtitle: "35 songs",
      time: "1 hr 56 min",
      gradientClass: "bg-gradient-to-br from-gray-200 to-gray-400",
    },
    {
      id: "4",
      title: "Street Rap Vibes",
      subtitle: "18 songs",
      time: "51 min",
      gradientClass: "bg-gradient-to-br from-blue-600 to-teal-400",
    },
  ];

  return (
    <div className="w-72 bg-black p-6 border-l border-gray-800 hidden lg:block h-screen flex flex-col">
  
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

 
      <Section title="Recently Played" items={recentlyPlayed} />

      <Section title="My Playlist" items={myPlaylists} isPlaylist />

      <button className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 transition-colors text-sm font-medium mb-6">
        Create New Playlist
      </button>
    </div>
  );
}

export default RightSidebar;