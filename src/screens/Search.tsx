import React from 'react'
import { Text, Center, useColorMode } from 'native-base'
import { Entypo } from '@expo/vector-icons'
import i18n from '../i18n'

const Search = () => {
  const { colorMode } = useColorMode()

  return (
    <Center flex="1">
      <Entypo name="tools" size={70} color={colorMode === 'dark' ? 'white' : '#18181b'} />
      <Text fontWeight="bold" mt={8} _dark={{ color: 'white' }} _light={{ color: '#18181b' }}>
        {i18n.t('in_development')}
      </Text>
    </Center>
  )
}

export default Search
