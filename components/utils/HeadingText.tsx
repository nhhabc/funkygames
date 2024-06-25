import { Heading, HeadingProps } from '@chakra-ui/react'
import React from 'react'

type THeadingText = HeadingProps & {
  children: React.ReactNode
}

const HeadingText = ({children, ...props}: THeadingText) => {
  return (
    <Heading as={"h1"} fontFamily={"Roboto"} fontWeight={400} fontSize={"1.85714em"}
      lineHeight={"1.6em"} color={"rgb(51, 51, 51)"}
      {...props}>
      {children}
    </Heading>
  )
}

export default HeadingText