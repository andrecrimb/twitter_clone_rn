import { extendTheme } from 'native-base'
import { DefaultTheme, DarkTheme, Theme } from '@react-navigation/native'

const twitterBlue = '#1d9bf0'

export const nativeBaseTheme = extendTheme({
  useSystemColorMode: true,
  colors: {
    singletons: {
      twitterBlue
    }
  }
})

export const navigatorTheme: { dark: Theme; light: Theme } = {
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: twitterBlue
    }
  },
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: twitterBlue,
      background: '#fff'
    }
  }
}
