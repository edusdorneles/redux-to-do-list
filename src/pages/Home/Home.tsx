import AddTask from "components/Task/AddTask/AddTask";
import TaskCounter from "components/Task/TaskCounter/TaskCounter";
import TaskFilter from "components/Task/TaskFilter/TaskFilter";
import TaskCard from "components/Task/TaskCard/TaskCard";

// Styles
import { HomeStyle } from "./styles";
import { Container } from "styles/GlobalStyle";

const Home: React.FC = () => {
  return (
    <HomeStyle>
      <Container>
        <AddTask />
        <TaskCounter />
        <TaskFilter />

        <TaskCard />
      </Container>
    </HomeStyle>
  );
};

export default Home;
