import { useState } from "react";

// Redux
import { filterTasks } from "store/Filter.store";
import { useDispatch } from "react-redux";

// Styles
import { TaskFilterStyle } from "./styles";

const TaskFilter: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const dispatch = useDispatch();

  // Alterar filtro para "Mostrar tudo".
  const handleFilterAll = () => {
    dispatch(filterTasks(null));
  };

  // Alterar filtro para "Mostrar concluídas".
  const handleFilterCompleted = () => {
    dispatch(filterTasks(true));
  };

  // Alterar filtro para "Mostrar não concluídas".
  const handleFilterNotCompleted = () => {
    dispatch(filterTasks(false));
  };

  return (
    <TaskFilterStyle>
      <div className="task-filter__title">
        <p>Filtros:</p>
      </div>

      <div className="task-filter__buttons">
        <button
          className={
            activeFilter === "completed"
              ? "task-filter__buttons__actions active"
              : "task-filter__buttons__actions"
          }
          onClick={() => {
            handleFilterCompleted();
            setActiveFilter("completed");
          }}
        >
          Mostrar concluídas
        </button>

        <button
          className={
            activeFilter === "all"
              ? "task-filter__buttons__actions active"
              : "task-filter__buttons__actions"
          }
          onClick={() => {
            handleFilterAll();
            setActiveFilter("all");
          }}
        >
          Mostrar tudo
        </button>

        <button
          className={
            activeFilter === "not-completed"
              ? "task-filter__buttons__actions active"
              : "task-filter__buttons__actions"
          }
          onClick={() => {
            handleFilterNotCompleted();
            setActiveFilter("not-completed");
          }}
        >
          Mostrar não concluídas
        </button>
      </div>
    </TaskFilterStyle>
  );
};

export default TaskFilter;
