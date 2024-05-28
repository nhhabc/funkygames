"use client"
import React from 'react'
import styles from "./css/ContentDisplay.module.css"
import Preview from './contents/Preview'

const ContentDisplay = () => {
  

  return (
    <div className={styles.content_container}>
      <Preview/>
    </div>
  )
}

export default ContentDisplay