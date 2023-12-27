import { View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { useTheme } from "styled-components";

export const Container= styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 8px;
  align-self: stretch;

  border-radius: 8px;
  background-color: ${() => useTheme().COLORS.GRAY_6};
`;

export const Title= styled.Text`
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
  `};
`;