import React, { PropsWithChildren } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useColorMode } from 'native-base'
import { navigatorTheme } from '../theme'

const NavigationContainerWithTheme: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { colorMode } = useColorMode()

  return (
    <NavigationContainer theme={navigatorTheme[colorMode ?? 'light']}>
      {children}
    </NavigationContainer>
  )
}

export default NavigationContainerWithTheme
