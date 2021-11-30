import React, { PropsWithChildren } from 'react'
import { NativeBaseProvider } from 'native-base'
import { QueryClient, QueryClientProvider } from 'react-query'
import { nativeBaseTheme } from '../theme'
import NavigationContainerWithTheme from './NavigationContainerWithTheme'

//* setup dayjs
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import 'intl'
import 'intl/locale-data/jsonp/en'

//* setup internationalization
import '../i18n'

//* dayjs default props
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.guess()

//* react query default props
const queryClient = new QueryClient({
  defaultOptions: { queries: { notifyOnChangeProps: 'tracked' } }
})

type Props = { nativeBaseInitialWindowMetrics?: any }

const AppProviders: React.FC<PropsWithChildren<Props>> = ({
  children,
  nativeBaseInitialWindowMetrics
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider
        theme={nativeBaseTheme}
        initialWindowMetrics={nativeBaseInitialWindowMetrics}>
        <NavigationContainerWithTheme>{children}</NavigationContainerWithTheme>
      </NativeBaseProvider>
    </QueryClientProvider>
  )
}

export default AppProviders
