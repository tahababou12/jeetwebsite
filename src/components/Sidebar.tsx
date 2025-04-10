import React, { useState } from 'react';
import { Home, Command, Pen, Briefcase, Layers, User, Mail, Search } from 'lucide-react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  count?: number;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active = false, count }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className="relative flex justify-center py-4 group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className={`w-10 h-10 flex items-center justify-center rounded-md ${active ? 'text-white' : 'text-gray-500 hover:text-gray-300'} transition-colors`}>
        {icon}
      </div>
      
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute left-16 bg-[#1e1e1e] text-gray-300 px-3 py-1.5 rounded-md text-sm flex items-center z-10 whitespace-nowrap">
          {label}
          {count !== undefined && (
            <span className="ml-2 bg-[#2a2a2a] px-1.5 py-0.5 rounded text-xs">
              {count}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="w-16 bg-[#161616] border-r border-[#222222] flex flex-col items-center py-4 fixed h-full">
      <SidebarItem icon={<Home size={20} />} label="Home" active />
      <SidebarItem icon={<Command size={20} />} label="Work" count={2} />
      <SidebarItem icon={<Pen size={20} />} label="Writing" />
      <SidebarItem icon={<Briefcase size={20} />} label="Store" />
      <SidebarItem icon={<Layers size={20} />} label="Projects" />
      <SidebarItem icon={<User size={20} />} label="About" />
      <SidebarItem icon={<Mail size={20} />} label="Contact" />
      <SidebarItem icon={<Search size={20} />} label="Search" />
    </div>
  );
};

export default Sidebar;
