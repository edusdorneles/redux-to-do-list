// Redux
import { useDispatch } from "react-redux";
import { completeTask, deleteTask, uncompleteTask } from "store/Tasks.store";

// Styles
import { TaskCardStyle } from "./styles";

// Icons
import { FaCheck, FaMinus, FaTimes, FaPen } from "react-icons/fa";

// Interfaces
interface IProps {
  task: Task;
}

const TaskCard: React.FC<IProps> = ({ task }) => {
  const dispatch = useDispatch();

  const handleCompleteTask = () => {
    dispatch(completeTask(task));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(task));
  };

  const handleUncompleteTask = () => {
    dispatch(uncompleteTask(task));
  };

  return (
    <TaskCardStyle>
      <div
        className={
          task.completed
            ? "task-card__task task-card__task--completed"
            : "task-card__task"
        }
      >
        <div className="task-card__task__text">
          <p
            className={
              task.completed
                ? "task-card__task__text__title task-card__task__text__title--completed"
                : "task-card__task__text__title"
            }
          >
            {task.title}
          </p>

          <p
            className={
              task.completed
                ? "task-card__task__text__description task-card__task__text__description--completed"
                : "task-card__task__text__description"
            }
          >
            {task.description}
          </p>
        </div>

        <div className="task-card__task__actions">
          {task.completed ? (
            <button
              className="task-card__task__actions--remove"
              onClick={() => {
                handleUncompleteTask();
              }}
            >
              <FaMinus />
            </button>
          ) : (
            <button
              className="task-card__task__actions--add"
              onClick={() => {
                handleCompleteTask();
              }}
            >
              <FaCheck />
            </button>
          )}

          <button className="task-card__task__actions--add">
            <FaPen />
          </button>

          <button
            className="task-card__task__actions--remove"
            onClick={() => {
              handleDeleteTask();
            }}
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </TaskCardStyle>
  );
};

export default TaskCard;
