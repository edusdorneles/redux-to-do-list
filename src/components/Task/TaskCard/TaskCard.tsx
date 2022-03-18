import React, { useState } from "react";
import Modal from "components/Modal/Modal";

// Redux
import { useDispatch } from "react-redux";
import {
  completeTask,
  deleteTask,
  uncompleteTask,
  editTask
} from "store/Tasks.store";

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
  const [modalActive, setModalActive] = useState(false);

  // States para edição das tasks
  const [taskTitle, setTaskTitle] = useState(task.title);
  const [taskDescription, setTaskDescription] = useState(task.description);

  // Dispatch para completar task.
  const handleCompleteTask = () => {
    dispatch(completeTask(task));
  };

  // // Dispatch para desfazer task.
  const handleUncompleteTask = () => {
    dispatch(uncompleteTask(task));
  };

  // Dispatch para deletar task.
  const handleDeleteTask = () => {
    dispatch(deleteTask(task));
  };

  // // Dispatch para editar task.
  const handleEditTask = () => {
    if (taskTitle) {
      const editedTask = {
        id: task.id,
        title: taskTitle,
        description: taskDescription,
        completed: task.completed
      };

      dispatch(editTask(editedTask));

      // Fechar modal.
      setModalActive(false);
    } else {
      alert("Insira pelo menos o título da tarefa!");
    }
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

          <button
            className="task-card__task__actions--add"
            onClick={() => {
              setModalActive(true);
            }}
          >
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

      <Modal
        title="Editar tarefa"
        modalActive={modalActive}
        setModalActive={setModalActive}
      >
        <input
          type="text"
          placeholder="Insira o título da sua tarefa!"
          value={taskTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTaskTitle(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Insira a descrição da sua tarefa!"
          value={taskDescription}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTaskDescription(e.target.value);
          }}
        />

        <button
          onClick={() => {
            handleEditTask();
          }}
        >
          Editar
        </button>
      </Modal>
    </TaskCardStyle>
  );
};

export default TaskCard;
