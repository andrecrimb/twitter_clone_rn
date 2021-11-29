import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserGeneralScreen from '../screens/UserGeneral'

const UserGeneralStack = createNativeStackNavigator()

function UserGeneralStackScreen() {
  return (
    <UserGeneralStack.Navigator>
      <UserGeneralStack.Screen name="UserGeneral" component={UserGeneralScreen} />
    </UserGeneralStack.Navigator>
  )
}

export default UserGeneralStackScreen
