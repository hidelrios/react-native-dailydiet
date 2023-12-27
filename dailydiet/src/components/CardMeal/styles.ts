import styled from "styled-components/native";
import { useTheme } from "styled-components";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 6px;
  border: 1px solid ${() => useTheme().COLORS.GRAY_5};

  margin-top: 8px;
  padding: 14px 16px 14px 12px;
  gap: 12px;

  background-color: ${() => useTheme().COLORS.WHITE};
`;

export const ContainerStatus = styled.View`
  position: absolute;
  right: 16px;
`;
