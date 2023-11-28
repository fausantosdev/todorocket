import { StatusBar } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import { Home } from './src/screens/Home'

import fontInterLight from './assets/fonts/inter/Inter-Light.ttf'
import fontUbuntuMedium from './assets/fonts/ubuntu/Ubuntu-Medium.ttf'
import { useCallback } from 'react'

export default function App() {
  const [ fontLoaded ] = useFonts({
    'Inter': fontInterLight,
    'Ubuntu': fontUbuntuMedium
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontLoaded])

  if(!fontLoaded) {
    return null
  }

  return (
    <>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent/>
      <Home />
    </>
  )
}
