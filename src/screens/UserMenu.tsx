import React from 'react'
import { Center, Text, useColorMode, MoonIcon, SunIcon, Button } from 'native-base'
import { Entypo } from '@expo/vector-icons'
import i18n from '../i18n'

const UserMenu = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Center flex="1">
      <Entypo name="tools" size={70} color={colorMode === 'dark' ? 'white' : '#18181b'} />
      <Text fontWeight="bold" mt={8} _dark={{ color: 'white' }} _light={{ color: '#18181b' }}>
        {i18n.t('in_development')}
      </Text>
      <Button
        position="absolute"
        bottom={10}
        accessible
        variant="unstyled"
        onPress={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Center>
  )
}

export default UserMenu
