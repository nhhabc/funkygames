"use client"
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import SearchIcon from "@/public/svg/search-icon.svg"
import styles from "./css/SideMenu.module.css"
import { data } from '@/constants/dummy-data/dummy-data'
import { useSelector } from 'react-redux'
import { RootState } from '@/configurations/redux/store'

const SideMenu = () => {
  const {currentContentSection} = useSelector((state: RootState) => state.client)

  return (
    <Flex flexDir={"column"} pos={"sticky"} w={"260px"} top={"0px"} h={"calc(0px + 100vh)"} bgColor={"rgb(250, 250, 250)"}>
      <Box>
        <Image alt='logo' src='https://storage.googleapis.com/funky-spec/logo.png'
          maxH={"260px"}
          maxW={"260px"}
          p={"2px"}
          />
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
      <Box overflow={'hidden'} >
        <ul className={styles.menu_list}>
          {data.map((item, i) => (
            <li key={i}>
              <Flex cursor={'pointer'} transition={"all .3s"}
                color={currentContentSection === item.id ? "rgb(50, 50, 159)" : "rgb(51, 51, 51)"} p={"12.5px 20px"} justifyContent={'space-between'} 
                fontSize={"0.929em"} textTransform={'none'} bgColor={currentContentSection === item.id ? "rgb(225, 225, 225)" : "rgb(250, 250, 250)"}
                fontFamily={"Montserrat, sans-serif"}
                _hover={{
                  color: "rgb(50, 50, 159)",
                  bgColor: "rgb(225, 225, 225)"
                }}
                onClick={() => {
                  const violation = document.getElementById(item.id); 
                  if (violation) {
                    window.scrollTo({
                      top: violation?.offsetTop - 100,
                      behavior:"smooth"
                    });
                  }
                }}
                >
                <Text w={"auto"} verticalAlign={"middle"} overflow={"hidden"} textOverflow={"ellipsis"}>
                  {item.name}
                </Text>
              </Flex>
            </li>
          ))}
        </ul>
      </Box>
    </Flex>
  )
}

export default SideMenu