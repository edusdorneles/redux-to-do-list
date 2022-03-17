// Styles
import { AddTaskStyle } from "./styles";

const AddTask: React.FC = () => {
  return (
    <AddTaskStyle>
      <div className="add-task__inputs">
        <input type="text" placeholder="Insira o título da sua tarefa!" />
        <input type="text" placeholder="Insira a descrição da sua tarefa!" />
      </div>

      <div className="add-task__button">
        <button>Add</button>
      </div>
    </AddTaskStyle>
  );
};

export default AddTask;
