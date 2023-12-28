import { Button, Image, Text } from "react-native";

import {
  Container,
  ContainerIconBack,
  ContainerStatistic,
  ContainerStatisticAll,
  ContainerStatisticInfo,
  Header,
  PercentDescribe,
  PercentText,
  StyleProps,
  TitleStatisticAll,
} from "./styles";
import { CardEstatistic } from "@components/CardEstatistic";
import { Info } from "@components/CardEstatisticInfo";

interface Props {
  type?: StyleProps;
}

export function Statistic({type = "PRIMARY"}: Props) {
  return (
    <Container type={type}>
      <Header type={type}>
        <ContainerIconBack>
          {type === "PRIMARY" && (
            <Image source={require("../../assets/img/back_green.png")} />
          )}
          {type === "SECONDARY" && (
            <Image source={require("../../assets/img/back_red.png")} />
          )}
        </ContainerIconBack>
        <PercentText>90,86%</PercentText>
        <PercentDescribe>das refeições dentro da dieta</PercentDescribe>
      </Header>

      <ContainerStatisticAll>
        <TitleStatisticAll>Estatísticas gerais</TitleStatisticAll>
        <ContainerStatistic>
          <CardEstatistic
            title="22"
            description="melhor sequência de pratos dentro da dieta"
          />
          <CardEstatistic title="109" description="refeições registradas" />
          <ContainerStatisticInfo>
            <Info title="99" description="refeições dentro da dieta" />
            <Info
              title="10"
              description="refeições fora da dieta"
              type="SECONDARY"
            />
          </ContainerStatisticInfo>
        </ContainerStatistic>
      </ContainerStatisticAll>
    </Container>
  );
}
