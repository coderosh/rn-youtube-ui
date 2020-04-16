import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import BottomTabs from './TabNavigator'

const Stack = createStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='tabs' component={BottomTabs} />
      <Stack.Screen name='videos' component={null} />
    </Stack.Navigator>
  )
}

export default MainStack
