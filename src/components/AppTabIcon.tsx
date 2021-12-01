import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useColorModeValue, useTheme } from 'native-base'

type Props = {
  focused: boolean
  size: number
  name: 'home' | 'search' | 'bell' | 'mail'
}

const AppTabIcon = ({ focused, size, name }: Props) => {
  const { colors } = useTheme()
  const color = useColorModeValue(colors.dark[50], colors.light[50])
  return <Feather name={name} size={size} color={focused ? colors.singletons.twitterBlue : color} />
}

export default AppTabIcon
