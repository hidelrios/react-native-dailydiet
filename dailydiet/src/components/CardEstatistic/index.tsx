import { Container, Describe, Title } from "./styles";

interface Props {
  title: string;
  description: string;
}

export function CardEstatistic({ title, description }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Describe>{description}</Describe>
    </Container>
  );
}
