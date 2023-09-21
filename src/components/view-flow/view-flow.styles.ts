import { styled } from "styled-components";

export const StyledViewFlow = styled.div`
  height: calc(100vh - 140px);
  border: 1px solid ${(props) => props.theme.colors.silver};
  flex: 1;
  border-radius: 4px;
`;

export const StyledLabel = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
