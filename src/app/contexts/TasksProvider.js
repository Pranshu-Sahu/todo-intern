"use client"
import React, { useState } from 'react';
import TasksContext from './TasksContext';
import { v4 as uuidv4 } from "uuid";


const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([
        { id: uuidv4(), title: "Buy groceries", completed: false },
        { id: uuidv4(), title: "Finish project report", completed: false },
        { id: uuidv4(), title: "Call the bank", completed: true },
      ]);

      const toggleTask = (id) => {
          setTasks((prev) =>
            prev.map((task) =>
              task.id === id ? { ...task, completed: !task.completed } : task
            )
          );
        };

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const removeTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <TasksContext.Provider value={{ tasks, addTask, removeTask,toggleTask }}>
            {children}
        </TasksContext.Provider>
    );
};

export { TasksProvider, TasksContext };