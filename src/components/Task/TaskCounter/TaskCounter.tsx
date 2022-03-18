// Redux
import { useSelector } from "react-redux";
import { RootState } from "store/storeConfig";

// Styles
import { TaskCounterStyle } from "./styles";

const TaskCounter: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasksReducer);

  // Filtro com tarefas concluídas.
  const completedTasks = tasks.filter((task: Task) => task.completed === true);

  // Filtro com tarefas não concluídas.
  const notCompletedTasks = tasks.filter(
    (task: Task) => task.completed === false
  );

  return (
    <TaskCounterStyle>
      <div className="task-counter">
        <p className="task-counter--completed">
          Concluídas: <span>{completedTasks.length}</span>
        </p>
      </div>

      <div className="task-counter">
        <p className="task-counter--total">
          Total: <span>{tasks.length}</span>
        </p>
      </div>

      <div className="task-counter">
        <p className="task-counter--not-completed">
          Não concluídas: <span>{notCompletedTasks.length}</span>
        </p>
      </div>
    </TaskCounterStyle>
  );
};

export default TaskCounter;
