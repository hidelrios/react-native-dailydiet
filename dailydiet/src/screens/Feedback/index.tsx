import { Text, Image } from "react-native";
import { FeedbackInfo } from "@components/FeedbackInfo";
import { Button, ButtonTitle, Container } from "./styles";

export function Feedback() {
  return (
    <Container>
      <FeedbackInfo
        type="SECONDARY"
      />
      <Button>
        <ButtonTitle>Ir para a página inicial</ButtonTitle>
      </Button>
    </Container>
  );
}
