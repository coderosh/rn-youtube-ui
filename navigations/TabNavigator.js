import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={null} />
      <Tab.Screen name='Explore' component={null} />
      <Tab.Screen name='Subscriptions' component={null} />
      <Tab.Screen name='Inbox' component={null} />
      <Tab.Screen name='Library' component={null} />
    </Tab.Navigator>
  )
}

export default BottomTabs
