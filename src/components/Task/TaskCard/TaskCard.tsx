// Styles
import { TaskCardStyle } from "./styles";

// Icons
import { FaCheck, FaMinus, FaTimes } from "react-icons/fa";

// Interfaces
interface IProps {
  task: Task;
}

const TaskCard: React.FC<IProps> = ({ task }) => {
  return (
    <TaskCardStyle>
      <div className="task-card__task">
        <div className="task-card__task__text">
          <p className="task-card__task__text__title">{task.title}</p>

          <p className="task-card__task__text__description">
            {task.description}
          </p>
        </div>

        <div className="task-card__task__actions">
          <div className="task-card__task__actions--add">
            {task.completed ? <FaMinus /> : <FaCheck />}
          </div>

          <div className="task-card__task__actions--remove">
            <FaTimes />
          </div>
        </div>
      </div>
    </TaskCardStyle>
  );
};

export default TaskCard;
