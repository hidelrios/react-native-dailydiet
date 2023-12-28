import { View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { useTheme } from "styled-components";

export type StyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: StyleProps;
};

export const FeedbackContainer = styled.View`
  display: flex;
  width: 311px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const IllustrationContainer = styled.View`
  margin-top: 40px;
  margin-bottom: 30px;
  align-items: center;
`;

export const FeedbackTitle = styled.Text<Props>`
  color: ${({ type }) =>
    type === "PRIMARY"
      ? useTheme().COLORS.GREEN_DARK
      : useTheme().COLORS.RED_DARK};
  font-size: ${() => useTheme().FONT_SIZE.XXL}px;
  font-family: ${() => useTheme().FONT_FAMILY.BOLD};
  text-align: center;
`;

export const FeedbackDescription = styled.Text`
  color: ${() => useTheme().COLORS.GRAY_1};
  font-family: ${() => useTheme().FONT_FAMILY.REGULAR};
  font-size: ${() => useTheme().FONT_SIZE.LG}px;

  text-align: center;
`;

export const FeedbackDescriptionBold = styled.Text`
  color: ${() => useTheme().COLORS.GRAY_1};
  font-family: ${() => useTheme().FONT_FAMILY.BOLD};
  font-size: ${() => useTheme().FONT_SIZE.LG}px;

  text-align: center;
`;
