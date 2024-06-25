"use client"
import { Accordion, Box, Center, Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import styles from "./css/SideMenu.module.css"
import { data, providerMenu } from '@/constants/dummy-data/dummy-data'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/configurations/redux/store'
import PopoverSelect from './side-menu/PopoverSelect'
import { handleScrollToElement } from '@/helpers/HandleScrollToElement'
import MenuAccordion from './side-menu/MenuAccordion'
import MenuUpIco from "@/public/svg/menu_up.svg"
import MenuDownIco from "@/public/svg/menu_down.svg"
import { clientAction } from '@/configurations/redux/client-slice'

const numberDataPreview = data.filter(item => item.children.length === 0).length

const SideMenu = () => {
  const {currentContentSection, currentProvider} = useSelector((state: RootState) => state.client)
  const [currentMenuIndex, setCurrentMenuIndex] = useState<number|number[]>(-1)
  const [isShowMenu, setIsShowMenu] = useState(false)
  const menuRef = useRef(null)
  const dispatch = useDispatch()
  
  const disableMenuOpen = () => {
    setIsShowMenu(false)
  }
  
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

  return (
    <>
      <Flex ref={menuRef} flexDir={"column"} pos={["fixed","fixed","sticky","sticky"]}
        w={"260px"} top={"0px"} h={"calc(0px + 100vh)"} bgColor={"rgb(250, 250, 250)"}
        transition={"0.3s"} zIndex={1000}
        transform={[
          isShowMenu ? "translateX(0)" : "translateX(-100%)", 
          isShowMenu ? "translateX(0)" : "translateX(-100%)",
          "translateX(0)","translateX(0)"]}>
        <Center>
          <Image  className={styles.logo} alt='' src='/images/logoMiMi.png'
            objectFit={"cover"}/>
        </Center>
        {/* <Box py={"5px"} pos={'relative'}>
          <Box position="absolute"
              left="20px"
              top={"50%"}
              transform={"translateY(-50%)"}>
            <SearchIcon
              width="0.9em"
              height="1.8em"/>
          </Box>
            <input className={styles.search_input} placeholder='Search...'/>
        </Box> */}
        <Accordion overflow={'hidden'} allowToggle onChange={(i) => setCurrentMenuIndex(i)}
          index={currentMenuIndex}>
          <ul className={styles.menu_list}>
            {data.map((item, i) => {
              if (item.children.length === 0) return (<Flex key={i} sx={menuItem} 
                  color={currentContentSection === item.id ? "rgb(50, 50, 159)" : "rgb(51, 51, 51)"} 
                  bgColor={currentContentSection === item.id ? "rgb(225, 225, 225)" : "rgb(250, 250, 250)"}
                  onClick={() => {
                    handleScrollToElement(item.id)
                    dispatch(clientAction.setCurrentProvider(""))
                    item.children.length === 0 && disableMenuOpen()
                  }}
                  >
                  <Text w={"auto"} verticalAlign={"middle"} overflow={"hidden"} textOverflow={"ellipsis"}>
                    {item.name}
                  </Text>
                </Flex>)

              return (<MenuAccordion data={item} key={i} 
                  onClick={() => disableMenuOpen()} 
                  onParentClick={() => {
                    dispatch(clientAction.setCurrentProvider(""))
                  }}/>)
                })}
            <PopoverSelect/>
            {providerMenu.map((item, i) => (
              <MenuAccordion data={item} key={i} onClick={() => disableMenuOpen()} 
                display={item.id === currentProvider.id ? "block" : "none"}/>
            ))}
          </ul>
        </Accordion>
      </Flex>
      <Flex className={styles.menu_button} onClick={() => setIsShowMenu(!isShowMenu)} 
        display={["flex","flex","none","none"]}>
        <Center className={styles.menu_button_inside}>
          <Box transform={isShowMenu ? "translate(-2px, 15px)" : "translate(-2px, 0px)"} transition={"0.2s"}>
            <MenuUpIco/>
          </Box>
          <Box transform={isShowMenu ? "translate(-2px, -15px)" : "translate(-2px, 0px)"} transition={"0.2s"}>
            <MenuDownIco/>
          </Box>
        </Center>
      </Flex>
    </>
  )
}

export default SideMenu

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