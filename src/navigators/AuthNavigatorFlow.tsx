import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import AppLoading from 'expo-app-loading'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from 'native-base'
import useUser from '../hooks/useUser'

const Stack = createNativeStackNavigator()

const AuthNavigatorFlow = ({ children }: { children: React.ReactNode }) => {
  const { colors } = useTheme()

  const isLoading = false
  const { data } = useUser()

  if (isLoading) return <AppLoading />

  return data?.['name'] ? (
    <>{children}</>
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Ionicons name="md-logo-twitter" size={30} color={colors.singletons.twitterBlue} />
          )
        }}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigatorFlow
