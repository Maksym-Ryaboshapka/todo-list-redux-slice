const TaskItem = ({ task }) => {
  return (
    <li key={task.id}>
      <p>{task.text}</p>
      <button>Remove</button>
    </li>
  );
};

export default TaskItem;
