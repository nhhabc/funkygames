"use client"
import { Accordion, Box, Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SearchIcon from "@/public/svg/search-icon.svg"
import styles from "./css/SideMenu.module.css"
import { data, providerMenu } from '@/constants/dummy-data/dummy-data'
import { useSelector } from 'react-redux'
import { RootState } from '@/configurations/redux/store'
import PopoverSelect from './side-menu/PopoverSelect'
import { handleScrollToElement } from '@/helpers/HandleScrollToElement'
import MenuAccordion from './side-menu/MenuAccordion'

const numberDataPreview = data.filter(item => item.children.length > 0).length

const SideMenu = () => {
  const {currentContentSection, currentProvider} = useSelector((state: RootState) => state.client)
  const [currentMenuIndex, setCurrentMenuIndex] = useState<number|number[]>(-1)

  useEffect(() => {
    const dataSliced = data.concat(providerMenu).slice(numberDataPreview)
    const indexFirstTime = dataSliced.findIndex(item => item.children.some((child) => child.id === currentContentSection))
    const indexSecondTime = dataSliced.findIndex(item => item.id == currentContentSection)
    
    if (indexFirstTime < 0) {
      setCurrentMenuIndex(indexSecondTime)
    } else {
      setCurrentMenuIndex(indexFirstTime)
    }
  }, [currentContentSection])

  console.log(currentProvider);
  
  return (
    <Flex flexDir={"column"} pos={"sticky"} w={"260px"} top={"0px"} h={"calc(0px + 100vh)"} bgColor={"rgb(250, 250, 250)"}>
      <Box>
        <Image alt='' src='/images/MimiLogo.png' 
          maxH={"260px"}
          maxW={"260px"}
          p={"2px"}/>
      </Box>
      <Box py={"5px"} pos={'relative'}>
        <Box position="absolute"
            left="20px"
            top={"50%"}
            transform={"translateY(-50%)"}>
          <SearchIcon
            width="0.9em"
            height="1.8em"/>
        </Box>
        <input className={styles.search_input} placeholder='Search...'/>
      </Box>
      <Accordion overflow={'hidden'} allowToggle onChange={(i) => setCurrentMenuIndex(i)}
        index={currentMenuIndex}>
        <ul className={styles.menu_list}>
          {data.map((item, i) => {
            if (item.children.length === 0) return (<Flex key={i} sx={menuItem} 
                color={currentContentSection === item.id ? "rgb(50, 50, 159)" : "rgb(51, 51, 51)"} 
                bgColor={currentContentSection === item.id ? "rgb(225, 225, 225)" : "rgb(250, 250, 250)"}
                onClick={() => handleScrollToElement(item.id)}
                >
                <Text w={"auto"} verticalAlign={"middle"} overflow={"hidden"} textOverflow={"ellipsis"}>
                  {item.name}
                </Text>
              </Flex>)

            return (<MenuAccordion data={item} key={i}/>)
              })}
          <PopoverSelect/>
          {providerMenu.map((item, i) => (
            <MenuAccordion data={item} key={i} display={item.id === currentProvider.id ? "block" : "none"}/>
          ))}
        </ul>
      </Accordion>
    </Flex>
  )
}

export default SideMenu

const menuItem = {
  display:"flex",
  cursor:'pointer',
  transition:"all .3s",
  fontSize:"0.929em",
  textTransform:'none',
  p:"12.5px 20px",
  fontFamily:"Montserrat, sans-serif",
  _hover: {
    color: "rgb(50, 50, 159)",
    bgColor: "rgb(225, 225, 225)"
  }
}