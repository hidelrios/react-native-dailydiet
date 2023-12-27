import styled, { css } from "styled-components/native";
import { useTheme } from "styled-components";

export type StyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: StyleProps;
};

export const Container = styled.View<Props>`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 20px 16px;
  gap: 2px;
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

export const Icon = styled.View`
  position: absolute;
  top: 8px;
  right: 8px;
`;