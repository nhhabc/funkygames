import { clientAction } from '@/configurations/redux/client-slice'
import { RootState } from '@/configurations/redux/store'
import { handleScrollToElement } from '@/helpers/HandleScrollToElement'
import { useOutsideClick } from '@/hooks/useOutsideHandler'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Flex, Image, Popover, PopoverContent, PopoverTrigger, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const PopoverSelect = () => {
  const {currentContentSection} = useSelector((state: RootState) => state.client)
  const popoverRef = useRef<any>(null)
  const dispatch = useDispatch()

  return (
    <Popover>
      {({ isOpen, onClose }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useOutsideClick(popoverRef, onClose)

        return (<>
          <PopoverTrigger>
            <Flex sx={menuItem} minW={"100%"} alignItems={'center'} justifyContent={'space-between'}>
              <Text>Seamless API</Text>
              <ChevronDownIcon fontSize={"18px"}/>    
            </Flex>
          </PopoverTrigger>
          <PopoverContent py={"5px"} _focusVisible={{ outline: "none" }} overflow={"auto"} maxW={"260px"}
            ref={popoverRef}>
            {providers.map((provider, i) => (
              <Flex key={i} borderBottom={"1px solid #e5e5e5"} alignItems={'center'} px={"10px"} transition={".2s"} 
                cursor={'pointer'}
                _hover={{ bgColor: "#eee" }}
                onClick={async () => {
                  await dispatch(clientAction.setCurrentProvider(provider))
                  handleScrollToElement(provider.id)
                  onClose()
                }}>
                <Text p={"10px"}>{provider.name}</Text>
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
    name: "PragmaticPlay",
    id: "pragmaticplay",
    img: "/images/PP-logo.png"
  },
  {
    name: "AWC",
    id: "awc",
    img: "/images/awc.png"
  },
  {
    name: "Cockfight",
    id: "cookfight",
    img: "/images/sv388cockfight.png"
  },
  {
    name: "MIMI",
    id: "mimi",
    img: "/images/MimiLogo.png"
  },
  {
    name: "Red Tiger",
    id: "red_tiger",
    img: "/images/REDTIGER-logo.png"
  },
  {
    name: "PGSoft",
    id: "pgsoft",
    img: "/images/POCKET-logo.png"
  },
  {
    name: "WM Live",
    id: "wm_live",
    img: "/images/wm.png"
  },
  {
    name: "JILI",
    id: "jili",
    img: "/images/Logo-Jili.png"
  },
  {
    name: "AdvantPlay",
    id: "advantplay",
    img: "/images/advantPlay.png"
  },
  {
    name: "Funky",
    id: "funky",
    img: "/images/funky.png"
  },
  {
    name: "Spade Gaming",
    id: "spade_gaming",
    img: "/images/spade-games.png"
  },
 
]

const popoverButton = {
  w: "100%",
  color:"#344050",
  boxShadow:"inset 0 1px 2px rgba(0, 0, 0, 0.075)",
  lineHeight:1.5,
  _focusVisible: {
    outline: "none"
  },
  _hover: {
    color: "rgb(50, 50, 159)",
    bgColor: "rgb(225, 225, 225)"
  }
}

const menuItem = {
  display:"flex",
  cursor:'pointer',
  transition:"all .3s",
  fontSize:"0.97em",
  textTransform:'none',
  p:"12.5px 20px",
  fontFamily:"Roboto",
  _hover: {
    color: "rgb(50, 50, 159)",
    bgColor: "rgb(225, 225, 225)"
  }
}