import { ButtonOption, ButtonOptionProps, ButtonTitle } from "./styles";
import { Image } from "react-native";

type Props = {
  type: ButtonOptionProps;
};

export function Button({ type = "Sim" }: Props) {
  return (
    <ButtonOption type={type}>
      {type === "Sim" && (
        <Image source={require("../../assets/img/status_green.png")} />
      )}
      {type === "Não" && (
        <Image source={require("../../assets/img/status_red_2.png")} />
      )}
      <ButtonTitle>{type}</ButtonTitle>
    </ButtonOption>
  );
}
