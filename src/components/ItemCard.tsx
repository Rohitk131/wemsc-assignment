import React from 'react'

interface ItemCardProps {
  title: string;
  subtitle: string;
  time: string;
  imageUrl: string;

}

const ItemCard: React.FC<ItemCardProps> = ({ title, subtitle, time, imageUrl}) => (
    <div className="flex items-center group cursor-pointer hover:bg-gray-900 rounded p-1 transition-colors">
      <div className="w-10 h-10 bg-gray-800 rounded flex-shrink-0 overflow-hidden">
        <img src={imageUrl}></img>
      </div>
      <div className="ml-3 flex-grow">
        <p className="text-xs text-white truncate">{title}</p>
        <p className="text-xs text-gray-400 truncate">{subtitle}</p>
      </div>
      <span className="text-xs text-gray-500 ml-2">{time}</span>
    </div>
  );
  
export default ItemCard