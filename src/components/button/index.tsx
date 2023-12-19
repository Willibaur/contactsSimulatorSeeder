import React from 'react'
import { PressableProps, Pressable } from 'react-native'
import styled from 'styled-components/native'

interface CustomButtonProps extends PressableProps {
  title: string
  onPress: () => void
}

const Button = styled(Pressable)<PressableProps>`
  background-color: #3498db;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  ...pressableProps
}: CustomButtonProps): JSX.Element => {
  return (
    <Button onPress={onPress} {...pressableProps}>
      <ButtonText>{title}</ButtonText>
    </Button>
  )
}

export default CustomButton
