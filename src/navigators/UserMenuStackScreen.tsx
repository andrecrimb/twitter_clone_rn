import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserMenuScreen from '../screens/UserMenu'

const UserMenuStack = createNativeStackNavigator()

function UserMenuStackScreen() {
  return (
    <UserMenuStack.Navigator>
      <UserMenuStack.Screen name="UserMenu" component={UserMenuScreen} />
    </UserMenuStack.Navigator>
  )
}

export default UserMenuStackScreen
