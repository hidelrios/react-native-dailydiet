import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { useTheme } from "styled-components";

export type ButtonOptionProps = "Sim" | "Não";

type Props = {
  type: ButtonOptionProps;
};

export const ButtonOption = styled(TouchableOpacity)<Props>`
  display: flex;
  flex-direction: row;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 6px;
  background-color: ${() => useTheme().COLORS.GRAY_6};
`;

export const ButtonTitle = styled.Text`
  ${({ theme }) => css`
    color: ${() => useTheme().COLORS.GRAY_1};
    font-family: ${() => useTheme().FONT_FAMILY.BOLD};
    font-size: ${() => useTheme().FONT_SIZE.MD}px;
  `};
`;
