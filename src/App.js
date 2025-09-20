import { useDispatch } from "react-redux";
import { addTask } from "./redux/action";
import TaskList from "./components/TaskList/TaskList";

const App = () => {
  return (
    <div className="App">
      <form>
        <h1>Task List</h1>
        <input type="text" />
        <button>Add</button>
      </form>

      <TaskList />
    </div>
  );
};

export default App;
