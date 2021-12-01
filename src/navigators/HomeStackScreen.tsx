import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/Home'
import { useTheme } from 'native-base'
import { Ionicons } from '@expo/vector-icons'

const HomeStack = createNativeStackNavigator()

function HomeStackScreen() {
  const { colors } = useTheme()

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Ionicons name="md-logo-twitter" size={30} color={colors.singletons.twitterBlue} />
          )
        }}
      />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen
