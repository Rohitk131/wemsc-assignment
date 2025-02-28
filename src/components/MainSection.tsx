import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

const todaysHits = [
  { id: 1, title: "Limitless", description: "From Can't Rush Greatness - Central Cee", image: "https://i.scdn.co/image/ab67616d0000b2735609b89507db8644ff7e1e7a" },
  { id: 2, title: "Tauba Tauba", description: "From Bad Newz - Karan Aujla", image: "https://i.scdn.co/image/ab67616d0000b27344d3ba1bb25084d20dc66d52" },
  { id: 3, title: "Mere Dholna 3.0", description: "From Bhool Bhulaiyaa - Pritam", image: "https://i.scdn.co/image/ab67616d0000b2734cfe2d352da6d7910961377f" },
  { id: 4, title: "Chal Kudiye", description: "Diljit Dosanjh ft. Badshah", image: "https://i.scdn.co/image/ab67616d0000b273bbeee746c016a99ef1662b4b" },
];

const newReleases = [
  { id: 1, title: "Khoobsurat", artist: "Vishal Mishra", image: "https://i.scdn.co/image/ab67616d0000b273dd5eaafc5f4075139d7f34b4" },
  { id: 2, title: "Sajni", artist: "Arijit Singh", image: "https://i.scdn.co/image/ab67616d0000b273d5f4378b1ffc9119fdc7306d" },
  { id: 3, title: "Millionaire", artist: "Yo Yo Honey Singh", image: "https://i.scdn.co/image/ab67616d0000b273aad3f4b601ae8763b3fc4e88" },
  { id: 4, title: "Jo Tum Mere Ho", artist: "Anuv Jain", image: "https://i.scdn.co/image/ab67616d0000b27372a77d038887cdc425f5ee55" },
];
const MainSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex-1 overflow-y-scroll p-4 md:p-8 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white"
    >
    
      <motion.div
        className="flex items-center gap-4 mb-8"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <ChevronLeft className="cursor-pointer text-gray-300 hover:text-white" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <ChevronRight className="cursor-pointer text-gray-300 hover:text-white" />
        </motion.div>
        <div className="relative flex-1 max-w-md hidden md:block">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <motion.input
            whileFocus={{ scale: 1.02, boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)' }}
            type="text"
            placeholder="Search for artists, songs, or albums"
            className="w-full bg-gray-800/50 backdrop-blur-md text-gray-200 rounded-full py-3 pl-12 pr-4 border border-gray-700/50 focus:outline-none focus:border-blue-500 transition-all duration-300"
          />
        </div>
      </motion.div>

  
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative  rounded-2xl p-6 mb-10 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <img src="/cover.avif" className='absolute inset-0'/>
       
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm font-semibold uppercase tracking-wider text-pink-200"
            >
              New Alumn
            </motion.span>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight"
            >
              KOD 
            </motion.h2>
            <p className="text-gray-200 font-medium mb-4">J. COLE</p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#3b82f6' }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white py-2 px-6 rounded-full font-semibold uppercase tracking-wide"
            >
              Listen Now
            </motion.button>
          </div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, type: 'spring', stiffness: 100 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end "
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/d/d3/JColeKOD.jpg"
              alt="TREASURE Album"
              className="h-48 md:h-56 object-contain drop-shadow-2xl rounded-2xl border-8 border-gray-100/30"
            />
          </motion.div>
        </div>
      </motion.div>

  
      <Section title="Hello, Rohit" items={todaysHits} />

      <Section title="New Releases for You" items={newReleases} />
    </motion.div>
  );
};

const Section = ({ title, items }) => (
  <motion.div
    className="mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
  >
    <div className="flex justify-between items-center mb-6">
      <motion.h2
        whileHover={{ x: 5 }}
        className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
      >
        {title}
      </motion.h2>
      <motion.button
        whileHover={{ color: '#fff', x: 3 }}
        className="text-sm text-gray-400 transition-colors"
      >
        See All
      </motion.button>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <AnimatePresence>
        {items.map((item) => (
          <motion.div
            key={item.id}
            layout
            whileHover={{ scale: 1.05, rotate: 0 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800/70 backdrop-blur-lg rounded-xl overflow-hidden cursor-pointer shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full aspect-square object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-sm text-white truncate">{item.title}</h3>
              <p className="text-gray-400 text-xs mt-1">{item.description || item.artist}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  </motion.div>
);

export default MainSection;