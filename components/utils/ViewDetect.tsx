import { clientAction } from '@/configurations/redux/client-slice'
import { useScrollProvider } from '@/hooks/useScrollProvider'
import { Box } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

type TViewDetect = {
  children: React.ReactNode
  id: string
  threshold?: number
}

const ViewDetect = ({children, threshold, id}: TViewDetect) => {
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
    <Box ref={ref} id={id}>
      {children}
    </Box>
  )
}

export default ViewDetect