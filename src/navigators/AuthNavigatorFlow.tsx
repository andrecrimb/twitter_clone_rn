import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import AppLoading from 'expo-app-loading'

const Stack = createNativeStackNavigator()

const AuthNavigatorFlow = ({ children }: { children: React.ReactNode }) => {
  const isLoading = false
  const isSignedIn = true

  if (isLoading) return <AppLoading />

  return isSignedIn ? (
    <>{children}</>
  ) : (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

export default AuthNavigatorFlow
