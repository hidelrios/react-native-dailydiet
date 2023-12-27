import { CardTypeStyleProps, Container, Describe, Title } from "./styles";

interface Props {
  title: string;
  description: string;
  type?: CardTypeStyleProps;
}

export function Info({ title, description,type = 'PRIMARY' }: Props) {
  return (
    <Container type={type}>
        <Title>{title}</Title>
        <Describe>{description}</Describe>
    </Container>
  )
}
