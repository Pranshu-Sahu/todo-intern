import { useContext } from "react";
import TasksContext from "./TasksContext";

function useTaskContext() {
  const context = useContext(TasksContext);
  return context;
}
export default useTaskContext;
