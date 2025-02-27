import React, { useState } from 'react';
import { Home, ChevronLeft, ChevronRight, Download, Star, File, Compass } from 'lucide-react';
import Playlist01Icon from '../../public/Icons/playlistIcon';

import { motion, AnimatePresence } from 'framer-motion';



function LeftSidebar() {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };
    const sidebarVariants = {
        expanded: { width: "14rem", transition: { duration: 0.4, ease: "easeInOut" } },
        collapsed: { width: "5.5rem", transition: { duration: 0.4, ease: "easeInOut" } }
    };

    const textVariants = {
        expanded: { opacity: 1, x: 0, display: "block", transition: { duration: 0.2 } },
        collapsed: { opacity: 0, x: -10, transitionEnd: { display: "none" }, transition: { duration: 0.2 } }
    };

    const navItems = [
        { title: "Home", icon: <Home size={22} />, active: true, section: "FEATURES" },
        { title: "Discover", icon: <Compass size={22} />, active: false, section: "FEATURES" },
        { title: "Collections", icon: <Playlist01Icon />, active: false, section: "FEATURES" },
        { title: "Download", icon: <Download size={22} />, active: false, section: "LIBRARY" },
        { title: "Favourites", icon: <Star size={22} />, active: false, section: "LIBRARY" },
        { title: "Local Files", icon: <File size={22} />, active: false, section: "LIBRARY" },
    ];


    const headerVariants = {
        expanded: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.1,
                duration: 0.2
            }
        },
        collapsed: {
            opacity: 0,
            x: -10,
            transition: {
                duration: 0.1
            }
        }
    };

    const iconContainerVariants = {
        expanded: {
            width: "auto",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        collapsed: {
            width: "300%",
            display: "flex",
            justifyContent: "center",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        }
    };

  

    return (
        <motion.div
            className="bg-black p-6 hidden md:flex flex-col relative overflow-hidden "
            variants={sidebarVariants}
            initial="expanded"
            animate={isExpanded ? "expanded" : "collapsed"}
        >
         
            <div className="flex items-center mb-8 gap-3">
                <motion.img src='main-logo.svg' className='w-10 h-10' animate={{ scale: isExpanded ? 1 : 1.1 }} />
                <motion.h1 className='font-bold text-2xl' variants={textVariants}>{isExpanded && "Wemsc"}</motion.h1>
            </div>

        
            <div className="flex flex-col gap-8">
                {["FEATURES", "LIBRARY"].map((section) => (
                    <div key={section} className="flex flex-col">
                        <motion.p
                            className="text-gray-400 text-xs mb-2"
                            variants={headerVariants}
                            initial="expanded"
                            animate={isExpanded ? "expanded" : "collapsed"}
                        >
                            {section}
                        </motion.p>

                        {navItems
                            .filter(item => item.section === section)
                            .map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`flex items-center py-2.5 rounded-md ${item.active ? "text-blue-400 font-medium" : "text-gray-400"} hover:bg-gray-900 hover:bg-opacity-50 px-2 cursor-pointer group`}
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                                >
                                    <motion.div
                                        className="mr-3"
                                        variants={iconContainerVariants}
                                        animate={isExpanded ? "expanded" : "collapsed"}
                                    >
                                        {item.icon}
                                    </motion.div>
                                    <motion.span
                                        variants={textVariants}
                                        initial="expanded"
                                        animate={isExpanded ? "expanded" : "collapsed"}
                                    >
                                        {item.title}
                                    </motion.span>
                                </motion.div>
                            ))}
                    </div>
                ))}
            </div>

            {/* Toggle button */}
            <motion.div
                className="absolute right-[-1.8rem] top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition border border-gray-600 shadow-lg z-10"
                onClick={toggleSidebar}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isExpanded ? "expanded" : "collapsed"}
                        initial={{ opacity: 0, rotate: isExpanded ? -90 : 90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: isExpanded ? 90 : -90 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isExpanded ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}

export default LeftSidebar;