import React from 'react'
import {
  Button,
  Text,
  Box,
  HStack,
  Avatar,
  VStack,
  Spacer,
  useTheme,
  useColorModeValue
} from 'native-base'
import { FlatList, Share, StyleSheet } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    fullName: 'Aafreen Khan',
    timeStamp: '12:47 PM',
    recentText:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, ',
    avatarUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    fullName: 'Sujitha Mathur',
    timeStamp: '11:11 PM',
    recentText:
      ' et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet',
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    fullName: 'Anci Barroco',
    timeStamp: '6:22 PM',
    recentText:
      'eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et',
    avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg'
  },
  {
    id: '68694a0f-3da1-431f-bd56-142371e29d72',
    fullName: 'Aniket Kumar',
    timeStamp: '8:56 PM',
    recentText:
      'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU'
  },
  {
    id: '28694a0f-3da1-471f-bd96-142456e29d72',
    fullName: 'Kiara',
    timeStamp: '12:47 PM',
    recentText:
      'eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et',
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU'
  }
]

const onShare = async () => {
  try {
    const result = await Share.share({
      message: 'Sharing random post 😉'
    })
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error: any) {
    alert(error.message)
  }
}

const FeedFlatList = () => {
  const { colors } = useTheme()
  const color = useColorModeValue(colors.coolGray[500], colors.warmGray[50])

  const renderItem = React.useCallback(
    ({ item }: any) => (
      <Box
        borderBottomWidth="1"
        _dark={{ borderColor: 'gray.800' }}
        borderColor="coolGray.200"
        pl="4"
        pr="5"
        py="2">
        <HStack space={3} justifyContent="space-between">
          <Avatar size="48px" source={{ uri: item.avatarUrl }} />
          <VStack flexShrink="1">
            <HStack alignItems="center">
              <Text mr="2" _dark={{ color: 'warmGray.50' }} color="coolGray.800" bold>
                {item.fullName}
              </Text>
              <Text
                fontWeight="bold"
                fontSize="xs"
                _dark={{ color: 'warmGray.50' }}
                color="coolGray.500">
                {item.timeStamp}
              </Text>
            </HStack>
            <Text color="coolGray.800" _dark={{ color: 'warmGray.200' }}>
              {item.recentText}
            </Text>
            <HStack justifyContent="space-between">
              <Button variant="unstyled">
                <EvilIcons name="comment" size={28} color={color} />
              </Button>
              <Button variant="unstyled">
                <EvilIcons name="retweet" size={28} color={color} />
              </Button>
              <Button variant="unstyled">
                <EvilIcons name="heart" size={28} color={color} />
              </Button>
              <Button onPress={onShare} variant="unstyled">
                <EvilIcons name="share-apple" size={28} color={color} />
              </Button>
            </HStack>
          </VStack>
          <Spacer />
        </HStack>
      </Box>
    ),
    [color]
  )

  return (
    <FlatList
      style={styles.flatWrapper}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  )
}

const styles = StyleSheet.create({
  flatWrapper: { flex: 1 }
})

export default FeedFlatList
