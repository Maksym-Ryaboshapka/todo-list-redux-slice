import { useDispatch } from "react-redux";
// import { addTask } from "./redux/task/action";
import {addTask} from "./redux/taksSlice";
import { v4 as uuid } from "uuid";
import TaskList from "./components/TaskList/TaskList";

const App = () => {
  const dispatch = useDispatch();
  
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const taskText = form.elements.task.value;

    const task = {
      id: uuid(),
      text: taskText,
      done: false,
    };

    dispatch(addTask(task));

    form.reset();
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <h1>Task List</h1>
        <input type="text" name="task" />
        <button type="submit">Add</button>
      </form>

      <TaskList />
    </div>
  );
};

export default App;
