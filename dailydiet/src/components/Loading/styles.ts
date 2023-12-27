import styled from "styled-components/native";
import { useTheme } from "styled-components";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${() => useTheme().COLORS.WHITE};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(() => ({
  color: useTheme().COLORS.GREEN_DARK
}))``;