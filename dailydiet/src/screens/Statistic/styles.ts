import { View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { useTheme } from "styled-components";

export type StyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: StyleProps;
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ type }) =>
    type === "PRIMARY"
      ? useTheme().COLORS.GREEN_LIGHT
      : useTheme().COLORS.RED_LIGHT};
`;

export const Header = styled.View<Props>`
  display: flex;
  padding: 24px;
  height: 150px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ type }) =>
    type === "PRIMARY"
      ? useTheme().COLORS.GREEN_LIGHT
      : useTheme().COLORS.RED_LIGHT};
`;

export const ContainerIconBack = styled.View`
  position: absolute;
  top: 20px;
  left: 24px;
`;

export const PercentText = styled.Text`
  ${({ theme }) => css`
    color: ${() => useTheme().COLORS.GRAY_1};
    font-family: ${() => useTheme().FONT_FAMILY.BOLD};
    font-size: ${() => useTheme().FONT_SIZE.XXXL}px;
  `};
`;

export const PercentDescribe = styled.Text`
  ${({ theme }) => css`
    color: ${() => useTheme().COLORS.GRAY_2};
    font-family: ${() => useTheme().FONT_FAMILY.REGULAR};
    font-size: ${() => useTheme().FONT_SIZE.MD}px;
  `};
`;

export const ContainerStatisticAll = styled.View`
  flex: 1;
  margin: 100vw;

  flex-direction: column;
  align-items: center;
  padding: 33px 24px 261px 24px;
  gap: 23px;

  border-radius: 20px 20px 0 0;

  background-color: ${() => useTheme().COLORS.GRAY_7};
`;

export const TitleStatisticAll = styled.Text`
  ${({ theme }) => css`
    color: ${() => useTheme().COLORS.GRAY_1};
    font-family: ${() => useTheme().FONT_FAMILY.BOLD};
    font-size: ${() => useTheme().FONT_SIZE.MD}px;
  `};
`;

export const ContainerStatisticInfo = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const ContainerStatistic = styled.View`
  gap: 8px;
`;
