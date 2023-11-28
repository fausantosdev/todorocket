import styled from 'styled-components/native'

import theme from './theme'

type TypePropsContainer = {
  fDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  jContent?:
    'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'initial'
    | 'inherit'
  aItems?:
    'normal'
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'initial'
    | 'inherit'
  padding?: number
  mWidth?: 
  '5%' 
  | '10%' 
  | '15%' 
  | '20%' 
  | '25%' 
  | '30%' 
  | '35%' 
  | '40%' 
  | '45%' 
  | '50%' 
  | '55%' 
  | '60%' 
  | '65%' 
  | '70%' 
  | '75%' 
  | '80%' 
  | '85%' 
  | '90%' 
  | '95%' 
  | '100%'
  mHeight?: 
  '5%' 
  | '10%' 
  | '15%' 
  | '20%' 
  | '25%' 
  | '30%' 
  | '35%' 
  | '40%' 
  | '45%' 
  | '50%' 
  | '55%' 
  | '60%' 
  | '65%' 
  | '70%' 
  | '75%' 
  | '80%' 
  | '85%' 
  | '90%' 
  | '95%' 
  | '100%'
  position?: 'relative' | 'absolute'
  top?: number
  zIndex?: number
  color?:
    'gray700'
    | 'gray600'
    | 'gray500'
    | 'gray400'
    | 'gray300'
    | 'gray200'
    | 'gray100'
  background?: string
  gap?: number 
}

type TypePropsBtn = {
  compact?: boolean
  disabled?: boolean
  type?:
    'blueDark'
    | 'blue'
    | 'purpleDark'
    | 'purple'
  width?: string
  height?: string
}

type TypePropsText = {
  align?: 'left' | 'right' | 'center'
  color?:
  'gray700'
  | 'gray600'
  | 'gray500'
  | 'gray400'
  | 'gray300'
  | 'gray200'
  | 'gray100'
  size?: number
  bold?: boolean
  width?: 
  '25%' 
  | '50%' 
  | '75%' 
  | '100%'
}

type TypeInputProps = {
  position?: 'relative' | 'absolute'
  width?: string
  height?: string
}

export const Container = styled.SafeAreaView<TypePropsContainer>`
  flex: 1;
  background-color: ${props =>
    props.color ? theme.colors.base[props.color] : 'transparent'};
  background-image: url(${({ background }) => background || 'none'});
  flex-direction: ${props => props.fDirection || 'column'};
  justify-content: ${props => props.jContent || 'center'};
  align-items: ${props => props.aItems || 'center'};
  padding: ${props => props.padding || 0}px;
  width: 100%;
  max-width: ${props => props.mWidth || '100%'};
  height: 100%;
  max-height: ${props => props.mHeight || '100%'};
  position: ${props => props.position || 'auto'};
  top: ${props => props.top || 0}px;
  z-index: ${props => props.zIndex || 0};
  gap: ${({ gap }) => gap ? `${gap}px` : 0};
`

export const Box = styled.View<TypePropsContainer>`
  flex: 1;
  background-color: ${props =>
    props.color ? theme.colors.base[props.color] : 'transparent'};
  flex-direction: ${props => props.fDirection || 'column'};
  justify-content: ${props => props.jContent || 'center'};
  align-items: ${props => props.aItems || 'center'};
  padding: ${props => props.padding || 0}px;
  width: 100%;
  max-width: ${props => `${props.mWidth}` || '100%'};
  height: 100%;
  max-height: ${props => `${props.mHeight}` || '100%'};
  position: ${props => props.position || 'auto'};
  top: ${props => props.top || 0}px;
  z-index: ${props => props.zIndex || 0};
  gap: ${({ gap }) => gap ? `${gap}px` : 0};
`

export const Img = styled.Image``

export const Btn = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})<TypePropsBtn>`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  padding: ${({ compact }) => compact ? 5 : 15}px;
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  background-color: ${({ type }) => type ? theme.colors.product[type] : 'transparent'};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  color: ${theme.colors.base.gray500};
`

export const Txt = styled.Text<TypePropsText>`
  width: ${({ width }) => width || 'auto'};
  text-align: ${({ align }) => align || 'center'};
  color: ${({ color }) => color ? theme.colors.base[color] : theme.colors.base.gray100};
  font-size: ${({ size }) => size ? `${size}px` : '15px'};
  font-weight: ${({ bold }) => bold ? 'bold' : '100'};
  font-family: 'Inter';
`

export const Input = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.base.gray300
})<TypeInputProps>`
  flex: 1;
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  background-color: ${theme.colors.base.gray500};
  padding: 10px;
  border-radius: 5px;
  border: 2px solid ${theme.colors.base.gray700};
  color: ${theme.colors.base.gray100};
`