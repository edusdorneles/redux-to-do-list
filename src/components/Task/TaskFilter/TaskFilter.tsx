// Styles
import { TaskFilterStyle } from "./styles";

const TaskFilter: React.FC = () => {
  return (
    <TaskFilterStyle>
      <div className="task-filter__title">
        <p>Filtros:</p>
      </div>

      <div className="task-filter__buttons">
        <button className="task-filter__buttons__actions">Mostrar tudo</button>

        <button className="task-filter__buttons__actions">
          Mostrar concluídas
        </button>

        <button className="task-filter__buttons__actions">
          Mostrar não concluídas
        </button>
      </div>
    </TaskFilterStyle>
  );
};

export default TaskFilter;
