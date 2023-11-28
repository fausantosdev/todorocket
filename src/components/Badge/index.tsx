import { Container, Txt, BadgeIcon } from './styles'

type TypeProps = {
  text: string
  number: number
  textColor?:
  'blueDark'
  | 'blue'
  | 'purpleDark'
  | 'purple'
}

export function Badge ({ text, number, textColor }: TypeProps) {
  return (
    <Container>
      <Txt color={textColor}>{text}</Txt>
      <BadgeIcon>
        <Txt>{number}</Txt>
      </BadgeIcon>
    </Container>
  )
}