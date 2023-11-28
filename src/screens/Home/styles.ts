import styled from 'styled-components/native'
import theme from '../../styles/theme'

type TypeTxtTask = {
  done?: boolean
}

export const InputBox = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 10px;
  position: absolute;
  bottom: -30px;
  align-items: center;
`

export const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  padding-bottom: 15px;
  border-bottom-width: 1px;
  border-color: ${theme.colors.base.gray400};
  margin-bottom: 20px;
`

export const TodoList = styled.FlatList`
  width: 100%;
`

export const Task = styled.View`
  padding: 20px 10px;
  margin-bottom: 10px;
  background-color: ${theme.colors.base.gray500};
  border-radius: 5px;
  border: 1px solid ${theme.colors.base.gray400};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const BtnTask = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 10%;
`

export const TxtTask = styled.Text<TypeTxtTask>`
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
  color: ${({ done }) => done ? theme.colors.base.gray300 : theme.colors.base.gray100};
  text-decoration: ${({ done }) => done ? 'line-through' : 'none'};
`

export const Empty = styled.View`
  align-items: center;
  height: 150px;
  margin-top: 25px;
`