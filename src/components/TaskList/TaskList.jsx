import TaskItem from "../TaskItem/TaskItem";
import { useSelector } from "react-redux";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <ul>
      {tasks.map((t) => {
        return <TaskItem task={t}></TaskItem>;
      })}
    </ul>
  );
};

export default TaskList;
