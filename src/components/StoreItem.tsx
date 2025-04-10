import React from 'react';
import { Layout, Video, Image } from 'lucide-react';

interface StoreItemProps {
  title: string;
  description: string;
  price: string;
  icon: 'template' | 'video' | 'image';
}

const StoreItem: React.FC<StoreItemProps> = ({ title, description, price, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case 'template':
        return <Layout className="w-5 h-5" />;
      case 'video':
        return <Video className="w-5 h-5" />;
      case 'image':
        return <Image className="w-5 h-5" />;
      default:
        return <Layout className="w-5 h-5" />;
    }
  };

  return (
    <div className="flex items-center group">
      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gray-700 transition-colors">
        {getIcon()}
      </div>
      <div className="flex-1">
        <h3 className="text-white text-sm font-medium group-hover:text-gray-200 transition-colors">{title}</h3>
        <p className="text-gray-500 text-xs group-hover:text-gray-400 transition-colors">{description}</p>
      </div>
      <div className="text-white text-sm group-hover:text-gray-200 transition-colors">{price}</div>
    </div>
  );
};

export default StoreItem;
