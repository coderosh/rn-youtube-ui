import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import MainStack from './navigations/MainNavigator'

const loadFonts = () => {
  return Font.loadAsync({
    roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Medium.ttf'),
    pathway: require('./assets/fonts/PathwayGothicOne-Regular.ttf'),
  })
}

const App = () => {
  const [fontLoaded, setFontsLoaded] = useState(false)

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}

export default App
