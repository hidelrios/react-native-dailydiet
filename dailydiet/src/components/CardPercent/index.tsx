import { Image } from "react-native";

import { StyleProps, Container, Describe, Icon, Title } from "./styles";

interface Props {
  title: string;
  description: string;
  type?: StyleProps;
}

export function CardPercent({ title, description, type = "PRIMARY" }: Props) {
  return (
    <Container type={type}>
      <Icon>
        {type === "PRIMARY" && (
          <Image source={require("../../assets/img/open_green.png")} />
        )}
        {type === "SECONDARY" && (
          <Image source={require("../../assets/img/open_red.png")} />
        )}
      </Icon>
      <Title>{title}</Title>
      <Describe>{description}</Describe>
    </Container>
  );
}
