import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MessagesScreen from '../screens/Messages'

const MessagesStack = createNativeStackNavigator()

function MessagesStackScreen() {
  return (
    <MessagesStack.Navigator>
      <MessagesStack.Screen name="Messages" component={MessagesScreen} />
    </MessagesStack.Navigator>
  )
}

export default MessagesStackScreen
