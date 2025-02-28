import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

const todaysHits = [
  { id: 1, title: "Aaj Ki Raat", description: "From Stree 2 - Sachin-Jigar", image: "/api/placeholder/200/200" },
  { id: 2, title: "Tauba Tauba", description: "From Bad Newz - Karan Aujla", image: "/api/placeholder/200/200" },
  { id: 3, title: "Mere Dholna 3.0", description: "From Bhool Bhulaiyaa 3 - Sonu Nigam", image: "/api/placeholder/200/200" },
  { id: 4, title: "Chal Kudiye", description: "Diljit Dosanjh ft. Badshah", image: "/api/placeholder/200/200" },
];

const newReleases = [
  { id: 1, title: "Khoobsurat", artist: "Vishal Mishra", image: "/api/placeholder/150/150" },
  { id: 2, title: "Sajni", artist: "Arijit Singh", image: "/api/placeholder/150/150" },
  { id: 3, title: "Millionaire", artist: "Yo Yo Honey Singh", image: "/api/placeholder/150/150" },
  { id: 4, title: "Jo Tum Mere Ho", artist: "Anuv Jain", image: "/api/placeholder/150/150" },
];
const MainSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex-1 overflow-y-scroll p-4 md:p-8 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white"
    >
      {/* Navigation Controls */}
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

      {/* Featured Album Banner */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-2xl p-6 mb-10 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-0" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm font-semibold uppercase tracking-wider text-pink-200"
            >
              New Album
            </motion.span>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight"
            >
              THE SECOND STEP:<br />CHAPTER ONE
            </motion.h2>
            <p className="text-gray-200 font-medium mb-4">TREASURE</p>
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
            className="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            <img
              src="/api/placeholder/300/300"
              alt="TREASURE Album"
              className="h-48 md:h-56 object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Hello User Section */}
      <Section title="Hello, Woilon" items={todaysHits} />

      {/* New Releases Section */}
      <Section title="New Releases for You" items={newReleases} />
    </motion.div>
  );
};

// Reusable Section Component
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
            whileHover={{ scale: 1.05, rotate: 1 }}
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