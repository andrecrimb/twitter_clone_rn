import React, { PropsWithChildren } from 'react'
import { useTheme, useColorModeValue } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'

const SafeArea: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { colors } = useTheme()
  const backgroundColor = useColorModeValue(colors.dark[50], colors.light[50])

  return <SafeAreaView style={{ flex: 1, backgroundColor }}>{children}</SafeAreaView>
}

export default SafeArea
