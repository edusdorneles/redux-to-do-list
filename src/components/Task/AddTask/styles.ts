import styled from "styled-components";
import { shade } from "polished";

export const AddTaskStyle = styled.div`
  padding: 20px 0px;
  display: grid;
  grid-template-columns: 8fr 1fr;
  grid-gap: 20px;

  input {
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: ${(props) => props.theme.boxShadow};
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
    border: 1px solid #606060;
    padding: 10px;
    outline: none;
  }

  button {
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: ${(props) => props.theme.boxShadow};
    background-color: ${(props) => props.theme.colors.third};
    transition: ${(props) => props.theme.transition};
    cursor: pointer;
    color: white;
    border: none;
    padding: 10px;

    &:hover {
      background-color: ${(props) => shade(0.2, props.theme.colors.third)};
    }
  }
`;
