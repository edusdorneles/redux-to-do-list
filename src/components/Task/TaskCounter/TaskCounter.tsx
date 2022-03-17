// Styles
import { TaskCounterStyle } from "./styles";

const TaskCounter: React.FC = () => {
  return (
    <TaskCounterStyle>
      <div className="task-counter">
        <p className="task-counter--completed">
          Concluídas: <span>0</span>
        </p>
      </div>

      <div className="task-counter">
        <p className="task-counter--not-completed">
          Não concluídas: <span>0</span>
        </p>
      </div>
    </TaskCounterStyle>
  );
};

export default TaskCounter;
