import HeadingText from '@/components/utils/HeadingText'
import ViewDetect from '@/components/utils/ViewDetect'
import { errorCode } from '@/constants/dummy-data/dummy-data'
import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import styles from '../css/ContentDisplay.module.css'

const ErrorCode = () => {
  return (
      <ViewDetect id='error_code'>
        <div className={styles.section}>
          <Flex>
            <div className={styles.inside_section}>
              <HeadingText my={"0.5em"}>Error Code List</HeadingText>
            </div>
          </Flex>
          <div className={styles.inside_section}>
            <Text my={"1em"}>
              Following are the error code which should be responded to Funky System properly and vice versa.
            </Text>
            <table>
              <thead>
                <tr>
                  <th>Error Code</th>
                  <th>Error Message</th>
                </tr>
              </thead>
              <tbody>
                {errorCode.map((item, i) => (
                  <tr key={i}>
                    <td>{item.code}</td>
                    <td>{item.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ViewDetect>
  )
}

export default ErrorCode