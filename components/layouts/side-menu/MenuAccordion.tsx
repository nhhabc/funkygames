import ApiBrand from '@/components/utils/ApiBrand'
import { RootState } from '@/configurations/redux/store'
import { ApiEnum } from '@/constants/enum'
import { handleScrollToElement } from '@/helpers/HandleScrollToElement'
import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Center, ChakraProps, Flex, Image, Text } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux'

type TMenuAccordion = ChakraProps & {
  data: {name: string, id: string, children: {name: string, id: string, type: ApiEnum}[]},
  children?: ReactNode,
  onParentClick?: () => void,
  onClick?: () => void,
}

const MenuAccordion = ({data, onClick, onParentClick, children, ...props}: TMenuAccordion) => {
  const {currentContentSection, currentProvider} = useSelector((state: RootState) => state.client)

  console.log(currentProvider);

  return (
    <AccordionItem border={"0px solid #fff"} {...props}>
      <AccordionButton sx={menuItem}
        justifyContent={'space-between'}
        color={currentContentSection === data.id ? "rgb(50, 50, 159)" : "rgb(51, 51, 51)"} 
        bgColor={currentContentSection === data.id ? "rgb(225, 225, 225)" : "rgb(250, 250, 250)"}
        onClick={() => {
          handleScrollToElement(data.id)
          onParentClick && onParentClick()
        }}
        >
        <Center>
          {children}
          <Text w={"auto"} verticalAlign={"middle"} overflow={"hidden"} textOverflow={"ellipsis"}>
            {data.name}
          </Text>
          {currentProvider?.img && currentProvider.id === data.id && 
            <Image pl={"10px"} alt='provider' src={currentProvider?.img} w={"60px"} h={"30px"} objectFit={"contain"}/>}
        </Center>
        {data.children.length > 0 && <AccordionIcon />}
          </AccordionButton>
          {data.children.length > 0 && <AccordionPanel padding={0}>
            {data.children.map((child, i) => (
              <Flex sx={menuItem} justifyContent={"flex-start"} key={i}
                color={currentContentSection === child.id ? "rgb(50, 50, 159)" : "rgb(51, 51, 51)"} 
                bgColor={currentContentSection === child.id ? "rgb(225, 225, 225)" : "rgb(250, 250, 250)"}
                onClick={() => {
                  handleScrollToElement(child.id)
                  onClick && onClick()
                }}>
                {children}
                {child.type ? <ApiBrand type={child.type} fromMenu={true}/> : <Box w={"15px"}/>}
                {child.name}
              </Flex>
            ))}
          </AccordionPanel>}
        </AccordionItem>
  )
}

export default MenuAccordion

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