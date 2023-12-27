import { View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { useTheme } from "styled-components";


export type CardTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: CardTypeStyleProps;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background-color: ${() => useTheme().COLORS.WHITE};
`;

export const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerPercent = styled.View<Props>`
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

export const ContainerIconOpen = styled.View`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const ContainerNewMeals = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 8px;
`;

export const TitleNewMeals = styled.Text`
  ${({ theme }) => css`
    color: ${() => useTheme().COLORS.GRAY_1};
    font-family: ${() => useTheme().FONT_FAMILY.REGULAR};
    font-size: ${() => useTheme().FONT_SIZE.LG}px;
  `};
`;

export const ButtonNewMeals = styled(TouchableOpacity)`
  background-color: ${() => useTheme().COLORS.GRAY_2};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  padding: 16px 24px;
  border-radius: 5px;
  gap: 12px;
`;

export const ButtonNewMealsText = styled.Text`
  color: ${() => useTheme().COLORS.WHITE};
  font-size: ${() => useTheme().FONT_SIZE.MD}px;
  text-align: center;
`;

export const ContainerMealsList = styled.View`
  margin-top: 20px;
`;

export const TitleMealsList = styled.Text`
font-family: ${() => useTheme().FONT_FAMILY.BOLD};
  color: ${() => useTheme().COLORS.GRAY_1};
  font-size: ${() => useTheme().FONT_SIZE.XL}px;
`;
