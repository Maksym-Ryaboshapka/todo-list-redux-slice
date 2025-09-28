import { useDispatch } from "react-redux";
import { toggleTask, removeTask } from "../../redux/task/action";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTask(task.id));
  };

  const handleToggle = (e) => {
    const isCheck = e.currentTarget.checked;
    const changedTask = { id: task.id, text: task.text, done: isCheck };

    dispatch(toggleTask(changedTask));
  };

  return (
    <li>
      <p
        style={{
          textDecoration: task.done ? "line-through" : "none",
        }}
      >
        {task.text}
      </p>
      <input type="checkbox" onChange={handleToggle} />
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
};

export default TaskItem;
