/* eslint-disable react/no-unescaped-entities */
import HeadingText from '@/components/utils/HeadingText'
import ViewDetect from '@/components/utils/ViewDetect'
import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import styles from '../css/ContentDisplay.module.css'

const Introduction = () => {
  return (
    <ViewDetect id='introduction'>
      <div className={styles.section}>
        <Flex>
          <div className={styles.inside_section}>
            <HeadingText my={"0.5em"}>1. Introduction</HeadingText>
          </div>
        </Flex>
        <div className={styles.inside_section}>
          <Text my={"1em"}>This API defines general guideline and set of functions for integrating middleware system with fund provider's system.
            <br/>
            All date and time returned from this API are based on GMT+0. See appendix for more details.
          </Text>
        </div>
      </div>
    </ViewDetect>
  )
}

export default Introduction