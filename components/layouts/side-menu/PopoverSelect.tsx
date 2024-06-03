import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Flex, Image, Popover, PopoverContent, PopoverTrigger, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const PopoverSelect = () => {
  const [currentProvider, setCurrentProvider] = useState({
    name: "",
    img: ""
  })

  return (
    <Popover>
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger>
            <Button sx={popoverButton}>
              <Flex minW={"100%"} borderRadius={"10px"} alignItems={'center'} justifyContent={'space-between'}>
                <Text fontWeight={400} fontSize={"14px"}>{currentProvider.name ?? "Select Provider"}</Text>
                <ChevronDownIcon/>    
              </Flex>
            </Button>
          </PopoverTrigger>
          <PopoverContent py={"5px"} _focusVisible={{ outline: "none" }} overflow={"auto"} maxW={"260px"}>
            {providers.map((provider, i) => (
              <Flex key={i} borderBottom={"1px solid #e5e5e5"} alignItems={'center'} px={"10px"} transition={".2s"} 
                cursor={'pointer'}
                _hover={{ bgColor: "#eee" }}
                onClick={() => {
                  setCurrentProvider(provider)
                  onClose()
                }}>
                <Text px={"10px"}>{provider.name}</Text>
                {provider.img && <Image alt={provider.name} src={provider.img} h={"12px"}/>}
              </Flex>
            ))}
          </PopoverContent>
        </>
      )}
    </Popover>
  )
}

export default PopoverSelect

const providers = [
  {
    name: "Please select a provider",
    img: ""
  },
  {
    name: "MIMI",
    img: "/images/MimiLogo.png"
  },
  {
    name: "JILI",
    img: "/images/Logo-Jili.png"
  },
  {
    name: "King Maker",
    img: "/images/117.png"
  },
  {
    name: "JDB",
    img: "/images/41.png"
  },
]

const popoverButton = {
  h:"35px",
  color:"#344050",
  border:"1px solid #d8e2ef",
  borderRadius:"0.25rem",
  boxShadow:"inset 0 1px 2px rgba(0, 0, 0, 0.075)",
  lineHeight:1.5,
  _focusVisible: {
    outline: "none"
  }
}