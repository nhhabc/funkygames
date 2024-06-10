/* eslint-disable react/no-unescaped-entities */
import HeadingText from '@/components/utils/HeadingText'
import { Flex } from '@chakra-ui/react'
import styles from '../css/ContentDisplay.module.css'
import React from 'react'
import ErrorCode from './ErrorCode'
import Authentication from './Authentication'
import Overview from './Overview'
import Introduction from './Introduction'
import ChangeLog from './ChangeLog'
import Appendix from './Appendix'

const Preview = () => {
  
  return (
    <>
      <div className={styles.section}>
        <Flex>
          <div className={styles.inside_section}>
            <HeadingText mb={"0.5em"}>Mimi gaming API Document for GameProvider</HeadingText>
          </div>
        </Flex>
      </div>
      <Introduction/>
      <Overview/>
      <Authentication/>
      <ErrorCode/>
      <ChangeLog/>
      <Appendix/>
    </>
  )
}

export default Preview