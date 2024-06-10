import { clientAction } from '@/configurations/redux/client-slice'
import { RootState } from '@/configurations/redux/store'
import { useOutsideClick } from '@/hooks/useOutsideHandler'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Flex, Image, Popover, PopoverContent, PopoverTrigger, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const PopoverSelect = () => {
  const popoverRef = useRef<any>(null)
  const {currentProvider} = useSelector((state: RootState) => state.client)
  const dispatch = useDispatch()

  return (
    <Popover>
      {({ isOpen, onClose }) => {
        useOutsideClick(popoverRef, onClose)

        return (<>
          <PopoverTrigger>
            <Button sx={popoverButton}>
              <Flex minW={"100%"} borderRadius={"10px"} alignItems={'center'} justifyContent={'space-between'}>
                <Text fontWeight={400} fontSize={"14px"}>{currentProvider.name ? currentProvider.name : "Select Provider"}</Text>
                <ChevronDownIcon/>    
              </Flex>
            </Button>
          </PopoverTrigger>
          <PopoverContent py={"5px"} _focusVisible={{ outline: "none" }} overflow={"auto"} maxW={"260px"}
            ref={popoverRef}>
            {providers.map((provider, i) => (
              <Flex key={i} borderBottom={"1px solid #e5e5e5"} alignItems={'center'} px={"10px"} transition={".2s"} 
                cursor={'pointer'}
                _hover={{ bgColor: "#eee" }}
                onClick={() => {
                  dispatch(clientAction.setCurrentProvider(provider))
                  onClose()
                }}>
                <Text px={"10px"}>{provider.name}</Text>
                {provider.img && <Image alt={provider.name} src={provider.img} h={"12px"}/>}
              </Flex>
            ))}
          </PopoverContent>
        </>)
      }}
    </Popover>
  )
}

export default PopoverSelect

const providers = [
  {
    name: "Select Provider",
    value: "",
    img: ""
  },
  {
    name: "Pragmatic Play",
    id: "pragmatic_play",
    img: ""
  },
  {
    name: "MIMI",
    id: "mimi",
    img: ""
  },
  {
    name: "Red Tiger",
    id: "red_tiger",
    img: ""
  },
  {
    name: "PGSoft",
    id: "pgsoft",
    img: ""
  },
  {
    name: "Spade Gaming",
    id: "spade_gaming",
    img: ""
  },
  {
    name: "Gamatron",
    id: "gamatron",
    img: "/images/MimiLogo.png"
  },
  {
    name: "EvoPlay",
    id: "evoplay",
    img: ""
  },
]

const popoverButton = {
  h:"35px",
  w: "100%",
  color:"#344050",
  border:"1px solid #d8e2ef",
  borderRadius:"0.25rem",
  boxShadow:"inset 0 1px 2px rgba(0, 0, 0, 0.075)",
  lineHeight:1.5,
  _focusVisible: {
    outline: "none"
  }
}