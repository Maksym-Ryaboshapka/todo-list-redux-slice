import TaskItem from "../TaskItem/TaskItem";
import {useSelector, useDispatch} from "react-redux";
import {filterTasks} from "../../redux/filter/action";

const TaskList = () => {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector(state => state.filter);

  const onInput = (e) => {
    const keyword = e.currentTarget.value;
    dispatch(filterTasks(keyword));
  }

  return (
      <>
        <input type="text" placeholder="Enter a keyword" onInput={onInput}/>

        <ul>
          {tasks.map((t) => {
            if (t.text.includes(filter)) {
              return <TaskItem key={t.id} task={t}/>;
            }

            return null;
          })}
        </ul>
      </>
  );
};

export default TaskList;
