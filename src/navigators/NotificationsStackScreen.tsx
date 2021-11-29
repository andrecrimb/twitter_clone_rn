import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NotificationsScreen from '../screens/Notifications'

const NotificationsStack = createNativeStackNavigator()

function NotificationsStackScreen() {
  return (
    <NotificationsStack.Navigator>
      <NotificationsStack.Screen name="Notifications" component={NotificationsScreen} />
    </NotificationsStack.Navigator>
  )
}

export default NotificationsStackScreen
