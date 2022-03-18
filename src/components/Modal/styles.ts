import styled from "styled-components";
import { shade } from "polished";

export const ModalStyle = styled.div`
  transition: ${(props) => props.theme.transition};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #0008;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  opacity: 0;

  &.modal__enabled {
    visibility: visible;
    opacity: 1;
  }

  .modal__container {
    background-color: ${(props) => props.theme.colors.primary};
    width: 480px;
    height: auto;
    border-radius: 5px;
    padding: 15px;
    position: relative;

    .modal__title {
      text-align: center;

      h3 {
        font-size: ${(props) => props.theme.fontSize.medium};
        font-weight: 500;
      }
    }

    .modal__children {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 15px;
      padding-top: 10px;

      p {
        text-align: center;
      }

      input {
        color: ${(props) => props.theme.colors.text};
        background-color: ${(props) => props.theme.colors.primary};
        border-radius: ${(props) => props.theme.borderRadius};
        border: 1px solid #606060;
        padding: 8px;

        &:focus {
          outline: 1px solid ${(props) => props.theme.colors.secondary};
        }
      }

      button {
        background-color: ${(props) => props.theme.colors.third};
        transition: ${(props) => props.theme.transition};
        border-radius: ${(props) => props.theme.borderRadius};
        border: none;
        color: white;
        padding: 8px;
        cursor: pointer;

        &:hover {
          background-color: ${(props) => shade(0.3, props.theme.colors.third)};
        }
      }
    }

    .modal__close {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 5px;
      display: flex;
      cursor: pointer;

      &:hover {
        svg {
          color: ${(props) => props.theme.colors.third};
        }
      }

      svg {
        transition: ${(props) => props.theme.transition};
        font-size: 22px;
      }
    }
  }

  /* Adaptação para mobile */
  ${(props) => props.theme.media.mobile} {
    .modal__container {
      width: 90%;
    }
  }
`;
