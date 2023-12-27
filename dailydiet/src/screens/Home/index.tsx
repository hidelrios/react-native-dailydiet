import { Button, Image, Text } from "react-native";
import {
  Container,
  Header,
  ContainerPercent,
  PercentText,
  PercentDescribe,
  ContainerIconOpen,
  ButtonNewMeals,
  ButtonNewMealsText,
  ContainerNewMeals,
  TitleNewMeals,
  ContainerMealsList,
  TitleMealsList,
  CardTypeStyleProps,
} from "./styles";
import { Plus } from "phosphor-react-native";
import { CardMeal } from "@components/CardMeal";
import { CardPercent } from "@components/CardPercent";


export function Home() {
  return (
    <Container>
      <Header>
        <Image source={require("../../assets/img/logo.png")} />
        <Image source={require("../../assets/img/profile.png")} />
      </Header>

      <CardPercent
        title="90,86%"
        description="das refeições dentro da dieta"
        type="PRIMARY"
      />


      <ContainerNewMeals>
        <TitleNewMeals>Refeições</TitleNewMeals>
        <ButtonNewMeals>
          <Plus size={18} color="#FFFFFF" />
          <ButtonNewMealsText> Nova refeição</ButtonNewMealsText>
        </ButtonNewMeals>
      </ContainerNewMeals>
      <ContainerMealsList>
        <TitleMealsList>12.08.22</TitleMealsList>
        <CardMeal />
      </ContainerMealsList>
    </Container>
  );
}
