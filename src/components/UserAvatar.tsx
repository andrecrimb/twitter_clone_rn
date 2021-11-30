import React from 'react'
import { Avatar } from 'native-base'

const UserAvatar = () => {
  return (
    <Avatar
      bg="indigo.500"
      alignSelf="center"
      size="7"
      source={{
        uri: 'https://www.stichtingbedrijfskunde.nl/wp-content/uploads/2015/03/docent1.jpg'
      }}>
      RS
    </Avatar>
  )
}

export default UserAvatar
