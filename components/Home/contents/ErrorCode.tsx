import HeadingText from '@/components/utils/HeadingText'
import ViewDetect from '@/components/utils/ViewDetect'
import { Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'
import styles from '../css/ContentDisplay.module.css'
import { handleScrollToElement } from '@/helpers/HandleScrollToElement'

const ErrorCode = () => {
  return (
      <ViewDetect id='error_code' threshold={0.7}>
        <div className={styles.section}>
          <Flex>
            <div className={styles.inside_section}>
              <HeadingText my={"0.5em"}>4. Error Code List</HeadingText>
            </div>
          </Flex>
          <div className={styles.inside_section}>
            <Text my={"1em"}>
            See <Link color={"blue"} onClick={() => handleScrollToElement("error_codes_reference")}>Error Codes Appendix.</Link>
            </Text>
          </div>
        </div>
      </ViewDetect>
  )
}

export default ErrorCode