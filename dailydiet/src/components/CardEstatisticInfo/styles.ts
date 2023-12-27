import styled, { css } from "styled-components/native";
import { useTheme } from "styled-components";

export type CardTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: CardTypeStyleProps;
};

export const Container = styled.View<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 8px;
  flex: 1 0 0;

  border-radius: 8px;
  background-color: ${({ type }) =>
    type === "PRIMARY"
      ? useTheme().COLORS.GREEN_LIGHT
      : useTheme().COLORS.RED_LIGHT};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${() => useTheme().COLORS.GRAY_1};
    font-family: ${() => useTheme().FONT_FAMILY.BOLD};
    font-size: ${() => useTheme().FONT_SIZE.XXL}px;
  `};
`;

export const Describe = styled.Text`
  ${({ theme }) => css`
    color: ${() => useTheme().COLORS.GRAY_2};
    font-family: ${() => useTheme().FONT_FAMILY.REGULAR};
    font-size: ${() => useTheme().FONT_SIZE.MD}px;
    text-align: center;
  `};
`;
