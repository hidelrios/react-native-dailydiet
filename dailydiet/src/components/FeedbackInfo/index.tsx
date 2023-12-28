import { Text, Image, View } from "react-native";
import {
  FeedbackContainer,
  FeedbackDescription,
  FeedbackDescriptionBold,
  FeedbackTitle,
  IllustrationContainer,
  StyleProps,
} from "./styles";

interface Props {
  type: StyleProps;
}

export function FeedbackInfo({ type }: Props) {
  return (
    <View>
      <FeedbackContainer>
        <FeedbackTitle type={type}>
          {type === "PRIMARY" ? "Continue assim!" : "Que pena!"}
        </FeedbackTitle>
        <FeedbackDescription>
          {type === "PRIMARY" ? "Você continua" : "Você"}{" "}
          <FeedbackDescriptionBold>
            {type === "PRIMARY" ? "dentro da dieta." : "saiu da dieta"}
          </FeedbackDescriptionBold>{" "}
          {type === "PRIMARY"
            ? "Muito bem!"
            : "dessa vez, mas continue se esforçando e não desista!"}
        </FeedbackDescription>
      </FeedbackContainer>

      <IllustrationContainer>
        {type === "PRIMARY" && (
          <Image
            source={require("../../assets/img/illustration_primary.png")}
          />
        )}
        {type === "SECONDARY" && (
          <Image
            source={require("../../assets/img/illustration_secondary.png")}
          />
        )}
      </IllustrationContainer>
    </View>
  );
}
