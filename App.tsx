import React from 'react'
import AppProviders from './src/context/AppProviders'
import AuthNavigatorFlow from './src/navigators/AuthNavigatorFlow'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackScreen from './src/navigators/HomeStackScreen'
import SearchStackScreen from './src/navigators/SearchStackScreen'
import NotificationsStackScreen from './src/navigators/NotificationsStackScreen'
import UserGeneralStackScreen from './src/navigators/UserGeneralStackScreen'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <AppProviders>
      <AuthNavigatorFlow>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Search" component={SearchStackScreen} />
          <Tab.Screen name="Notifications" component={NotificationsStackScreen} />
          <Tab.Screen name="General" component={UserGeneralStackScreen} />
        </Tab.Navigator>
      </AuthNavigatorFlow>
    </AppProviders>
  )
}
