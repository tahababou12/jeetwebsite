import React from 'react';

interface ProjectCardProps {
  title: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageUrl }) => {
  return (
    <div className="group">
      <div className="flex items-center mb-2">
        <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center mr-2 group-hover:bg-gray-600 transition-colors">
          <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-gray-300 transition-colors"></div>
        </div>
        <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{title}</span>
      </div>
      <div className="rounded-lg overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-32 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
