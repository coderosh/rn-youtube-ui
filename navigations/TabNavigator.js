import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'

import colors from '../constants/colors'
import HomeScreen from '../screens/HomeScreen'
import ExploreScreen from '../screens/ExploreScreen'
import SubscriptionScreen from '../screens/SubscriptionScreen'
import LibraryScreen from '../screens/LibraryScreen'
import InboxScreen from '../screens/InboxScreen'

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
        component={InboxScreen}
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
        // <View
        //   style={{
        //     flexDirection: 'row',
        //     alignItems: 'center',
        //   }}
        // >
        //   <Ionicons name='logo-youtube' size={30} color={colors.primary} />
        //   <Text
        //     style={{
        //       fontSize: 24,
        //       padding: 5,
        //       fontFamily: 'pathway',
        //     }}
        //   >
        //     YouTube
        //   </Text>
        // </View>
        <View>
          <Image
            source={require('../assets/ytlogo.png')}
            style={{ resizeMode: 'contain', width: 100 }}
          />
        </View>
      ),
      headerRight: (props) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
            }}
          >
            <TouchableOpacity style={{ marginLeft: 15 }}>
              <MaterialIcons name='videocam' size={24} color={colors.grey} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 15 }}>
              <MaterialIcons name='search' size={24} color={colors.grey} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 15 }}>
              <MaterialIcons
                name='account-circle'
                size={24}
                color={colors.grey}
              />
            </TouchableOpacity>
          </View>
        )
      },
    }}
  >
    <Stack.Screen name='Tab' component={BottomTabs} />
  </Stack.Navigator>
)
