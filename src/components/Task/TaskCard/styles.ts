import styled from "styled-components";

export const TaskCardStyle = styled.div`
  .task-card__task {
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: ${(props) => props.theme.boxShadow};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #606060;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;

    &.task-card__task--completed {
      background-color: ${(props) => props.theme.colors.primary};
    }

    .task-card__task__text {
      .task-card__task__text__title {
        font-size: ${(props) => props.theme.fontSize.medium};
        font-weight: 500;

        &.task-card__task__text__title--completed {
          text-decoration: line-through;
        }
      }

      .task-card__task__text__description {
        font-size: ${(props) => props.theme.fontSize.small};

        &.task-card__task__text__description--completed {
          text-decoration: line-through;
        }
      }
    }

    .task-card__task__actions {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .task-card__task__actions--add,
      .task-card__task__actions--remove,
      .task-card__task__actions--edit {
        border-radius: ${(props) => props.theme.borderRadius};
        transition: ${(props) => props.theme.transition};
        background: transparent;
        padding: 8px;
        margin-right: 5px;
        cursor: pointer;
        border: none;
        color: ${(props) => props.theme.colors.text};

        &:hover {
          background-color: ${(props) => props.theme.colors.third};

          svg {
            color: white;
          }
        }

        svg {
          display: flex;
        }
      }

      .task-card__task__actions--remove {
        border-radius: ${(props) => props.theme.borderRadius};
        transition: ${(props) => props.theme.transition};
        padding: 8px;
        cursor: pointer;

        &:hover {
          background-color: red;
        }

        svg {
          display: flex;
        }
      }
    }
  }
`;
