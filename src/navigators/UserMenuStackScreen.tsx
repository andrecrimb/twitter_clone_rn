import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserMenuScreen from '../screens/UserMenu'
import i18n from '../i18n'

const UserMenuStack = createNativeStackNavigator()

function UserMenuStackScreen() {
  return (
    <UserMenuStack.Navigator>
      <UserMenuStack.Screen name={i18n.t('user_menu')} component={UserMenuScreen} />
    </UserMenuStack.Navigator>
  )
}

export default UserMenuStackScreen
