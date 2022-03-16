import styled from "styled-components";

export const HeaderStyle = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 26px;
    font-weight: normal;
  }
`;
