import React from 'react'

function RightSidebar() {
    return (

        <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">TL</span>
                </div>
                <span className="ml-2 font-medium custom-font">Timothy Luca</span>
            </div>
            <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700">
                    <span className="text-sm">⬇</span>
                </div>
            </div>
        </div>

    )
}

export default RightSidebar