import { useEffect, useState } from 'react'
import { isDevice } from 'expo-device'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'

import CustomButton from './src/components/button'
import { isSimulatorSeeded, seedSimulator } from './seeds/contacts'

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
`

export default function App() {
  const [displaySeedButton, setDisplaySeedButton] = useState(false)

  useEffect(() => {
    if (!isDevice) {
      isSimulatorSeeded({}).then((result) => {
        console.log('💻 🐛 - file: App.tsx:29 - useEffect - result:', result)
        setDisplaySeedButton(!result)
      })
    }
  }, [])


  return (
    <Container>
      <Title>Open up App.tsx to start</Title>

      {displaySeedButton && (
        <CustomButton title={'🌱 Seed contacts'} onPress={() => seedSimulator({ numberOfContacts: 30 })} />
      )}

      <StatusBar style="auto" />
    </Container>
  )
}
