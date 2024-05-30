"use client"
import React from 'react'
import styles from "./css/ContentDisplay.module.css"
import Preview from './contents/Preview'
import ApiSection from './api-sections/ApiSection'

const ContentDisplay = () => {
  

  return (
    <div className={styles.content_container}>
      <Preview/>
      <ApiSection/>
    </div>
  )
}

export default ContentDisplay