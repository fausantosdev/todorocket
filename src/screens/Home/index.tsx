import { Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { Container, Box, Txt, Img, Input, Btn } from '../../styles'
import { Info, InputBox, TodoList, Empty, Task, BtnTask, TxtTask } from './styles'

import logo from '../../assets/images/logo.png'
import clipboard from '../../assets/images/clipboard.png'
import trash from '../../assets/images/trash.png'
import iconDone from '../../assets/images/iconDone.png'
import iconNotDone from '../../assets/images/iconNotDone.png'

import { Badge } from '../../components/Badge'
import { useState } from 'react'

type TypeTask = {
  id: number
  description: string
  done: boolean
}

export function Home () {
  const [ task, setTask ] = useState<string>('')
  const [ todoList, setTodoList ] = useState<TypeTask[]>([
    {
      id: 1,
      description: 'Fazer determinada tarefa',
      done: false 
    },
    {
      id: 2,
      description: 'Fazer determinada tarefa que ainda não foi feita etc etc etc etc feita etc etc etc etc',
      done: true
    }
  ])

  const handleAddTask = () => {
    if (task === '') {
      Alert.alert('Oops!', 'Você não pode cadastrar uma tarefa vazia')
      return
    }
    
    const newTask = {
      id: Date.now(),
      description: task,
      done: false
    }
    setTodoList(prevState => [ ...prevState, newTask ])
    setTask('')
  }

  const handleRemoveTask = (id: number) => {
    const remove = (id: number) => {
      setTodoList(prevState => prevState.filter(item => item.id !== id))
    }

    Alert.alert('',`Deseja mesmo remover essa tarefa?`, [
      {
        text: 'Sim',
        onPress: () => remove(id)
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  const handleDoneTask = (id: number) => {
    const taskToUpdate = todoList.find(item => item.id === id)

    // Criando uma nova lista atualizada
    const updatedTodoList = todoList.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    )

    // Atualizando o estado com a nova lista
    setTodoList(updatedTodoList)
  }

  return (
    <Container>
      <Box color='gray700' mHeight='25%' padding={30} zIndex={1}>
        <Img source={logo}/>
        <InputBox>
          <Input height='60px' 
            value={task} 
            onChangeText={setTask}
            placeholder='Adicione uma nova tarefa'/>
          <Btn width='58px' height='58px' type='blueDark' onPress={handleAddTask}>
            <AntDesign name="pluscircleo" size={20} color='#ffffff' />
          </Btn>
        </InputBox> 
      </Box>

      <Box color='gray600' jContent='flex-start' padding={30}>
        <Info>
          <Badge text='Criadas' textColor='blue' number={todoList.length}/>
          <Badge text='Concluídas' textColor='purple' number={todoList.filter(item => item.done).length}/>
        </Info>
        
        <TodoList 
          data={todoList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Task>
              <BtnTask onPress={() => handleDoneTask(item.id)}>
                {item.done ? <Img source={iconDone}/> : <Img source={iconNotDone}/>}
              </BtnTask>
              <TxtTask done={item.done}>{item.description}</TxtTask>
              <BtnTask onPress={() => handleRemoveTask(item.id)}>
                <Img source={trash}/>
              </BtnTask>
            </Task>
          )}
          ListEmptyComponent={() => (
            <Empty>
              <Img source={clipboard}/>
              <Box>
                <Txt color='gray200'>Você ainda não tem tarefas cadastradas</Txt>
                <Txt color='gray300'>Crie tarefas e organize seus itens a fazer</Txt>
              </Box>
            </Empty>
          )}/>
      </Box>
    </Container>
  )
}