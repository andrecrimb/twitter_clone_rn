import React from 'react'
import AppProviders from './src/context/AppProviders'
import AuthNavigatorFlow from './src/navigators/AuthNavigatorFlow'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackScreen from './src/navigators/HomeStackScreen'
import SearchStackScreen from './src/navigators/SearchStackScreen'
import NotificationsStackScreen from './src/navigators/NotificationsStackScreen'
import MessagesStackScreen from './src/navigators/MessagesStackScreen'
import UserMenuStackScreen from './src/navigators/UserMenuStackScreen'
import UserAvatar from './src/components/UserAvatar'
import { useTheme } from '@react-navigation/native'
import AppTabIcon from './src/components/AppTabIcon'

const Tab = createBottomTabNavigator()

export default function App() {
  const { colors } = useTheme()

  return (
    <AppProviders>
      <AuthNavigatorFlow>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarInactiveTintColor: colors.text
          }}>
          <Tab.Screen
            name="Tab Home"
            component={HomeStackScreen}
            options={{
              tabBarIcon: p => <AppTabIcon name="home" size={p.size} focused={p.focused} />
            }}
          />
          <Tab.Screen
            name="Tab Search"
            component={SearchStackScreen}
            options={{
              tabBarIcon: p => <AppTabIcon name="search" size={p.size} focused={p.focused} />
            }}
          />
          <Tab.Screen
            name="Tab Notifications"
            component={NotificationsStackScreen}
            options={{
              tabBarIcon: p => <AppTabIcon name="bell" size={p.size} focused={p.focused} />
            }}
          />
          <Tab.Screen
            name="Tab Messages"
            component={MessagesStackScreen}
            options={{
              tabBarIcon: p => <AppTabIcon name="mail" size={p.size} focused={p.focused} />
            }}
          />
          <Tab.Screen
            name="Tab UserMenu"
            component={UserMenuStackScreen}
            options={{ tabBarIcon: p => <UserAvatar /> }}
          />
        </Tab.Navigator>
      </AuthNavigatorFlow>
    </AppProviders>
  )
}
