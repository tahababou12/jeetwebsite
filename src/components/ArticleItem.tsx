import React from 'react';

interface ArticleItemProps {
  date: string;
  title: string;
  tag: string;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ date, title, tag }) => {
  return (
    <div className="group">
      <div className="flex items-start">
        <div className="text-gray-500 text-xs mr-4 mt-1 group-hover:text-gray-400 transition-colors">{date}</div>
        <div>
          <h3 className="text-white text-sm font-medium mb-1 group-hover:text-gray-200 transition-colors">{title}</h3>
          <div className="inline-block bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded group-hover:bg-gray-700 group-hover:text-gray-300 transition-colors">{tag}</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
