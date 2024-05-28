import { clientAction } from '@/configurations/redux/client-slice'
import React from 'react'
import { InView } from 'react-intersection-observer'
import { useDispatch } from 'react-redux'

type TViewDetect = {
  children: React.ReactNode
  id: string
  threshold?: number
}

const ViewDetect = ({children, threshold, id}: TViewDetect) => {
  const dispatch = useDispatch()

  const setInView = (inView: boolean, entry: any) => {
    if (inView) {
      dispatch(clientAction.setCurrentContentSection(entry.target.getAttribute("id")))
    }
  };

  return (
    <InView threshold={threshold ? threshold : 0.5} onChange={setInView} id={id}>
      {children}
    </InView>
  )
}

export default ViewDetect