"use client";
import { useEffect, useState } from "react";
import TasksContext from "./TasksContext";

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTasks() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("/api/tasks");
        if (!response.ok) {
          throw new Error(
            `HTTP error! status: ${response.status} ${response.statusText}`
          );
        }
        const taskData = await response.json();
        setTasks(taskData.tasks);
        console.log(
          "TasksProvider -value of state tasks after setting:",
          taskData.tasks
        );
      } catch (e) {
        setError(e);
        console.error("Error fetching tasks:", e);
      } finally {
        setLoading(false);
      }
    }
    fetchTasks();
    console.log(tasks);
  }, []);

  const toggleTask = async (_id) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500)); // Short delay, 0.5 seconds
    setTasks((prev) =>
      prev.map((task) =>
        task._id === _id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const contextValue = { tasks, addTask, removeTask, toggleTask };
  return (
    <TasksContext.Provider value={contextValue}>
      {children}
    </TasksContext.Provider>
  );
};

export { TasksProvider, TasksContext };
