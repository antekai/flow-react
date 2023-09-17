import { styled } from "styled-components";

export const StyledViewFlow = styled.div`
  height: calc(100vh - 40px);
  border: 1px solid ${(props) => props.theme.colors.silver};
  flex: 1;
`;
