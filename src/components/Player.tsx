import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, Maximize2, Heart, List } from 'lucide-react';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(180); // 3 minutes in seconds
  const [volume, setVolume] = useState(70);
  const [isHovered, setIsHovered] = useState(false);

  // Simulating time update when playing
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  // Format time in mm:ss
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  };

  // Toggle play/pause
  const togglePlay = () => setIsPlaying(!isPlaying);

  // Handle progress bar click
  const handleProgressClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * duration;
    setCurrentTime(newTime);
  };

  // Handle volume change
  const handleVolumeClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newVolume = Math.min(Math.max((clickX / width) * 100, 0), 100);
    setVolume(newVolume);
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-gray-800/50 px-6 flex items-center shadow-lg z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Track Info */}
      <motion.div
        className="flex items-center w-1/4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <img
          src="/api/placeholder/50/50"
          alt="Current track"
          className="h-12 w-12 object-cover rounded-lg shadow-md"
        />
        <div className="ml-4 hidden md:block">
          <motion.div
            className="text-sm font-semibold text-white truncate max-w-[150px]"
            whileHover={{ color: '#3b82f6' }}
          >
            Wavy
          </motion.div>
          <div className="text-xs text-gray-400">Karan Aujla</div>
        </div>
        <div className="flex items-center ml-4 gap-3">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Heart size={18} className="text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <List size={18} className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
          </motion.div>
        </div>
      </motion.div>

      {/* Playback Controls */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <motion.div
          className="flex items-center gap-6"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Shuffle size={18} className="text-gray-400 hover:text-white cursor-pointer" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <SkipBack size={18} className="text-gray-400 hover:text-white cursor-pointer" />
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center shadow-lg"
          >
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="pause"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <Pause size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="play"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <Play size={20} className="ml-0.5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <SkipForward size={18} className="text-gray-400 hover:text-white cursor-pointer" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Repeat size={18} className="text-gray-400 hover:text-white cursor-pointer" />
          </motion.div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-full max-w-xl flex items-center mt-2"
          animate={{ opacity: isHovered ? 1 : 0.7 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-xs text-gray-300 w-10 text-right">{formatTime(currentTime)}</span>
          <div className="mx-3 flex-1 group relative" onClick={handleProgressClick}>
            <motion.div
              className="h-1 bg-gray-700/50 rounded-full overflow-hidden"
              whileHover={{ height: 4 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                style={{ width: `${(currentTime / duration) * 100}%` }}
                initial={false}
                animate={{ width: `${(currentTime / duration) * 100}%` }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </motion.div>
          </div>
          <span className="text-xs text-gray-300 w-10">{formatTime(duration)}</span>
        </motion.div>
      </div>

      {/* Volume & Maximize */}
      <motion.div
        className="w-1/4 flex items-center justify-end gap-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Volume2 size={18} className="text-gray-400" />
          </motion.div>
          <motion.div
            className="w-24 hidden md:block relative"
            onClick={handleVolumeClick}
            whileHover={{ scale: 1.05 }}
          >
            <div className="h-1 bg-gray-700/50 rounded-full overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 bottom-0 bg-blue-500 rounded-full"
                style={{ width: `${volume}%` }}
                animate={{ width: `${volume}%` }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <Maximize2 size={18} className="text-gray-400 hover:text-white cursor-pointer" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Player;