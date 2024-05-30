import { ApiEnum } from '@/constants/enum'
import { Box } from '@chakra-ui/react'
import React from 'react'

type TApiBrand = {
  type: ApiEnum
  fromMenu?: boolean
}

const ApiBrand = ({type, fromMenu = false}: TApiBrand) => {

  const bgColor = (type: ApiEnum) => {
    switch (type) {
      case ApiEnum.GET:
        return "rgb(47, 129, 50)"
      case ApiEnum.POST:
        return "rgb(24, 111, 175)"
      default:
        return "rgb(47, 129, 50)"
    }
  }

  return (
    <Box sx={fromMenu ? menuBrand : normalBrand}
    bgColor={bgColor(type)}
    >
      {type}
    </Box>
  )
}

export default ApiBrand

const menuBrand = {
  width:"9ex",
  h:"13px",
  display:"inline-block",
  lineHeight:"13px",
  bgRepeat:"no-repeat",
  borderRadius:"3px",
  bgPos:"6px 4px",
  fontSize:"7px",
  fontFamily:"Verdana, sans-serif",
  color:"#fff",
  textTransform:'uppercase',
  textAlign:'center',
  fontWeight:"bold",
  verticalAlign:"center",
  mt:"2px",
  mr:"6px",
}

const normalBrand = {
  fontSize:"0.929em",
  lineHeight:"20px",
  color:"#fff",
  p:"3px 10px",
  textTransform:"uppercase",
  fontFamily:"Montserrat, sans-serif",
  m:"0px",
}