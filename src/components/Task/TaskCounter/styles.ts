import styled from "styled-components";

export const TaskCounterStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  .task-counter {
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: ${(props) => props.theme.boxShadow};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #606060;
    width: 100%;
    padding: 10px;
    text-align: center;

    p {
      font-size: ${(props) => props.theme.fontSize.medium};

      &.task-counter--total span {
        color: ${(props) => props.theme.colors.third};
      }

      &.task-counter--completed span {
        color: #21bb4e;
      }

      &.task-counter--not-completed span {
        color: #eb4b2f;
      }
    }
  }
`;
