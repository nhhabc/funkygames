import React from 'react'
import { apiData } from '@/constants/dummy-data/dummy-data'
import ApiContainer from './ApiContainer'

const ApiSection = () => {
  return (
    <>
      {apiData.map((api, i) => (
        <ApiContainer data={api} key={i}/>
      ))}
    </>
  )
}

export default ApiSection