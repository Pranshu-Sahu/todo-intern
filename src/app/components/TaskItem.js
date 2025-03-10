import React from 'react';
import { CheckCircle, Circle,Star } from 'lucide-react';

const TaskItem = ({ text, isCompleted, onToggleComplete ,isImportant}) => {
  return (
    <li
      className={`flex items-center justify-between p-2 rounded hover:bg-gray-50 cursor-pointer ${
        isCompleted ? 'text-gray-500 line-through' : 'text-lg'
      }`}
      onClick={onToggleComplete}
    >
      <div className="flex items-center">
        {isCompleted ? (
          <CheckCircle className="text-green-500 mr-2" />
        ) : (
          <Circle className="text-gray-400 mr-2" />
        )}
        <span>{text}</span> 
      </div>
      <div className="flex items-center">
        {isImportant && <Star className="text-yellow-500" />} 
      </div>
    </li>
  );
};

export default TaskItem;
