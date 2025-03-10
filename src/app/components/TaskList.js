"use client";
import React from "react";
import TaskItem from "./TaskItem";
import useTaskContext from "../contexts/useTaskContext";

export default function TodayPage() {
  const contextValue = useTaskContext(); // Get the *entire* context value object
  const tasks = contextValue.tasks;
  const { error, loading, toggleTask } = useTaskContext();

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Error loading tasks: {error.message}</p>;
  }
  console.log(tasks);
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Task list</h1>
      {console.log("Value of tasks before condition:", tasks)}{" "}
      {/* Correct JSX: {} for console.log */}
      {console.log(
        "Is tasks an array? Array.isArray(tasks):",
        Array.isArray(tasks)
      )}{" "}
      {/* Correct JSX: {} for console.log */}
      {console.log(
        "Is tasks.length > 0? tasks.length > 0:",
        tasks && tasks.length > 0
      )}{" "}
      {/* Correct JSX: {} for console.log */}
      {console.log(
        "Combined condition (Array.isArray && length > 0):",
        Array.isArray(tasks) && tasks.length > 0
      )}{" "}
      {/* Correct JSX: {} for console.log */}
      <ul>
        {Array.isArray(tasks) &&
          tasks.length > 0 &&
          (() => {
            // Immediately invoked function expression
            console.log("Tasks before map:", tasks); // Log the tasks array
            return tasks.map((task) => (
              <TaskItem
                key={task._id}
                text={task.task}
                isCompleted={task.completed}
                isImportant={task.important}
                onToggleComplete={() => toggleTask(task._id)}
              />
            ));
          })()}
      </ul>
    </div>
  );
}
