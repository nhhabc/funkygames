"use client"
import React from 'react'
import styles from "./css/ContentDisplay.module.css"
import Preview from './contents/Preview'
import ApiSection from './api-sections/ApiSection'
import { Box } from '@chakra-ui/react'

const ContentDisplay = () => {
  

  return (
    <Box className={styles.content_container} w={["calc(100%)","calc(100%)","calc(100% - 260px)","calc(100% - 260px)"]}>
      <Preview/>
      <ApiSection/>
    </Box>
  )
}

export default ContentDisplay