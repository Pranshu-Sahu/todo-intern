// src/app/components/TaskItem.js
import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

const TaskItem = ({ title, isCompleted, onToggleComplete, children }) => {
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
        <span>{title}</span>
      </div>
      <div className="flex space-x-2">
        {children}
      </div>
    </li>
  );
};

export default TaskItem;
