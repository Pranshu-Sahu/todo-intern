
import TaskList from "./components/TaskList"; // Direct import from components
import { TasksProvider } from "./contexts/TasksProvider";

export default function Home() {
  return (
    <div className="border-4 border-amber-800 min-h-screen">
      <TasksProvider>
      <TaskList/>
      </TasksProvider>
    </div>
  );
}
