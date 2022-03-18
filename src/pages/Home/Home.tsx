import AddTask from "components/Task/AddTask/AddTask";
import TaskCounter from "components/Task/TaskCounter/TaskCounter";
import TaskFilter from "components/Task/TaskFilter/TaskFilter";
import TaskCard from "components/Task/TaskCard/TaskCard";

// Redux
import { useSelector } from "react-redux";

// Styles
import { HomeStyle } from "./styles";
import { Container } from "styles/GlobalStyle";
import { RootState } from "store/storeConfig";

const Home: React.FC = () => {
  const tasks = useSelector((task: RootState) => task.tasksReducer);

  return (
    <HomeStyle>
      <Container className="home__container">
        <AddTask />
        <TaskCounter />
        <TaskFilter />

        <div className="home__container__title">
          <p>Tarefas:</p>
        </div>

        {tasks.map((task: Task) => (
          <TaskCard task={task} />
        ))}
      </Container>
    </HomeStyle>
  );
};

export default Home;
