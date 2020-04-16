import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'

import colors from '../constants/colors'
import HomeScreen from '../screens/HomeScreen'
import ExploreScreen from '../screens/ExploreScreen'
import SubscriptionScreen from '../screens/SubscriptionScreen'
import LibraryScreen from '../screens/LibraryScreen'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const BottomTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.grey,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: (props) => (
            <MaterialIcons name='home' size={props.size} color={props.color} />
          ),
        }}
        name='Home'
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => (
            <MaterialIcons
              name='explore'
              size={props.size}
              color={props.color}
            />
          ),
        }}
        name='Explore'
        component={ExploreScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => (
            <MaterialIcons
              name='subscriptions'
              size={props.size}
              color={props.color}
            />
          ),
        }}
        name='Subscriptions'
        component={SubscriptionScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => (
            <MaterialIcons name='mail' size={props.size} color={props.color} />
          ),
        }}
        name='Inbox'
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => (
            <MaterialIcons
              name='video-library'
              size={props.size}
              color={props.color}
            />
          ),
        }}
        name='Library'
        component={LibraryScreen}
      />
    </Tab.Navigator>
  )
}

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerTitle: () => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Ionicons name='logo-youtube' size={30} color={colors.primary} />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              padding: 5,
            }}
          >
            YOUTUBE
          </Text>
        </View>
      ),
      headerRight: (props) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
            }}
          >
            <Text style={{ marginLeft: 15 }}>
              <MaterialIcons name='videocam' size={24} color={colors.grey} />
            </Text>
            <Text style={{ marginLeft: 15 }}>
              <MaterialIcons name='search' size={24} color={colors.grey} />
            </Text>
            <Text style={{ marginLeft: 15 }}>
              <MaterialIcons
                name='account-circle'
                size={24}
                color={colors.grey}
              />
            </Text>
          </View>
        )
      },
    }}
  >
    <Stack.Screen name='Tab' component={BottomTabs} />
  </Stack.Navigator>
)
