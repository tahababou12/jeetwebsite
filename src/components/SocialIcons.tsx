import React from 'react';
import { Twitter, Github, Globe, Phone, Mail, Instagram } from 'lucide-react';

const SocialIcons: React.FC = () => {
  return (
    <div className="flex space-x-6 mb-8">
      <a href="#" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110 duration-200">
        <Twitter className="w-5 h-5" />
      </a>
      <a href="#" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110 duration-200">
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="4"></circle>
        </svg>
      </a>
      <a href="#" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110 duration-200">
        <Github className="w-5 h-5" />
      </a>
      <a href="#" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110 duration-200">
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </a>
      <a href="#" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110 duration-200">
        <Mail className="w-5 h-5" />
      </a>
      <a href="#" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110 duration-200">
        <Globe className="w-5 h-5" />
      </a>
      <a href="#" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110 duration-200">
        <Instagram className="w-5 h-5" />
      </a>
    </div>
  );
};

export default SocialIcons;
