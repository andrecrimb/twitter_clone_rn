import React from 'react'
import { View, Text, useColorMode, MoonIcon, SunIcon, Button } from 'native-base'

const UserMenu = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <View>
      <Text>Hallo UserMenu</Text>
      <Button accessible variant="unstyled" onPress={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </View>
  )
}

export default UserMenu
