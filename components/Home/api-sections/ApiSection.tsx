import React from 'react'
import { apiData, apiProvider } from '@/constants/dummy-data/dummy-data'
import ApiContainer from './ApiContainer'
import { useSelector } from 'react-redux'
import { RootState } from '@/configurations/redux/store'

const ApiSection = () => {
  const {currentProvider} = useSelector((state: RootState) => state.client)

  return (
    <>
      {apiData.map((api, i) => (
        <ApiContainer data={api} key={i}/>
      ))}
      {apiProvider.map((api, i) => (
        api.id === currentProvider.id && 
          <ApiContainer data={api} key={i}/>
      ))}
    </>
  )
}

export default ApiSection