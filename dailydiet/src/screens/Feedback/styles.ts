import { View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { useTheme } from "styled-components";

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${() => useTheme().COLORS.GRAY_7};
`;

export const Button = styled(TouchableOpacity)`
  background-color: ${() => useTheme().COLORS.GRAY_2};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  border-radius: 6px;
  gap: 12px;
`;

export const ButtonTitle = styled.Text`
  color: ${() => useTheme().COLORS.WHITE};
  font-size: ${() => useTheme().FONT_SIZE.MD}px;
  font-family: ${() => useTheme().FONT_FAMILY.BOLD};
  text-align: center;
`;
