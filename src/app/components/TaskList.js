"use client";
import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import useTaskContext from "../contexts/useTaskContext";

export default function TodayPage() {
  const [tasksList, setTasksList] = useState();
  const {tasks, addTask, removeTask ,toggleTask}=useTaskContext();

  useEffect(() => {
   setTasksList(tasks);
  }, [])
  

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Task list</h1>
      <ul>
        {tasks && tasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            isCompleted={task.completed}
            onToggleComplete={() => toggleTask(task.id)}
          >
            {/* Optional extra icons or actions can go here */}
          </TaskItem>
        ))}
      </ul>
    </div>
  );
}
