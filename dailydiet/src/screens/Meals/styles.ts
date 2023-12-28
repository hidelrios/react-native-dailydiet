import { View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { useTheme } from "styled-components";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${() => useTheme().COLORS.GRAY_5};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 80px;
  /* padding: 56px 140px 52px 24px; */
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${() => useTheme().COLORS.GRAY_1};
    font-family: ${() => useTheme().FONT_FAMILY.BOLD};
    font-size: ${() => useTheme().FONT_SIZE.LG}px;
  `};
`;

export const Icon = styled.View`
  height: 20px;
  width: 20px;
  position: absolute;
  left: 24px;

  z-index: 999;
  elevation: 999;
`;

export const Main = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 40px 24px;
  gap: 100px;

  border-radius: 20px 20px 0 0;
  background-color: ${() => useTheme().COLORS.GRAY_7};
`;

export const Form = styled.View`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 24px;
`;

export const InputTitle = styled.Text`
  ${({ theme }) => css`
    color: ${() => useTheme().COLORS.GRAY_2};
    font-family: ${() => useTheme().FONT_FAMILY.BOLD};
    font-size: ${() => useTheme().FONT_SIZE.MD}px;
  `};
`;

export const AreaName = styled.View`
  display: flex;
  height: 70px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

export const InputName = styled.TextInput`
  display: flex;
  padding: 14px;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  align-self: stretch;

  border-radius: 6px;
  border: 1px solid ${() => useTheme().COLORS.GRAY_5};
`;

export const AreaDescription = styled.View`
  display: flex;
  height: 142px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

export const InputDescription = styled.TextInput`
  display: flex;
  padding: 14px;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  align-self: stretch;

  border-radius: 6px;
  border: 1px solid ${() => useTheme().COLORS.GRAY_5};
`;

export const AreaDateAndHour = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
`;

export const AreaDate = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 70px;

  gap: 4px;
  flex: 1 0 0;
  align-self: stretch;
`;

export const InputDate = styled.TextInput`
  display: flex;
  padding: 14px;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;

  border-radius: 6px;
  border: 1px solid ${() => useTheme().COLORS.GRAY_5};
`;

export const AreaButton = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  align-self: stretch;
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

export const ButtonNewMealsTitle = styled.Text`
  color: ${() => useTheme().COLORS.WHITE};
  font-size: ${() => useTheme().FONT_SIZE.MD}px;
  text-align: center;
`;
