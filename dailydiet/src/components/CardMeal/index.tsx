import { Text, Image } from "react-native";
import { Container, ContainerStatus } from "./styles";
import { Circle } from "phosphor-react-native";

export function CardMeal() {
  return (
    <Container>
      <Text>20:00</Text>
      <Image source={require("../../assets/img/divider.png")} />
      <Text>X-tudo</Text>
      <ContainerStatus>
        <Image source={require("../../assets/img/status_red.png")} />
      </ContainerStatus>
    </Container>
  );
}
