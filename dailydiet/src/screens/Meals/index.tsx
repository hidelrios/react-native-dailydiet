import { Text, Image, TextInput } from "react-native";
import {
  AreaButton,
  AreaDate,
  AreaDateAndHour,
  AreaDescription,
  AreaName,
  ButtonNewMeals,
  ButtonNewMealsTitle,
  Container,
  Form,
  Header,
  Icon,
  InputDate,
  InputDescription,
  InputName,
  InputTitle,
  Main,
  Title,
} from "./styles";
import { ButtonOption } from "@components/ButtonOptionDiet/styles";
import { Button } from "@components/ButtonOptionDiet";

export function Meals() {
  return (
    <Container>
      <Header>
        <Icon>
          <Image source={require("../../assets/img/back_gray.png")} />
        </Icon>

        <Title>Nova refeição</Title>
      </Header>

      <Main>
        <Form>
          <AreaName>
            <InputTitle>Nome</InputTitle>
            <InputName />
          </AreaName>
          <AreaDescription>
            <InputTitle>Descrição</InputTitle>
            <InputDescription />
          </AreaDescription>

          <AreaDateAndHour>
            <AreaDate>
              <InputTitle>Data</InputTitle>
              <InputName />
            </AreaDate>
            <AreaDate>
              <InputTitle>Hora</InputTitle>
              <InputDate />
            </AreaDate>
          </AreaDateAndHour>
          <InputTitle>Está dentro da dieta?</InputTitle>
          <AreaButton>
            <Button type="Sim" />
            <Button type="Não" />
          </AreaButton>
        </Form>
        <ButtonNewMeals>
          <ButtonNewMealsTitle>Cadastrar refeição</ButtonNewMealsTitle>
        </ButtonNewMeals>
      </Main>
    </Container>
  );
}
