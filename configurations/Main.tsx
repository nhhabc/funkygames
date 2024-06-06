import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import baseTheme from './chakra-ui/theme'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { ScrollProvider } from '@/hooks/useScrollProvider'

type TMainProps = {
  children: React.ReactNode
}

const Main = ({children}: TMainProps) => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={baseTheme}>
        <ScrollProvider>
          {children}
        </ScrollProvider>
      </ChakraProvider>
    </Provider>
  )
}

export default Main