import HeadingText from '@/components/utils/HeadingText'
import ViewDetect from '@/components/utils/ViewDetect'
import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import styles from '../css/ContentDisplay.module.css'

const ErrorCode = () => {
  return (
      <ViewDetect id='error_code' threshold={0.7}>
        <div className={styles.section}>
          <Flex>
            <div className={styles.inside_section}>
              <HeadingText my={"0.5em"}>Error Code List</HeadingText>
            </div>
          </Flex>
          <div className={styles.inside_section}>
            <Text my={"1em"}>
            See Error Codes Appendix.
            </Text>
          </div>
        </div>
      </ViewDetect>
  )
}

export default ErrorCode