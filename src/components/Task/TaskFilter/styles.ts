import styled from "styled-components";
import { shade } from "polished";

export const TaskFilterStyle = styled.div`
  .task-filter__title {
    padding: 20px 0px 5px 0px;

    p {
      text-align: center;
    }
  }

  .task-filter__buttons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;

    .task-filter__buttons__actions {
      background-color: ${(props) => props.theme.colors.primary};
      border-radius: ${(props) => props.theme.borderRadius};
      box-shadow: ${(props) => props.theme.boxShadow};
      color: ${(props) => props.theme.colors.text};
      transition: ${(props) => props.theme.transition};
      border: 1px solid #606060;
      cursor: pointer;
      width: 100%;
      padding: 10px;
      text-align: center;

      &:hover {
        background-color: ${(props) => shade(0.2, props.theme.colors.primary)};
        border: 1px solid ${(props) => props.theme.colors.third};
      }

      .active {
        border: 1px solid ${(props) => props.theme.colors.third};
      }
    }
  }

  ${(props) => props.theme.media.mobile} {
    .task-filter__buttons {
      grid-template-columns: 1fr;
    }
  }
`;
