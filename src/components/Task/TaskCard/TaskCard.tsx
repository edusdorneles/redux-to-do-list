// Styles
import { TaskCardStyle } from "./styles";

// Icons
import { FaCheck, FaMinus, FaTimes } from "react-icons/fa";

const TaskCard: React.FC = () => {
  return (
    <TaskCardStyle>
      <div className="task-card__title">
        <p>Tarefas:</p>
      </div>

      <div className="task-card__task">
        <div className="task-card__task__text">
          <p className="task-card__task__text__title">Primeira tarefa!</p>

          <p className="task-card__task__text__description">
            Descrição da primeira tarefa!
          </p>
        </div>

        <div className="task-card__task__actions">
          <div className="task-card__task__actions--add">
            <FaCheck />
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
