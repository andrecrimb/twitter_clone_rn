import React from 'react'
import AppProviders from './src/context/AppProviders'
import AuthNavigatorFlow from './src/navigators/AuthNavigatorFlow'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackScreen from './src/navigators/HomeStackScreen'
import SearchStackScreen from './src/navigators/SearchStackScreen'
import NotificationsStackScreen from './src/navigators/NotificationsStackScreen'
import MessagesStackScreen from './src/navigators/MessagesStackScreen'
import UserMenuStackScreen from './src/navigators/UserMenuStackScreen'
import { Feather } from '@expo/vector-icons'
import UserAvatar from './src/components/UserAvatar'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <AppProviders>
      <AuthNavigatorFlow>
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{ tabBarIcon: p => <Feather name="home" size={p.size} color={p.color} /> }}
          />
          <Tab.Screen
            name="Search"
            component={SearchStackScreen}
            options={{ tabBarIcon: p => <Feather name="search" size={p.size} color={p.color} /> }}
          />
          <Tab.Screen
            name="Notifications"
            component={NotificationsStackScreen}
            options={{ tabBarIcon: p => <Feather name="bell" size={p.size} color={p.color} /> }}
          />
          <Tab.Screen
            name="Messages"
            component={MessagesStackScreen}
            options={{ tabBarIcon: p => <Feather name="mail" size={p.size} color={p.color} /> }}
          />
          <Tab.Screen
            name="UserMenu"
            component={UserMenuStackScreen}
            options={{ tabBarIcon: p => <UserAvatar /> }}
          />
        </Tab.Navigator>
      </AuthNavigatorFlow>
    </AppProviders>
  )
}
