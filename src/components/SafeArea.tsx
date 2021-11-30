import { useColorMode, useTheme } from 'native-base'
import React, { PropsWithChildren } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SafeArea: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { colorMode } = useColorMode()
  const { colors } = useTheme()

  return (
    <SafeAreaView
      style={{
        flex: 1
        // backgroundColor: colorMode === 'dark' ? colors.singletons.black : colors.singletons.white
      }}>
      {children}
    </SafeAreaView>
  )
}

export default SafeArea
