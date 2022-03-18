import AddTask from "components/Task/AddTask/AddTask";
import TaskCounter from "components/Task/TaskCounter/TaskCounter";
import TaskFilter from "components/Task/TaskFilter/TaskFilter";
import TaskCard from "components/Task/TaskCard/TaskCard";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "store/storeConfig";

// Styles
import { HomeStyle } from "./styles";
import { Container } from "styles/GlobalStyle";

const Home: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasksReducer);
  const filter = useSelector((state: RootState) => state.filterReducer);

  return (
    <HomeStyle>
      <Container className="home__container">
        <AddTask />
        <TaskCounter />
        <TaskFilter />

        <div className="home__container__title">
          <p>Tarefas:</p>
        </div>

        {/* 1. Verifica se existe tarefas, caso contrário, exibe um texto para feedback. */}
        {/* 2. Faço um filtro antes de mapear as tasks, dependendo do filtro que o usuário escolheu. */}
        {tasks.length ? (
          tasks
            .filter((task: any) => {
              if (filter === null) {
                return task;
              } else {
                return task.completed === filter;
              }
            })
            .map((task: Task) => <TaskCard key={task.id} task={task} />)
        ) : (
          <p className="home__container__task--non-task">
            Nenhuma tarefa adicionada, comece a adionar tarefas para vê-las!
          </p>
        )}
      </Container>
    </HomeStyle>
  );
};

export default Home;
