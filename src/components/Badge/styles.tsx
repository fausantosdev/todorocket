import styled from 'styled-components/native'

import theme from '../../styles/theme'

type TypePropsText = {
  align?: 'left' | 'right' | 'center'
  color?:
    'blueDark'
    | 'blue'
    | 'purpleDark'
    | 'purple'
  size?: number
  bold?: boolean
}

export const Container = styled.View`
  flex-direction: row;
  gap: 10px;
  align-items: center;
`

export const Txt = styled.Text<TypePropsText>`
  text-align: ${({ align }) => align || 'center'};
  color: ${({ color }) => color ? theme.colors.product[color] : '#ffffff'};
  font-size: ${({ size }) => size ? `${size}px` : '15px'};
  font-weight: ${({ bold }) => bold ? 'bold' : '100'};
  font-family: 'Inter';
`

export const BadgeIcon = styled.View`
  background-color: ${theme.colors.base.gray400};
  padding: 0 10px;
  border-radius: 15px;
`