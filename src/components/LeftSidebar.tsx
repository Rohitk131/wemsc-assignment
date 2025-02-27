import React from 'react'
import { Heart, Search, Home, PlusSquare, Menu, ChevronLeft, ChevronRight, Library, Download, Star, File } from 'lucide-react'

const playlists = [
    { name: "Discover Weekly", id: 1 },
    { name: "Release Radar", id: 2 },
    { name: "Your Top Songs 2024", id: 3 },
    { name: "Chill Vibes", id: 4 }
];
function LeftSidebar() {
    return (
        <div>
            <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-xl font-bold">
                    W
                </div>
                <div className="ml-4">
                    <Menu className="cursor-pointer" />
                </div>
            </div>

            <div className="flex items-center mb-4 space-x-2">
                <ChevronLeft className="cursor-pointer" />
                <ChevronRight className="cursor-pointer" />
            </div>

            <div className="mb-8">
                <p className="text-gray-400 text-xs mb-2">FEATURES</p>
                <div className="flex items-center py-2 text-blue-400 font-medium">
                    <Home className="mr-3" size={20} />
                    <span>Home</span>
                </div>
                <div className="flex items-center py-2 text-gray-400">
                    <Search className="mr-3" size={20} />
                    <span>Discover</span>
                </div>
                <div className="flex items-center py-2 text-gray-400">
                    <Library className="mr-3" size={20} />
                    <span>Collections</span>
                </div>
            </div>

            <div>
                <p className="text-gray-400 text-xs mb-2">LIBRARY</p>
                <div className="flex items-center py-2 text-gray-400">
                    <Download className="mr-3" size={20} />
                    <span>Download</span>
                </div>
                <div className="flex items-center py-2 text-gray-400">
                    <Star className="mr-3" size={20} />
                    <span>Favourites</span>
                </div>
                <div className="flex items-center py-2 text-gray-400">
                    <File className="mr-3" size={20} />
                    <span>Local Files</span>
                </div>
            </div>
        </div>

    )
}

export default LeftSidebar