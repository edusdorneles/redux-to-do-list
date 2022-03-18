import React, { useState } from "react";

// Redux
import { useDispatch } from "react-redux";
import { addNewTask } from "store/Tasks.store";

// Styles
import { AddTaskStyle } from "./styles";

const AddTask: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const dispatch = useDispatch();

  // Função para checar se o usuário inseriu pele menos o título da tarefa.
  const handleAddNewTask = () => {
    if (taskTitle) {
      const task = {
        title: taskTitle,
        description: taskDescription
      };

      dispatch(addNewTask(task));

      // Reset dos states
      setTaskTitle("");
      setTaskDescription("");
    } else {
      alert("Insira pelo menos o título da tarefa!");
    }
  };

  return (
    <AddTaskStyle>
      <div className="add-task__inputs">
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
      </div>

      <div className="add-task__button">
        <button
          onClick={() => {
            handleAddNewTask();
          }}
        >
          Add
        </button>
      </div>
    </AddTaskStyle>
  );
};

export default AddTask;
