// Styles
import { AddTaskStyle } from "./styles";

const AddTask: React.FC = () => {
  return (
    <AddTaskStyle>
      <input type="text" placeholder="Insira sua tarefa!" />
      <button>Add</button>
    </AddTaskStyle>
  );
};

export default AddTask;
