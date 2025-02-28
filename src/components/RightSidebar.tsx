import Section from "./SectionCard";
import { BellDot, ChevronDown } from 'lucide-react';

function RightSidebar() {
  const recentlyPlayed = [
    {
      id: "1",
      title: "Big Dawgs",
      subtitle: "Hanumankind",
      time: "4 min ago",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02d9afe5c70c43cb2bd34605ea",
    },
    {
      id: "2",
      title: "Winning Speech",
      subtitle: "Karan Aujla",
      time: "7 min ago",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e024a7287c838cba6b00b15f085",
    },
    {
      id: "3",
      title: "Joota Japani",
      subtitle: "KR$NA",
      time: "1 hr ago",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02d045f5b403653ae1d59e46bb",
    },
    {
      id: "4",
      title: "Maniac",
      subtitle: "Yo Yo Honey Singh",
      time: "2 hr ago",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02c23fc5c23c494a83d14908d2",
    },
  ];

  const myPlaylists = [
    {
      id: "1",
      title: "Punjabi Rap Kings",
      subtitle: "38 songs",
      time: "2 hr 43 min",
      imageUrl: "https://i.scdn.co/image/ab67706f0000000241958ea71003a05cb3d7ccc3",
    },
    {
      id: "2",
      title: "Hindi Rap Riot",
      subtitle: "21 songs",
      time: "1 hr 4 min",
      imageUrl: "https://i.scdn.co/image/ab67706f00000002c1962a3eb36a5737406941b1",
    },
    {
      id: "3",
      title: "Desi Hip-Hop Fire",
      subtitle: "35 songs",
      time: "1 hr 56 min",
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=300&fit=crop",
    },
    {
      id: "4",
      title: "Street Rap Vibes",
      subtitle: "18 songs",
      time: "51 min",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02faff529514c334b9049dd112",
    },
  ];

  return (
    <div className="w-72 bg-black p-6 border-l border-gray-800 hidden lg:block h-screen flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
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