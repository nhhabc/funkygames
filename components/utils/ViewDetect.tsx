import { clientAction } from '@/configurations/redux/client-slice'
import { useScrollProvider } from '@/hooks/useScrollProvider'
import { Box, ChakraProps } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

type TViewDetect = ChakraProps & {
  children: React.ReactNode
  id: string
  threshold?: number
}

const ViewDetect = ({children, threshold, id, ...props}: TViewDetect) => {
  const dispatch = useDispatch()
  const ref = useRef<any>(null)
  const {offset} = useScrollProvider()

  useEffect(() => {
    if (ref.current) {
      const {offsetTop} = ref?.current
      const {y} = ref?.current?.getBoundingClientRect()
      
      if (offsetTop <= offset && offset > y) {
        dispatch(clientAction.setCurrentContentSection(id))
      }
    }
  }, [offset])

  return (
    <Box ref={ref} id={id} {...props}>
      {children}
    </Box>
  )
}

export default ViewDetect