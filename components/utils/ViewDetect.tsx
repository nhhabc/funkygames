import { clientAction } from '@/configurations/redux/client-slice'
import React from 'react'
import { InView } from 'react-intersection-observer'
import { useDispatch } from 'react-redux'

type TViewDetect = {
  children: React.ReactNode
  id: string
}

const ViewDetect = ({children, id}: TViewDetect) => {
  const dispatch = useDispatch()

  const setInView = (inView: boolean, entry: any) => {
    if (inView) {
      dispatch(clientAction.setCurrentContentSection(entry.target.getAttribute("id")))
    }
  };

  return (
    <InView threshold={0.5} onChange={setInView} id={id}>
      {children}
    </InView>
  )
}

export default ViewDetect