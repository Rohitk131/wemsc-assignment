import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, Maximize2, Heart, List } from 'lucide-react';

const AUDIO_URL = "/Wavy.mp3";

const Player: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);
  const [isHovered, setIsHovered] = useState(false);
  const [isDraggingTimeline, setIsDraggingTimeline] = useState(false);
  const [isDraggingVolume, setIsDraggingVolume] = useState(false);
  const [showMobileVolume, setShowMobileVolume] = useState(false);

  // Initialize audioRef as null
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const volumeRef = useRef<HTMLDivElement>(null);

  // Create audio element only on client side
  useEffect(() => {
    audioRef.current = new Audio(AUDIO_URL);
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    const setAudioTime = () => {
      if (!isDraggingTimeline) {
        setCurrentTime(audio.currentTime);
      }
    };

    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, [isDraggingTimeline]);

  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    const playAudio = async () => {
      try {
        if (isPlaying) {
          await audio.play();
        } else {
          audio.pause();
        }
      } catch (error) {
        console.error("Error playing audio:", error);
        setIsPlaying(false);
      }
    };
    playAudio();
  }, [isPlaying]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume / 100;
  }, [volume]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  };

  const togglePlay = () => setIsPlaying(prev => !prev);

  const handleTimelineMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDraggingTimeline(true);
    updateTimelinePosition(e.clientX);
  };

  const handleTimelineMouseMove = (e: MouseEvent) => {
    if (isDraggingTimeline) {
      updateTimelinePosition(e.clientX);
    }
  };

  const handleTimelineMouseUp = () => {
    setIsDraggingTimeline(false);
    if (isPlaying) {
      // Ensure the audio plays after dragging
      audioRef.current?.play().catch(error => {
        console.error("Error resuming playback:", error);
        setIsPlaying(false); // Fallback to pause state if play fails
      });
    }
  };

  const updateTimelinePosition = (clientX: number) => {
    if (!timelineRef.current || !audioRef.current) return;

    const rect = timelineRef.current.getBoundingClientRect();
    const clickX = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const newTime = (clickX / rect.width) * duration;

    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  const handleVolumeMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDraggingVolume(true);
    updateVolumePosition(e.clientX);
  };

  const handleVolumeMouseMove = (e: MouseEvent) => {
    if (isDraggingVolume) {
      updateVolumePosition(e.clientX);
    }
  };

  const handleVolumeMouseUp = () => {
    setIsDraggingVolume(false);
    setShowMobileVolume(false);
  };

  const updateVolumePosition = (clientX: number) => {
    if (!volumeRef.current) return;

    const rect = volumeRef.current.getBoundingClientRect();
    const clickX = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const newVolume = (clickX / rect.width) * 100;
    setVolume(newVolume);
  };

  // Mobile volume handler
  const handleMobileVolumeTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDraggingVolume(true);
    updateMobileVolumePosition(e.touches[0].clientY);
  };

  

  const handleMobileVolumeTouchEnd = () => {
    setIsDraggingVolume(false);
    setShowMobileVolume(false);
  };

  const updateMobileVolumePosition = (clientY: number) => {
    if (!volumeRef.current) return;

    const rect = volumeRef.current.getBoundingClientRect();
    const clickY = Math.max(0, Math.min(clientY - rect.top, rect.height));
    const newVolume = 100 - (clickY / rect.height) * 100; // Inverted because it's vertical
    setVolume(newVolume);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      handleTimelineMouseMove(e);
      handleVolumeMouseMove(e);
    };

    const handleMouseUp = () => {
      handleTimelineMouseUp();
      handleVolumeMouseUp();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDraggingVolume) {
        updateMobileVolumePosition(e.touches[0].clientY);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleMobileVolumeTouchEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMobileVolumeTouchEnd);
    };
  }, [isDraggingTimeline, isDraggingVolume]);

  const skipForward = () => {
    if (!audioRef.current) return;
    const newTime = Math.min(audioRef.current.currentTime + 10, duration);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const skipBackward = () => {
    if (!audioRef.current) return;
    const newTime = Math.max(audioRef.current.currentTime - 10, 0);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="fixed bottom-0 left-0 right-0 h-20 rounded-t-2xl bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-gray-800/50 px-2 md:px-6 flex items-center shadow-lg z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Track Info */}
      <motion.div
        className="flex items-center w-1/4 min-w-[100px]"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <img
          src="https://i.scdn.co/image/ab67616d00004851e34f05599c4a42e1cbb1c251"
          alt="Current track"
          className="h-10 w-10 md:h-12 md:w-12 object-cover rounded-lg shadow-md"
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
        <div className="flex items-center ml-4 md:gap-3 gap-1 md:flex">
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
          className="flex items-center gap-2 md:gap-6"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="hidden md:block">
            <Shuffle size={18} className="text-gray-400 hover:text-white cursor-pointer" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} onClick={skipBackward}>
            <SkipBack className="text-gray-400 hover:text-white cursor-pointer w-4 h-4 md:w-[18px] md:h-[18px]" />
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center shadow-lg"
          >
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="pause"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <Pause className="w-4 h-4 md:w-5 md:h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="play"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <Play className="w-4 h-4 md:w-5 md:h-5 ml-0.5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} onClick={skipForward}>
            <SkipForward className="text-gray-400 hover:text-white cursor-pointer w-4 h-4 md:w-[18px] md:h-[18px]" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="hidden md:block">
            <Repeat size={18} className="text-gray-400 hover:text-white cursor-pointer" />
          </motion.div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-full max-w-xl flex items-center mt-2"
          animate={{ opacity: isHovered ? 1 : 0.7 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-[10px] md:text-xs text-gray-300 w-8 md:w-10 text-right">{formatTime(currentTime)}</span>
          <div
            ref={timelineRef}
            className="mx-2 md:mx-3 flex-1 group relative cursor-pointer"
            onMouseDown={handleTimelineMouseDown}
          >
            <motion.div
              className="h-1 bg-gray-700/50 rounded-full overflow-hidden"
              whileHover={{ height: 4 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                initial={false}
                animate={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </motion.div>
          </div>
          <span className="text-[10px] md:text-xs text-gray-300 w-8 md:w-10">{formatTime(duration)}</span>
        </motion.div>
      </div>

      {/* Volume & Maximize */}
      <motion.div
        className="w-1/4 min-w-[60px] flex items-center justify-end gap-2 md:gap-4 relative group"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center gap-2">
          <motion.div className="relative flex items-center gap-2">
            <Volume2
              className="text-gray-400 w-4 h-4 md:w-[18px] md:h-[18px] cursor-pointer"
              onClick={() => {
                setShowMobileVolume(prev => !prev); // Toggle mobile volume popup
                setVolume(volume === 0 ? 70 : 0);
              }}
            />
            {/* Desktop Volume Slider */}
            <motion.div
              ref={volumeRef}
              className="hidden md:block w-20 h-1.5 bg-gray-700/50 rounded-full overflow-hidden relative cursor-pointer"
              onMouseDown={handleVolumeMouseDown}
            >
              <motion.div
                className="absolute left-0 top-0 bottom-0 bg-blue-500 rounded-full"
                style={{ width: `${volume}%` }}
                animate={{ width: `${volume}%` }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
            {/* Mobile Volume Popup */}
            <AnimatePresence>
              {showMobileVolume && (
                <motion.div
                  className="md:hidden absolute bottom-full left-6 -translate-x-1/2 mb-2 p-2  bg-gray-900/95 rounded-lg shadow-lg z-50"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    ref={volumeRef}
                    className="h-24 w-2 bg-gray-700/50 rounded-full overflow-hidden relative cursor-pointer"
                    onTouchStart={handleMobileVolumeTouchStart}
                  >
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 bg-blue-500 rounded-full"
                      style={{ height: `${volume}%` }}
                      animate={{ height: `${volume}%` }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="hidden md:block">
          <Maximize2 size={18} className="text-gray-400 hover:text-white cursor-pointer" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Player;